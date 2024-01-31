/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
             
              white: {
                  100: "#ffffff",
                  90:"#F9F9F9",
                  80:"#BED6F7",
              },
              black: {
                  100: "rgba(39, 38, 38, 1)",
                  90: "rgba(80, 75, 75, 1)",
                  80: "rgba(28, 30, 41, 1)",
                  70: "rgba(127, 147, 149, 1)",
                  60: "rgba(111, 124, 128, 1)",
                  50: "rgba(35, 31, 32, 1)",
                  40:"rgba(62, 62, 62, 1)",
                  30:"rgba(29, 29, 29, 1)",
                  
              },
              brown: {
                  100: "rgba(134, 68, 16, 1)",
              },
              blue: {
                  160: "rgba(32, 111, 227, 0.16)",
                  100: "rgba(31, 111, 227, 1)",
                  90: "rgba(190, 214, 247, 1)",
                  80: "rgba(194, 213, 243, 1)",
                  70: "rgba(51, 204, 255, 1)",
                  60: "rgba(51, 97, 255, 1)",
                  50: "rgba(31, 111, 227, 1)"
              },
              red: {
                  100: "rgba(255, 92, 92, 1)",
              },
              orange: {
                  100: "rgba(252, 178, 13, 1)",
                  56: "rgba(255, 157, 0, 0.56)",
              },
              green: {
                  100: "rgba(68, 147, 77, 1)",
                  90:"rgba(77, 167, 29, 1)",
                  80:"rgba(57, 132, 87, 1)",
              },
              gray: {
                  100: "rgba(196, 207, 208, 1)",
                  90:"a5a5a5",
                  80:"rgba(167, 169, 183, 1)",
                  70:"rgba(112, 112, 112, 1)"
              },
          },
          fontSize: {
              "4xl":["48px", "50px"],
              "3xl": ["38px", "50px"],
              "2xl": ["32px", "43px"],
              "xl": ["28px", "130%"],
              "2lg": ["22px", "130%"],
              "lg": ["20px", "140%"],
              "3md": ["18px", "24px"],
              "2md": ["16px", "150%"],
             "md": ["14px", "20px"],
              "sm": ["12px", "14px"],
              "xs": ["8px", "10px"],
          },
          fontFamily: {
              
              Roboto: ["Roboto", "sans-serif"],
          },
          backgroundImage: {
              sideBackground:
                  "url('/src/assets/images/side.png')",
              }
      },
  },
  plugins: [],
}
