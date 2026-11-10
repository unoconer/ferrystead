import { icon, SERVICES, faqList, faqSchema, ctaBand, B, esc, mediaImg, heroVideo, phoneHref, SITE, ORG_ID, addressHtml, phoneHtml } from '../lib.mjs';
import { contactBlock } from './contact.mjs';

const ADMIN = SERVICES.filter((s) => s.group === 'admin');
const EDU = SERVICES.filter((s) => s.group === 'education');

const faqs = [
  { q: 'What does Ferrystead do?', a: '<p>Ferrystead provides administrative support and education for Solo and self-directed 401(k) plans: setup alongside the provider you choose, plan records and year-end values, Form 5500-EZ preparation, and year-round help. You remain the plan sponsor and make every decision.</p>' },
  { q: 'Where do we meet?', a: '<p>At the Ferrystead office in New York, Monday through Friday, by appointment. If you’d rather talk first, we’re happy to start with a phone call.</p>' },
  { q: 'Do you pick or recommend investments?', a: '<p>No. Investment decisions are yours. We keep the plan’s paperwork in order and explain the rules that apply.</p>' },
  { q: 'Do you hold my retirement money?', a: '<p>No. Plan assets stay in accounts titled to your plan at the institutions you choose. We never hold, move or invest plan money.</p>' },
  { q: 'Who can open a Solo 401(k)?', a: '<p>Generally a business with self-employment or business income and no eligible employees besides the owners and their spouses. Sole proprietors, LLCs, partnerships and corporations can all qualify; hiring can change that.</p>' },
  { q: 'When is Form 5500-EZ required?', a: '<p>Generally for any year a one-participant plan’s total assets exceed $250,000 at year-end, and always in the plan’s final year. For calendar-year plans it’s generally due July 31, extendable with Form 5558.</p>' },
  { q: 'What can a self-directed 401(k) hold?', a: '<p>What the plan document permits and federal law doesn’t prohibit — commonly real estate, private loans, private company interests, qualifying bullion and public securities. Collectibles are out, and dealings with “disqualified persons” such as you or close family are prohibited.</p>' },
  { q: 'Is this investment, legal or tax advice?', a: '<p>No. It’s administrative support and general education. For individualized advice, consult a licensed financial professional, CPA or attorney — we’ll gladly coordinate with yours.</p>' },
  { q: 'How do I get started?', a: `<p>${B.phone ? `Call ${phoneHtml()} or use` : 'Use'} the <a href="#contact">meeting request form</a> below.</p>` },
];

const STEPS = [
  ['Book a visit', 'Call or send the form, and we’ll set a time at our New York office — or start with a quick phone call.'],
  ['Chart the course', 'We look at your business, any existing plan, and where you’d like a hand.'],
  ['Agree the scope', 'In writing: what we handle, what your provider handles, and what stays with you.'],
  ['Cast off', 'New plan: setup with your provider. Existing plan: records gathered and gaps closed.'],
  ['Keep a steady crossing', 'Activity logged, reminders sent, and Form 5500-EZ prepared when it’s due.'],
];

export default {
  path: '/',
  title: 'Ferrystead | Solo & Self-Directed 401(k) Support in New York, NY',
  description:
    'Ferrystead helps New York City business owners with Solo and self-directed 401(k) plans: plan setup, records and valuations, Form 5500-EZ preparation and year-round support.',
  schema: [
    faqSchema(faqs),
    ...SERVICES.map((s) => ({
      '@type': 'Service',
      '@id': `${SITE}/#${s.id}`,
      name: s.title,
      description: s.short,
      provider: { '@id': ORG_ID },
      areaServed: B.serviceArea.map((n) => ({ '@type': 'City', name: n })),
    })),
  ],
  bodyClass: 'is-home',
  body: () => `
<section class="hero" aria-labelledby="hero-h">
  <div class="hero__bg" aria-hidden="true">${heroVideo()}<div class="hero__fallback"></div></div>
  <div class="container hero__inner">
    <div class="hero__copy">
      <p class="kicker kicker--light">New York City · ${esc(B.tagline)}</p>
      <h1 id="hero-h">A steady crossing for your <em>401(k) paperwork.</em></h1>
      <p class="hero__lead">Ferrystead helps New York business owners and self-employed professionals set up and run Solo and self-directed 401(k) plans — organized records, Form 5500-EZ on time, and straight answers. Visit us at our New York office.</p>
      <div class="btn-row">
        <a class="btn btn--accent btn--lg" href="#contact">Book an Office Visit</a>
        ${B.phone ? `<a class="btn btn--glass btn--lg" href="${phoneHref()}">${icon('phone')} ${esc(B.phone)}</a>` : `<a class="btn btn--glass btn--lg" href="#services">See services</a>`}
      </div>
    </div>
    <div class="ferry-card" aria-label="Visit the office">
      <p class="ferry-card__k">Visit the office</p>
      <p class="ferry-card__addr">${icon('pin')}<span>${addressHtml()}</span></p>
      <p class="ferry-card__row">${icon('clock')}<span>Mon–Fri · 9:00 AM – 5:00 PM</span></p>
      <p class="ferry-card__row">${icon('phone')}<span>${phoneHtml()}</span></p>
      <a class="btn btn--dark btn--block" href="#contact">Request an appointment</a>
    </div>
  </div>
</section>

<nav class="jump" aria-label="Sections on this page">
  <div class="container jump__inner">
    <a href="#services">Services</a><a href="#process">How it works</a><a href="#roles">Who does what</a><a href="#learn">401(k) basics</a><a href="#faq">FAQ</a><a href="#about">About</a><a href="#contact">Visit &amp; contact</a>
  </div>
</nav>

<section class="section" id="services" aria-labelledby="services-h">
  <div class="container">
    <div class="head head--split">
      <div><p class="kicker">Services</p><h2 id="services-h">Every crossing, handled the same careful way</h2></div>
      <p>Hands-on administrative help for Solo and self-directed plans — at your direction, alongside the plan provider you choose.</p>
    </div>
    <div class="dock-grid">
      ${ADMIN.map((s, i) => `<article class="dock-card" id="${s.id}"><div class="dock-card__top">${icon(s.icon, 'dock-card__icon')}<span class="dock-card__n">0${i + 1}</span></div><h3>${s.title}</h3><p>${s.short}</p></article>`).join('')}
    </div>
    <div class="edu-strip">
      <p class="edu-strip__k">Also included</p>
      ${EDU.map((s) => `<div id="${s.id}">${icon(s.icon)}<span><strong>${s.title}</strong> — ${s.short}</span></div>`).join('')}
    </div>
  </div>
</section>

<section class="section section--sand" id="process" aria-labelledby="process-h">
  <div class="container split">
    <figure class="split__media">${mediaImg('bow', { cls: 'split__img', label: 'Plan records' })}</figure>
    <div class="split__text">
      <p class="kicker">How it works</p>
      <h2 id="process-h">From first visit to a plan that runs on schedule</h2>
      <ol class="steps">${STEPS.map(([t, d], i) => `<li><span class="steps__n">${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol>
    </div>
  </div>
</section>

<section class="section section--ink" id="roles" aria-labelledby="roles-h">
  <div class="container">
    <div class="head head--split"><div><p class="kicker kicker--light">Who does what</p><h2 id="roles-h">Three roles, clearly divided</h2></div><p>The surest way to keep a self-directed plan in good standing is to know whose job each task is.</p></div>
    <div class="resp">
      <div class="resp__col"><h3>You, the sponsor</h3><ul><li>Choose the plan and provider</li><li>Decide and deposit contributions</li><li>Make every investment decision</li><li>Review, sign and file returns</li></ul></div>
      <div class="resp__col resp__col--us"><h3>Ferrystead</h3><ul><li>Setup assistance and checklists</li><li>Plan records and year-end values</li><li>Form 5500-EZ preparation</li><li>Reminders and answers all year</li></ul></div>
      <div class="resp__col"><h3>Your provider</h3><ul><li>Plan document and amendments</li><li>Plan accounts or custody, as applicable</li><li>Its own statements and notices</li></ul></div>
    </div>
    <p class="roles-note">${icon('shield')} Ferrystead never holds or invests plan money, doesn’t recommend investments, and isn’t a plan trustee, custodian or fiduciary.</p>
  </div>
</section>

<section class="section" id="learn" aria-labelledby="learn-h">
  <div class="container">
    <div class="head head--center"><p class="kicker">401(k) basics</p><h2 id="learn-h">The essentials, in plain English</h2><p>General education, not advice — your CPA or attorney can apply it to your situation.</p></div>
    <div class="basics">
      <article class="basic">
        <h3>Solo 401(k)</h3>
        <p>A 401(k) for business owners and their spouses only. You contribute in two roles:</p>
        <ul class="ticks">
          <li><strong>Employee:</strong> elective deferrals, pre-tax or Roth, up to the annual limit, plus catch-ups from age 50.</li>
          <li><strong>Employer:</strong> profit-sharing contributions, generally up to 25% of W-2 pay (or a similar share of net self-employment earnings).</li>
          <li>An eligible employee usually ends “solo” status.</li>
        </ul>
      </article>
      <article class="basic">
        <h3>Self-directed 401(k)</h3>
        <p>A 401(k) whose plan document allows investments beyond a fund menu.</p>
        <ul class="ticks">
          <li>May hold real estate, private loans, private companies, qualifying bullion and securities — if the plan allows.</li>
          <li>Can’t hold collectibles like art, gems or most coins.</li>
          <li>Everything is titled to the plan and flows only through plan accounts.</li>
        </ul>
      </article>
      <article class="basic basic--warn">
        <h3>Rules to respect</h3>
        <ul class="crosses">
          <li><strong>No self-dealing.</strong> You, close family and businesses you control generally can’t buy from, sell to, borrow from or use plan assets.</li>
          <li><strong>Steep penalties.</strong> Prohibited transactions generally trigger a 15% excise tax per year, up to 100% if not corrected.</li>
          <li><strong>File when required.</strong> Form 5500-EZ generally applies once plan assets pass $250,000 at year-end.</li>
        </ul>
      </article>
    </div>
    <p class="source">Official sources: <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" rel="noopener" target="_blank">IRS — One-Participant 401(k) Plans</a>; <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" rel="noopener" target="_blank">IRS — Prohibited Transactions</a>. Limits change most years — confirm current figures at IRS.gov. See our <a href="/disclosures/">disclosures</a>.</p>
  </div>
</section>

<section class="section section--sand" id="faq" aria-labelledby="faq-h">
  <div class="container faq-wrap">
    <div class="faq-wrap__head"><p class="kicker">FAQ</p><h2 id="faq-h">Common questions</h2><p>Have another? <a href="#contact">Ask us directly.</a></p></div>
    ${faqList(faqs)}
  </div>
</section>

<section class="section" id="about" aria-labelledby="about-h">
  <div class="container split">
    <div class="split__text">
      <p class="kicker">About Ferrystead</p>
      <h2 id="about-h">Named for the city’s steadiest crossing</h2>
      <p class="lead">New York’s ferries cross the harbor on schedule, day after day, in all weather. A “stead” is a settled, dependable place. Ferrystead brings both ideas to your retirement plan: reliable, on-time care for the paperwork, from a fixed home base.</p>
      <p>We work with consultants, freelancers, creatives, clinicians, tech founders and small firms across New York City, with meetings at our office by appointment.</p>
      <ul class="standards">
        <li><strong>Clear scope.</strong> We agree up front what we handle and what stays with you and your provider.</li>
        <li><strong>Your decisions stay yours.</strong> We aren’t a fiduciary, trustee, custodian, registered investment adviser or broker-dealer, and we don’t give legal or tax advice.</li>
        <li><strong>Privacy.</strong> Your information is handled as described in our <a href="/privacy-policy/">Privacy Policy</a>.</li>
      </ul>
    </div>
    <figure class="split__media">${mediaImg('ferry', { cls: 'split__img', label: 'New York Harbor' })}</figure>
  </div>
</section>

${ctaBand({ heading: 'Bring your plan questions to the office.', text: 'Book a visit with Ferrystead in New York — new plan or existing one.', button: 'Book an Office Visit' })}

<section class="section" id="contact" aria-labelledby="contact-h">
  <div class="container">
    <div class="head"><p class="kicker">Visit &amp; contact</p><h2 id="contact-h">Book an office visit</h2><p>Send a few details and we’ll call to set a time at our New York office.</p></div>
  </div>
  ${contactBlock()}
</section>
`,
};
