/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "font",
      },
      colors: {
        title: "#3f4246",
        text: "#676767",
        footer: "#3f4246",
      },
      backgroundImage: {
        hero: "radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)",
        banner:
          "radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(127,208,231,0) 100%)",
        dev: "bg-gradient-to-t  from-[#E9FAFB] via-[#effcfc] to-[#ffffff]",
      },
      margin: {
        "1/182": "182px",
        "1/80px": "80px",
        "1/16": "16.25px",
        "1/25": "25px",
        "1/11": "11px",
        "1/61": "61px",
        "1/148": "148px",
        "1/168": "168px",
        "1/180": "180px",
        "1/177": "177px",
        "1/38": "38%",
      },

      padding: {
        "1/22": "22px",
        "1/23": "23px",
      },
      maxWidth: {
        "1/940": "940px",
        "1/480": "480px",
      },
      lineHeight: {
        "1/44": "44px",
        "1/17": "17.6px",
        "1/28": "28px",
      },
      padding: {
        "1/6": "6px",
        "1/23": "23px",
        "1/39": "39px",
        "1/34": "34px",
      },
      height: {
        "1/480": "480px",
        "1/296": "296px",
        "1/180": "180px",
        "1/400": "400px",
        "1/600": "600px",
        "1/500": "500px",
        "1/100": "100%",
        "1/18": "18px",
      },
      width: {
        "1/296": "296px",
        "1/180": "180px",
        "1/71": "71%",
        "1/540": "540px",
        "1/400": "400px",
        "1/50": "50%",
        "1/40": "40%",
        "1/910": "910px",
        "1/200": "200px",
        "1/480": "480px",
        "1/80": "18px",
      },
      gap: {
        "1/179": "179px",
        "1/10": "10px",
      },
    },
  },
  plugins: [],
};
