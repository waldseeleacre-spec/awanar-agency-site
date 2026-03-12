// =============================================================================
// functions/api/contact.js
// Cloudflare Pages Function — POST /api/contact
//
// Required env var (set in Cloudflare Pages dashboard → Settings → Variables):
//   ZOHO_API_TOKEN  — Zoho ZeptoMail encoded API key
//                     (Zoho ZeptoMail dashboard → Mail Agents → API Token)
// =============================================================================

const NOTIFY_TO   = 'agency@redeawanar.com';
const NOTIFY_FROM = { address: 'agency@redeawanar.com', name: 'AWANAR Agency' };
const ZOHO_API    = 'https://api.zeptomail.com/v1.1/email';

// -----------------------------------------------------------------------------
// Autoresponder templates — VERBATIM LOCK (do not edit)
// Source: AWANAR_AGENCY_MEMORY.md — approved 2026-03-12
// -----------------------------------------------------------------------------
const TEMPLATES = {
  en: {
    subject: 'We received your message — AWANAR Agency',
    body: [
      'Hello,',
      '',
      'Thank you for reaching out to AWANAR Agency.',
      '',
      'We have received your message and will review your request carefully. If your project aligns with our field production scope in the Amazon, we will get back to you as soon as possible to continue the conversation.',
      '',
      'AWANAR operates as an Amazon Field Unit, working with brands, production companies, and institutions that require authentic access, cultural protocol, and documentary-grade storytelling from the territory.',
      '',
      'We appreciate your interest and look forward to learning more about your project.',
      '',
      'Best regards,',
      'Patricia Kuranyi',
      'Founder & Managing Director | Partnerships (DE/EN)',
      'AWANAR Agency \u2022 Amazon Field Unit',
      'agency@redeawanar.com',
      'www.redeawanar.com',
    ].join('\n'),
  },
  de: {
    subject: 'Wir haben Ihre Nachricht erhalten \u2014 AWANAR Agency',
    body: [
      'Hallo,',
      '',
      'vielen Dank f\u00fcr Ihre Nachricht an die AWANAR Agency.',
      '',
      'Wir haben Ihre Anfrage erhalten und pr\u00fcfen sie sorgf\u00e4ltig. Wenn Ihr Projekt zu unserem Arbeitsfeld im Amazonas passt, melden wir uns so bald wie m\u00f6glich bei Ihnen, um das Gespr\u00e4ch fortzusetzen.',
      '',
      'AWANAR arbeitet als Amazon Field Unit und kooperiert mit Marken, Produktionsfirmen und Institutionen, die authentischen Zugang, kulturelles Protokoll und dokumentarisches Storytelling direkt aus dem Territorium ben\u00f6tigen.',
      '',
      'Vielen Dank f\u00fcr Ihr Interesse. Wir freuen uns darauf, mehr \u00fcber Ihr Projekt zu erfahren.',
      '',
      'Mit freundlichen Gr\u00fc\u00dfen',
      'Patricia Kuranyi',
      'Founder & Managing Director | Partnerships (DE/EN)',
      'AWANAR Agency \u2022 Amazon Field Unit',
      'agency@redeawanar.com',
      'www.redeawanar.com',
    ].join('\n'),
  },
};

// -----------------------------------------------------------------------------
// Send one email via Zoho ZeptoMail REST API
// -----------------------------------------------------------------------------
async function sendMail(token, { to, from, subject, text }) {
  const payload = {
    from:    { address: from.address, name: from.name },
    to:      [{ email_address: { address: to } }],
    subject: subject,
    textbody: text,
  };

  const res = await fetch(ZOHO_API, {
    method:  'POST',
    headers: {
      'Authorization': `Zoho-enczapikey ${token}`,
      'Content-Type':  'application/json',
      'Accept':        'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '(no body)');
    throw new Error(`ZeptoMail ${res.status}: ${detail}`);
  }
  return res;
}

// -----------------------------------------------------------------------------
// CORS headers (allows fetch from same origin; added defensively)
// -----------------------------------------------------------------------------
function cors() {
  return {
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status:  status || 200,
    headers: { 'Content-Type': 'application/json', ...cors() },
  });
}

// -----------------------------------------------------------------------------
// POST handler
// -----------------------------------------------------------------------------
export async function onRequestPost(context) {
  const { request, env } = context;

  // --- Parse body (JSON or form-encoded) -------------------------------------
  let fields;
  const ct = (request.headers.get('Content-Type') || '').toLowerCase();
  try {
    if (ct.includes('application/json')) {
      fields = await request.json();
    } else {
      const fd = await request.formData();
      fields = Object.fromEntries(fd.entries());
    }
  } catch (_) {
    return json({ ok: false, error: 'invalid_payload' }, 400);
  }

  // --- Required field validation ---------------------------------------------
  const REQUIRED = ['nome', 'empresa', 'email', 'necessidade', 'timeline', 'idioma'];
  const missing  = REQUIRED.filter(k => !fields[k] || String(fields[k]).trim() === '');
  if (missing.length) {
    return json({ ok: false, error: 'missing_fields', fields: missing }, 400);
  }

  // --- Basic email format check ----------------------------------------------
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }

  // --- Env var guard ---------------------------------------------------------
  const token = env.ZOHO_API_TOKEN;
  if (!token) {
    console.error('[contact] ZOHO_API_TOKEN is not set');
    return json({ ok: false, error: 'server_misconfigured' }, 500);
  }

  // --- Build notification body for agency -----------------------------------
  const notification = [
    'New contact form submission \u2014 AWANAR Agency',
    '\u2014'.repeat(44),
    `Name:       ${fields.nome}`,
    `Company:    ${fields.empresa}`,
    `Email:      ${fields.email}`,
    `Need:       ${fields.necessidade}`,
    `Timeline:   ${fields.timeline}`,
    `Usage:      ${fields.uso || '\u2014'}`,
    `Language:   ${fields.idioma}`,
    `Project:    ${fields.projeto || '\u2014'}`,
    '\u2014'.repeat(44),
    'Sent from: https://www.redeawanar.com/',
  ].join('\n');

  // --- Autoresponder language: DE if idioma=de, EN for everything else -------
  const lang = fields.idioma === 'de' ? 'de' : 'en';
  const tpl  = TEMPLATES[lang];

  // --- Send both emails ------------------------------------------------------
  try {
    await sendMail(token, {
      to:      NOTIFY_TO,
      from:    NOTIFY_FROM,
      subject: `New contact: ${fields.nome} \u2014 ${fields.empresa}`,
      text:    notification,
    });

    await sendMail(token, {
      to:      fields.email,
      from:    NOTIFY_FROM,
      subject: tpl.subject,
      text:    tpl.body,
    });
  } catch (e) {
    // Errors visible in Cloudflare Pages → Functions → Logs
    console.error('[contact] send error:', e.message);
    return json({ ok: false, error: 'send_failed' }, 500);
  }

  return json({ ok: true });
}

// --- OPTIONS preflight -------------------------------------------------------
export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: cors() });
}
