// Brand mark — an arched doorway (the "stead") framing a ferry crossing in front of a skyline.
/** Logo mark SVG. `id` must be unique per page instance. */
export function markSvg(id = 'fs', cls = 'brand__mark') {
  return `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A3442"/><stop offset="1" stop-color="#14181F"/></linearGradient></defs><path d="M6 46V20.5a18 18 0 0 1 36 0V46Z" fill="url(#${id})"/><path d="M12 30v-8h3v-3h3v11h2v-14h3.5v-4l1 -3 1 3v4H29v14h2v-9h3v3h2v6Z" fill="#A9C7E4" opacity=".55"/><path d="M11 31.5h26l-3.2 5.2H14.2Z" fill="#F07A2B"/><path d="M17 31.5v-3.2h14v3.2" fill="#F7F7F5"/><path d="M20.5 28.3v-2.2h7v2.2" fill="#F7F7F5"/><path d="M9.5 40.2q3.5 -2 7 0t7 0 7 0 7 0" stroke="#A9C7E4" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`;
}

export const markFile = () =>
  markSvg('g', 'mark').replace('<svg class="mark"', '<svg xmlns="http://www.w3.org/2000/svg"').replace(' aria-hidden="true" focusable="false"', '');
