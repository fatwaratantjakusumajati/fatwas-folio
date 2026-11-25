import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-glow": "var(--gradient-glow)",
      },
      boxShadow: {
        elegant: "var(--shadow-elegant)",
        glow: "var(--shadow-glow)",
        card: "var(--shadow-card)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(15px)", filter: "blur(4px)" }, "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0px)" } },
        "fade-in-left": { "0%": { opacity: "0", transform: "translateX(-20px)", filter: "blur(4px)" }, "100%": { opacity: "1", transform: "translateX(0)", filter: "blur(0px)" } },
        "fade-in-right": { "0%": { opacity: "0", transform: "translateX(20px)", filter: "blur(4px)" }, "100%": { opacity: "1", transform: "translateX(0)", filter: "blur(0px)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.95)", filter: "blur(4px)" }, "100%": { opacity: "1", transform: "scale(1)", filter: "blur(0px)" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        glow: { "0%, 100%": { opacity: "0.5" }, "50%": { opacity: "1" } },
        "gradient-x": { "0%, 100%": { "background-position": "0% 50%" }, "50%": { "background-position": "100% 50%" } },
        shimmer: { "0%": { "background-position": "-200% 0" }, "100%": { "background-position": "200% 0" } },
        "spin-slow": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,30px) scale(0.95)" },
        },
        "pulse-ring": { "0%": { transform: "scale(0.9)", opacity: "0.7" }, "100%": { transform: "scale(1.6)", opacity: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.9s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "fade-in-left": "fade-in-left 0.9s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "fade-in-right": "fade-in-right 0.9s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "scale-in": "scale-in 0.8s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        blob: "blob 14s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
