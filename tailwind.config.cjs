function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      // Skin-based dynamic colors (theme-aware via CSS variables)
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-fill"),
          muted: withOpacity("--color-text-muted"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-text-base"),
          card: withOpacity("--color-card"),
          "card-muted": withOpacity("--color-card-muted"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-border"),
          fill: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },

      // Flowcraft static brand colors (same across themes)
      colors: {
        flowcraft: {
          accent: "#dc2626",
          "accent-secondary": "#ea580c",
          gold: "#fbbf24",
          tertiary: "#6b7280",
        },
      },

      fontFamily: {
        sans: ["Spline Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },

      letterSpacing: {
        heading: "-0.02em",
        button: "0.03em",
      },

      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.3)",
        "card-light": "0 0 0 1px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.08)",
        "accent-glow": "0 0 25px rgba(220,38,38,0.4)",
      },

      borderRadius: {
        DEFAULT: "0.5rem",
      },

      typography: {
        DEFAULT: {
          css: {
            pre: {
              color: false,
            },
            code: {
              color: false,
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
