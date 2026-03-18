'use client';

import { useState, useEffect } from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────────
export type ClinicCity = 'Manhattan' | 'Brooklyn' | 'New York City';

export interface UseUserLocationResult {
  city:      ClinicCity;
  isLoading: boolean;
}

// ─── Cache helpers ─────────────────────────────────────────────────────────────
const CACHE_KEY    = 'insync_user_city';
const CACHE_TTL_MS = 1000 * 60 * 60 * 4; // 4 hours

function getCached(): ClinicCity | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { city, ts } = JSON.parse(raw) as { city: ClinicCity; ts: number };
    if (Date.now() - ts > CACHE_TTL_MS) return null;
    return city;
  } catch {
    return null;
  }
}

function setCache(city: ClinicCity): void {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ city, ts: Date.now() }));
  } catch {
    // sessionStorage unavailable — degrade gracefully
  }
}

// ─── City parser ───────────────────────────────────────────────────────────────
function parseCity(rawCity: string, rawRegion: string): ClinicCity {
  const city   = rawCity.toLowerCase();
  const region = rawRegion.toLowerCase();

  if (city.includes('brooklyn')) return 'Brooklyn';

  if (
    city.includes('new york')  ||
    city.includes('manhattan') ||
    city.includes('bronx')     ||
    city.includes('queens')    ||
    city.includes('staten')    ||
    region === 'new york'
  ) return 'Manhattan';

  return 'New York City';
}

// ─── Hook ──────────────────────────────────────────────────────────────────────
/**
 * useUserLocation
 * Resolves the nearest InSync clinic city from the visitor's IP.
 * Returns 'Brooklyn', 'Manhattan', or 'New York City' (default fallback).
 * Results are cached in sessionStorage for 4 hours to avoid repeat API calls.
 */
export function useUserLocation(): UseUserLocationResult {
  const [city,      setCity]    = useState<ClinicCity>('New York City');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const cached = getCached();
    if (cached) {
      setCity(cached);
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const timer      = setTimeout(() => controller.abort(), 3500);

    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then(r  => r.json())
      .then(data => {
        const result = parseCity(data?.city ?? '', data?.region ?? '');
        setCity(result);
        setCache(result);
      })
      .catch(() => {
        // Keep default 'New York City' on any error
      })
      .finally(() => {
        clearTimeout(timer);
        setLoading(false);
      });

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, []);

  return { city, isLoading };
}
