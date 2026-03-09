module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-hover": "#1D4ED8",
        accent: "#F97316",
        success: "#16A34A",
        error: "#DC2626",
        background: "#F9FAFB",
        surface: "#FFFFFF",
        text: "#111827",
        "text-muted": "#6B7280",
        border: "#E5E7EB"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
