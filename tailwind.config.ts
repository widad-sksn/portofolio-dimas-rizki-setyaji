import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#09040e",
        dusk: "#ff2a85",
        sand: "#ffe600",
        orange: "#ff7a45",
        violet: "#9d4edd",
      },
      fontFamily: {
        display: ["Pricedown", "var(--face-display)", "Anton", "Impact", "sans-serif"],
        sub: ["var(--face-body)", "Helvetica Neue", "sans-serif"],
        sans: ["var(--face-body)", "Helvetica Neue", "sans-serif"],
      },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: { rise: "rise 350ms ease-out both" },
    },
  },
} satisfies Config;
