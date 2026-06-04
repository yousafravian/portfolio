/* Bridgecrest icon set — filled silhouettes, Dark Blue, 24px grid.
   Drawn to match the BC Next app-icon visual language from the Figma library. */
(function () {
  const I = (p) => `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">${p}</svg>`;
  const O = (p, w = 2) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

  window.BC_ICONS = {
    // Financial / payment
    car: I(`<path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4zm2.6-.5h8.8l-1-3a.5.5 0 0 0-.5-.4H9.1a.5.5 0 0 0-.5.4l-1 3zM7.5 14.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>`),
    card: I(`<rect x="2.5" y="5.5" width="19" height="13" rx="2"/><rect x="2.5" y="8.5" width="19" height="2.5" fill="#FFFCF7"/><rect x="5" y="13.5" width="4" height="2" rx="1" fill="#FFFCF7"/>`),
    bank: I(`<path d="M12 3 L22 8 V9.5 H2 V8 Z"/><rect x="4" y="10.5" width="2.5" height="7.5"/><rect x="10.75" y="10.5" width="2.5" height="7.5"/><rect x="17.5" y="10.5" width="2.5" height="7.5"/><rect x="2" y="18.5" width="20" height="2"/>`),
    calendar: I(`<rect x="3" y="5" width="18" height="16" rx="2"/><rect x="3" y="5" width="18" height="5" fill="#FFFCF7" opacity="0.001"/><path d="M3 10 H21" stroke="#FFFCF7" stroke-width="1.5" fill="none"/><rect x="7" y="2.5" width="1.8" height="4.5" rx="0.9"/><rect x="15.2" y="2.5" width="1.8" height="4.5" rx="0.9"/><circle cx="8" cy="14" r="1.1" fill="#FFFCF7"/><circle cx="12" cy="14" r="1.1" fill="#FFFCF7"/><circle cx="16" cy="14" r="1.1" fill="#FFFCF7"/><circle cx="8" cy="17.5" r="1.1" fill="#FFFCF7"/><circle cx="12" cy="17.5" r="1.1" fill="#FFFCF7"/>`),
    'calendar-sync': I(`<rect x="3" y="5" width="18" height="16" rx="2"/><rect x="7" y="2.5" width="1.8" height="4.5" rx="0.9"/><rect x="15.2" y="2.5" width="1.8" height="4.5" rx="0.9"/><path d="M3 10 H21" stroke="#FFFCF7" stroke-width="1.5" fill="none"/><path d="M9 16 a3 3 0 0 1 5.3 -1.5 L15.5 13.5 V17 H12 L13.4 15.7 a2 2 0 0 0 -3.5 1" fill="#FFFCF7"/>`),
    money: I(`<rect x="2" y="7" width="20" height="12" rx="2"/><rect x="2" y="7" width="20" height="12" rx="2" fill="#FFFCF7"/><rect x="2" y="7" width="20" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="13" r="3.2" fill="currentColor"/><text x="12" y="15.2" text-anchor="middle" font-family="Montserrat" font-weight="700" font-size="5.5" fill="#FFFCF7">$</text>`),
    dollar: I(`<circle cx="12" cy="12" r="10"/><text x="12" y="16.5" text-anchor="middle" font-family="Montserrat" font-weight="700" font-size="14" fill="#FFFCF7">$</text>`),
    percent: I(`<circle cx="12" cy="12" r="10"/><circle cx="8.5" cy="8.5" r="2" fill="#FFFCF7"/><circle cx="15.5" cy="15.5" r="2" fill="#FFFCF7"/><path d="M7 17 L17 7" stroke="#FFFCF7" stroke-width="2" fill="none" stroke-linecap="round"/>`),
    tax: I(`<rect x="5" y="3" width="14" height="18" rx="1.5"/><text x="12" y="13" text-anchor="middle" font-family="Montserrat" font-weight="700" font-size="6" fill="#FFFCF7">TAX</text><rect x="7.5" y="15.5" width="9" height="1.2" fill="#FFFCF7"/><rect x="7.5" y="17.5" width="6" height="1.2" fill="#FFFCF7"/>`),

    // Comm / identity
    mail: I(`<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M4 7.5 L12 13 L20 7.5" stroke="#FFFCF7" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
    phone: I(`<path d="M6.5 3 h11 a1.5 1.5 0 0 1 1.5 1.5 v15 a1.5 1.5 0 0 1 -1.5 1.5 h-11 a1.5 1.5 0 0 1 -1.5 -1.5 v-15 a1.5 1.5 0 0 1 1.5 -1.5 z"/><rect x="6.5" y="5.5" width="11" height="11.5" fill="#FFFCF7"/><circle cx="12" cy="19" r="0.9" fill="#FFFCF7"/>`),
    call: I(`<path d="M6.5 3 a2 2 0 0 0 -2 2 v2.5 c0 7.5 6.5 14 14 14 h2.5 a2 2 0 0 0 2 -2 v-2 a1.5 1.5 0 0 0 -1.2 -1.5 l-3.2 -0.8 a1.5 1.5 0 0 0 -1.6 0.7 l-1 1.6 a12 12 0 0 1 -5.5 -5.5 l1.6 -1 a1.5 1.5 0 0 0 0.7 -1.6 l-0.8 -3.2 A1.5 1.5 0 0 0 10.5 3 z"/>`),
    text: I(`<path d="M4 4 h16 a2 2 0 0 1 2 2 v9 a2 2 0 0 1 -2 2 h-9 l-4.5 3.5 v-3.5 h-2.5 a2 2 0 0 1 -2 -2 v-9 a2 2 0 0 1 2 -2 z"/><rect x="6.5" y="8.5" width="11" height="1.6" fill="#FFFCF7"/><rect x="6.5" y="11.5" width="7.5" height="1.6" fill="#FFFCF7"/>`),
    profile: I(`<circle cx="12" cy="8.5" r="4"/><path d="M3.5 20 a8.5 8.5 0 0 1 17 0 v0.5 a1.5 1.5 0 0 1 -1.5 1.5 h-14 a1.5 1.5 0 0 1 -1.5 -1.5 z"/>`),
    settings: I(`<path d="M12 8.5 a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0 -7 z M12 11.5 a0.5 0.5 0 1 1 0 1 0.5 0.5 0 0 1 0 -1 z" fill="currentColor"/><path d="M19.4 13 l1.6 1.3 -1.6 2.8 -2 -0.3 a7.5 7.5 0 0 1 -1.7 1 l-0.5 2h-3.2l-0.5-2a7.5 7.5 0 0 1 -1.7 -1 l-2 0.3 -1.6 -2.8 1.6 -1.3 a7.5 7.5 0 0 1 0 -2 l-1.6 -1.3 1.6 -2.8 2 0.3 a7.5 7.5 0 0 1 1.7 -1 l0.5 -2 h3.2 l0.5 2 a7.5 7.5 0 0 1 1.7 1 l2 -0.3 1.6 2.8 -1.6 1.3 a7.5 7.5 0 0 1 0 2 z M12 8.5 a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0 -7z" fill-rule="evenodd"/>`),

    // UI control
    search: I(`<circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" stroke-width="2.3"/><path d="M15 15 L20 20" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>`),
    filter: I(`<path d="M4 5 h16 l-6 8 v6 l-4 -2 v-4 z"/>`),
    edit: I(`<path d="M4 16 L4 20 h4 L19 9 L15 5 Z"/><rect x="15.5" y="3.5" width="4" height="4" rx="0.8" transform="rotate(45 17.5 5.5)"/>`),
    exit: I(`<path d="M14 4 h5 a1.5 1.5 0 0 1 1.5 1.5 v13 a1.5 1.5 0 0 1 -1.5 1.5 h-5 v-2 h4.5 v-12 h-4.5 z"/><path d="M3 12 h11 l-3 -3 v2 h-8 v2 h8 v2 z"/>`),
    home: I(`<path d="M12 3 L3 11 v9 a1 1 0 0 0 1 1 h5 v-6 h6 v6 h5 a1 1 0 0 0 1 -1 v-9 z"/>`),
    'arrow-right': I(`<path d="M4 12 h13 l-4 -4 v2 l-9 0 z M17 11 l4 1 -4 1 z"/>`),
    chevron: I(`<path d="M9 5 L16 12 L9 19 L8 18 L14 12 L8 6 z"/>`),
    plus: I(`<rect x="10.5" y="4" width="3" height="16" rx="0.5"/><rect x="4" y="10.5" width="16" height="3" rx="0.5"/>`),
    box: I(`<path d="M3 7 l9 -4 9 4 v10 l-9 4 -9 -4 z"/><path d="M3 7 l9 4 9 -4 M12 11 v10" stroke="#FFFCF7" stroke-width="1.5" fill="none"/>`),
    store: I(`<path d="M3 4 h18 l1 5 a2 2 0 0 1 -4 0 a2 2 0 0 1 -4 0 a2 2 0 0 1 -4 0 a2 2 0 0 1 -4 0 a2 2 0 0 1 -4 0 z"/><path d="M4 11.5 v8.5 a0.5 0.5 0 0 0 0.5 0.5 h6 v-6 h3 v6 h6 a0.5 0.5 0 0 0 0.5 -0.5 v-8.5 z" fill="currentColor" opacity="0.85"/>`),

    // Docs / status
    document: I(`<path d="M6 3 h9 l4 4 v13 a1 1 0 0 1 -1 1 h-12 a1 1 0 0 1 -1 -1 v-16 a1 1 0 0 1 1 -1 z"/><path d="M14 3 V8 H19" fill="#FFFCF7"/><rect x="7.5" y="11" width="9" height="1.3" fill="#FFFCF7"/><rect x="7.5" y="14" width="9" height="1.3" fill="#FFFCF7"/><rect x="7.5" y="17" width="6" height="1.3" fill="#FFFCF7"/>`),
    insurance: I(`<path d="M12 3 L3.5 6 V12 c0 5 4 8 8.5 9 c4.5 -1 8.5 -4 8.5 -9 V6 z"/><path d="M8 12 l3 3 l5 -6" stroke="#FFFCF7" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
    laptop: I(`<rect x="4" y="5" width="16" height="10.5" rx="1.5"/><rect x="6" y="6.8" width="12" height="7" fill="#FFFCF7"/><path d="M2 17 h20 v1 a1.5 1.5 0 0 1 -1.5 1.5 h-17 a1.5 1.5 0 0 1 -1.5 -1.5 z"/>`),
    check: I(`<circle cx="12" cy="12" r="10"/><path d="M7 12 l3.5 3.5 l6.5 -7.5" stroke="#FFFCF7" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
    alert: I(`<circle cx="12" cy="12" r="10"/><rect x="10.75" y="6.5" width="2.5" height="7" rx="1.2" fill="#FFFCF7"/><circle cx="12" cy="16.5" r="1.3" fill="#FFFCF7"/>`),
    manage: I(`<rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="16" width="18" height="4" rx="1"/><circle cx="7" cy="6" r="1.2" fill="#FFFCF7"/><circle cx="13" cy="12" r="1.2" fill="#FFFCF7"/><circle cx="17" cy="18" r="1.2" fill="#FFFCF7"/>`),
    lock: I(`<rect x="4.5" y="10.5" width="15" height="10.5" rx="1.5"/><path d="M7.5 10.5 V8 a4.5 4.5 0 0 1 9 0 v2.5" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="15" r="1.6" fill="#FFFCF7"/>`),
    pencil: I(`<path d="M3 17 L3 21 h4 L20 8 L16 4 z"/><rect x="16" y="3" width="5" height="5" rx="0.8" transform="rotate(45 18.5 5.5)"/>`),
    receipt: I(`<path d="M5 3 h14 v18 l-2 -1.5 l-2 1.5 l-2 -1.5 l-2 1.5 l-2 -1.5 l-2 1.5 l-2 -1.5 z"/><rect x="7.5" y="7" width="9" height="1.3" fill="#FFFCF7"/><rect x="7.5" y="10" width="9" height="1.3" fill="#FFFCF7"/><rect x="7.5" y="13" width="6" height="1.3" fill="#FFFCF7"/>`),
  };
})();
