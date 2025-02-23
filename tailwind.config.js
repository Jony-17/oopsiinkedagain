/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        animate_imgg: "animate_imgg 8s ease-in-out 1s infinite",
      },
      keyframes: {
        animate_imgg: {
          "0%, 100%": { 
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            boxShadow: "inset 0 0 0 9px rgba(255, 255, 255, 0.3)",
          },
          "50%": { 
            borderRadius: "40% 60% 70% 30% / 30% 60% 40% 70%",
            boxShadow: "inset 0 0 0 12px rgba(255, 255, 255, 0.5)", 
          },
        },
      },
    },
  },
  plugins: [],
};
