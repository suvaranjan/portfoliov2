// @ts-check
/** @type {import("tailwindcss").Config } */
module.exports = {
  theme: {
    extend: {
      // Keyframes and animations should be here, not inside typography
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      // Typography plugin configuration remains separate
      //   typography: ({ theme }) => ({
      //     DEFAULT: {
      //       css: {
      //         a: {
      //           color: theme("--color-primary-500"),
      //           "&:hover": {
      //             color: theme("--color-primary-600"),
      //           },
      //           code: { color: theme("--color-primary-400") },
      //         },
      //         "h1,h2": {
      //           fontWeight: "700",
      //           letterSpacing: theme("--tracking-tight"),
      //         },
      //         h3: {
      //           fontWeight: "600",
      //         },
      //         code: {
      //           color: theme("--color-indigo-500"),
      //         },
      //       },
      // },
      // invert: {
      //   css: {
      //     a: {
      //       color: theme("--color-pink-500"),
      //       "&:hover": {
      //         color: theme("--color-primary-400"),
      //       },
      //       code: { color: theme("--color-primary-400") },
      //     },
      //     "h1,h2,h3,h4,h5,h6": {
      //       color: theme("--color-gray-100"),
      //     },
      //   },
      // },
      //   }),
    },
  },
  //   plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
