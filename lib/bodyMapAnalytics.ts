// ─── Body Map Analytics ───────────────────────────────────────────────────────
//
// PHI-SAFE DEFAULT (Mode A): zone-level identifiers (zoneId, conditionId) are
// never transmitted to third-party analytics platforms by default.
//
// HIPAA NOTICE: Body area selections may constitute health-adjacent data.
// HHS guidance on online tracking technologies specifies that transmitting
// health-related data to third parties (e.g., Google Analytics) without a
// HIPAA Business Associate Agreement (BAA) creates compliance risk for
// covered entities. Google Analytics does not provide a BAA.
//
// To enable Mode B (zone-level events), you must:
//   1. Switch to a HIPAA-compliant analytics vendor that provides a BAA.
//   2. Get written approval from clinic management / legal.
//   3. Set ANALYTICS_MODE = 'zone' below.
// ─────────────────────────────────────────────────────────────────────────────

type AnalyticsMode = 'safe' | 'zone';

/**
 * Default: 'safe'.
 * Change to 'zone' ONLY with a HIPAA-compliant analytics vendor + BAA in place.
 */
const ANALYTICS_MODE: AnalyticsMode = 'safe';

/** Fields that may be health-adjacent and must be stripped in 'safe' mode. */
const PHI_ADJACENT_FIELDS = ['zoneId', 'conditionId'] as const;

/**
 * Fire a body map analytics event.
 * In Mode A (safe), PHI-adjacent fields are stripped before sending.
 * In Mode B (zone), all fields are sent — only enable with BAA-approved tooling.
 */
export function trackBodyMapEvent(
  eventName: string,
  payload: Record<string, unknown>,
): void {
  if (typeof window === 'undefined') return;

  const sanitized =
    ANALYTICS_MODE === 'safe'
      ? Object.fromEntries(
          Object.entries(payload).filter(
            ([k]) => !(PHI_ADJACENT_FIELDS as readonly string[]).includes(k),
          ),
        )
      : payload;

  // Google Analytics 4 (gtag) — only fires if GA is loaded on the page.
  // @ts-expect-error — window.gtag is not in TypeScript global types
  if (typeof window.gtag === 'function') {
    // @ts-expect-error — window.gtag call site not typed
    window.gtag('event', eventName, sanitized);
  }
}

// ── Event name constants ──────────────────────────────────────────────────────

/** Component entered the viewport for the first time. */
export const EVT_VIEW    = 'body_map_view'    as const;
/** First click/tap or keyboard activation on any zone. */
export const EVT_ENGAGE  = 'body_map_engage'  as const;
/** A zone was selected (Mode B only: includes zoneId). */
export const EVT_SELECT  = 'body_map_zone_select' as const;
/** A condition link was clicked (Mode B only: includes conditionId). */
export const EVT_COND    = 'body_map_condition_click' as const;
/** User cleared the selection. */
export const EVT_CLEAR   = 'body_map_clear'   as const;
