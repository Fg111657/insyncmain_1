import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy-initialize so missing env var doesn't break the build
function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY environment variable is not set.');
  return new Resend(key);
}

const ADMIN_EMAIL  = process.env.ADMIN_EMAIL  ?? 'insyncpt.manager@gmail.com';
const EMAIL_FROM   = process.env.EMAIL_FROM   ?? 'InSync Physical Therapy <noreply@insync-pt.com>';
const SITE_URL     = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://insync-pt.com';

// ─── Helpers ──────────────────────────────────────────────────────────────────
function adminEmailHtml(data: Record<string, string>): string {
  const field = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 0;font-weight:600;color:#003D59;width:160px;vertical-align:top;">${label}:</td><td style="padding:8px 0;color:#374151;">${value}</td></tr>`
      : '';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:system-ui,sans-serif;background:#f7f9fb;margin:0;padding:32px 16px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:8px;border:1px solid #e5e7eb;overflow:hidden;">

    <!-- Header -->
    <div style="background:#003D59;padding:28px 32px;">
      <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#0EC5E6;">InSync Physical Therapy</p>
      <h1 style="margin:8px 0 0;font-size:20px;font-weight:800;color:#fff;">New Appointment Request</h1>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <p style="margin:0 0 20px;color:#374151;line-height:1.6;">
        A patient submitted an appointment request via <a href="${SITE_URL}" style="color:#0EC5E6;">${SITE_URL}</a>.
        Please review and contact them to schedule their evaluation.
      </p>

      <table style="width:100%;border-top:1px solid #e5e7eb;border-collapse:collapse;">
        ${field('Name',      data.name)}
        ${field('Email',     data.email)}
        ${field('Phone',     data.phone)}
        ${field('Insurance', data.insurance || 'Not provided')}
        ${field('Location',  data.location  || 'Not specified')}
        ${field('Concern',   data.concern   || 'Not specified')}
        ${field('Message',   data.message   || 'None')}
      </table>

      <div style="margin-top:28px;padding:16px;background:#f7f9fb;border-radius:6px;border:1px solid #e5e7eb;">
        <p style="margin:0;font-size:13px;color:#6b7280;line-height:1.6;">
          <strong style="color:#003D59;">Next steps:</strong> Verify insurance for this patient,
          then call or email them to schedule their initial evaluation.
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:16px 32px;border-top:1px solid #e5e7eb;background:#f7f9fb;">
      <p style="margin:0;font-size:12px;color:#9ca3af;">
        InSync Physical Therapy · Brooklyn & Bryant Park, NYC · 929-419-4643
      </p>
    </div>
  </div>
</body>
</html>`;
}

function patientConfirmationHtml(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:system-ui,sans-serif;background:#f7f9fb;margin:0;padding:32px 16px;">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:8px;border:1px solid #e5e7eb;overflow:hidden;">

    <!-- Header -->
    <div style="background:#003D59;padding:28px 32px;">
      <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#0EC5E6;">InSync Physical Therapy</p>
      <h1 style="margin:8px 0 0;font-size:20px;font-weight:800;color:#fff;">We Received Your Request</h1>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <p style="margin:0 0 16px;color:#374151;line-height:1.7;font-size:15px;">
        Hi ${name.split(' ')[0]},
      </p>
      <p style="margin:0 0 16px;color:#374151;line-height:1.7;font-size:15px;">
        Thank you for contacting InSync Physical Therapy. We received your appointment
        request and a member of our team will reach out within one business day to
        confirm your appointment.
      </p>
      <p style="margin:0 0 24px;color:#374151;line-height:1.7;font-size:15px;">
        We will verify your insurance benefits before scheduling so you know exactly
        what to expect before your first visit.
      </p>

      <!-- Info box -->
      <div style="background:#f7f9fb;border-radius:8px;border:1px solid #e5e7eb;padding:20px;margin-bottom:24px;">
        <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#003D59;text-transform:uppercase;letter-spacing:0.08em;">Our Locations</p>
        <p style="margin:0 0 4px;color:#374151;font-size:14px;">📍 Brooklyn — 1081 Gates Ave, Brooklyn, NY 11221</p>
        <p style="margin:0 0 16px;color:#374151;font-size:14px;">📍 Bryant Park — 55 W 39th St, Suite 303, NY 10018</p>
        <p style="margin:0;color:#374151;font-size:14px;">📞 929-419-4643</p>
      </div>

      <p style="margin:0;color:#6b7280;font-size:13px;line-height:1.6;">
        If you have any urgent questions before we reach out, call us at
        <a href="tel:+19294194643" style="color:#0EC5E6;">929-419-4643</a> or reply to this email.
      </p>
    </div>

    <!-- Footer -->
    <div style="padding:16px 32px;border-top:1px solid #e5e7eb;background:#f7f9fb;">
      <p style="margin:0;font-size:11px;color:#9ca3af;line-height:1.6;">
        InSync Physical Therapy · Brooklyn &amp; Bryant Park, NYC<br>
        This email was sent because you submitted an appointment request at
        <a href="${SITE_URL}" style="color:#9ca3af;">${SITE_URL}</a>.<br>
        This is not a medical advice email. For emergencies, call 911.
      </p>
    </div>
  </div>
</body>
</html>`;
}

// ─── POST Handler ─────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, location, concern, insurance, message } =
      body as Record<string, string>;

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    // Email-ish validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const formData = { name, email, phone, location, concern, insurance, message };
    const resend = getResend();

    // ── 1. Admin notification ──────────────────────────────────────
    const adminResult = await resend.emails.send({
      from:    EMAIL_FROM,
      to:      ADMIN_EMAIL,
      replyTo: email,
      subject: `New Appointment Request — ${name}`,
      html:    adminEmailHtml(formData),
    });

    if (adminResult.error) {
      console.error('[Resend] Admin email error:', adminResult.error);
      // Don't fail the request if only the admin email fails
    }

    // ── 2. Patient confirmation ────────────────────────────────────
    const confirmResult = await resend.emails.send({
      from:    EMAIL_FROM,
      to:      email,
      subject: 'Your appointment request — InSync Physical Therapy',
      html:    patientConfirmationHtml(name),
    });

    if (confirmResult.error) {
      console.error('[Resend] Confirmation email error:', confirmResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API] Unexpected error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
