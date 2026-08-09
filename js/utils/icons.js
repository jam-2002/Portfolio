export function iconSvg(name) {
  const common = `class="practice-lucide" viewBox="0 0 24 24" aria-hidden="true"`;
  const stroke = `fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  const icons = {
    "circle-user-round": `
      <svg ${common} ${stroke}>
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    `,
    "building-2": `
      <svg ${common} ${stroke}>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
        <path d="M6 12H4a2 2 0 0 0-2 2v8" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    `,
    "clock-9": `
      <svg ${common} ${stroke}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7v5H7" />
      </svg>
    `,
    "map-pin-check": `
      <svg ${common} ${stroke}>
        <path d="M20 10c0 4.8-8 12-8 12S4 14.8 4 10a8 8 0 1 1 16 0Z" />
        <path d="m9 10 2 2 4-4" />
      </svg>
    `,
    "check-line": `
      <svg ${common} ${stroke}>
        <path d="m4 12 5 5L20 6" />
      </svg>
    `,
    "square-star": `
      <svg ${common} ${stroke}>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="m12 7 1.4 2.9 3.1.5-2.2 2.1.5 3.1-2.8-1.5-2.8 1.5.5-3.1-2.2-2.1 3.1-.5Z" />
      </svg>
    `,
    "arrow-left-right": `
      <svg ${common} ${stroke}>
        <path d="M8 3 4 7l4 4" />
        <path d="M4 7h16" />
        <path d="m16 21 4-4-4-4" />
        <path d="M20 17H4" />
      </svg>
    `,
    brush: `
      <svg ${common} ${stroke}>
        <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
        <path d="M7.07 14.94c-1.66 0-3 1.35-3 3 0 1.3-1.19 2-2.07 2 1.03 1.38 2.53 2 4.07 2 2.2 0 4-1.8 4-4a3 3 0 0 0-3-3Z" />
      </svg>
    `,
    "circle-check-big": `
      <svg ${common} ${stroke}>
        <circle cx="12" cy="12" r="10" />
        <path d="m8 12 3 3 5-6" />
      </svg>
    `,
    star: `
      <svg ${common} ${stroke}>
        <path d="m12 3 2.45 5 5.55.8-4 3.9.95 5.5L12 15.6 7.05 18.2 8 12.7l-4-3.9L9.55 8Z" />
      </svg>
    `,
    "trending-up": `
      <svg ${common} ${stroke}>
        <path d="m22 7-8.5 8.5-5-5L2 17" />
        <path d="M16 7h6v6" />
      </svg>
    `,
    "map-plus": `
      <svg ${common} ${stroke}>
        <path d="M14.5 4.5 9.5 2 3 5.25v14.25l6.5-3.25 5 2.5 6.5-3.25V9" />
        <path d="M9.5 2v14.25" />
        <path d="M14.5 4.5v5.25" />
        <path d="M18 2v6" />
        <path d="M15 5h6" />
      </svg>
    `,
    "send-horizontal": `
      <svg ${common} ${stroke}>
        <path d="m3 3 18 9-18 9 4-9Z" />
        <path d="M7 12h14" />
      </svg>
    `,
    "badge-dollar-sign": `
      <svg ${common} ${stroke}>
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.76Z" />
        <path d="M12 7v10" />
        <path d="M15 9.5c-.5-.9-1.5-1.5-3-1.5-1.7 0-3 1-3 2.4 0 1.3 1.1 1.9 3 2.2 1.9.3 3 .9 3 2.3S13.7 17 12 17c-1.5 0-2.5-.6-3-1.5" />
      </svg>
    `,
    eye: `
      <svg ${common} ${stroke}>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    `,
    "chart-no-axes-combined": `
      <svg ${common} ${stroke}>
        <path d="M12 16v5" />
        <path d="M16 14v7" />
        <path d="M20 10v11" />
        <path d="m22 3-8.6 8.6-4-4L2 15" />
      </svg>
    `,
    "user-round-check": `
      <svg ${common} ${stroke}>
        <path d="M2 21a8 8 0 0 1 13.3-6" />
        <circle cx="10" cy="8" r="5" />
        <path d="m16 19 2 2 4-4" />
      </svg>
    `,
    "mouse-pointer-click": `
      <svg ${common} ${stroke}>
        <path d="m9 9 5 12 1.8-5.2L21 14Z" />
        <path d="M7.2 2.2 8 5.1" />
        <path d="m5.1 8-2.9-.8" />
        <path d="m14 4-2.1 2.1" />
        <path d="m4 14 2.1-2.1" />
      </svg>
    `,
  };

  return icons[name] || icons["check-line"];
}
