module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.vue", "./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backdrop: "#000000a3",
        
        blue1: "#E4F0F6",
        blue2: "#BCD9EA",
        blue3: "#8BBDD9",
        blue4: "#5BA4CF",
        blue5: "#298FCA",
        blue6: "#0079BF",
        blue7: "#026AA7",
        blue8: "#055A8C",
        blue9: "#094C72",
        blue10: "#0C3953",

        gray1: "#F8F9F9",
        gray2: "#ebecf0",
        gray3: "#E2E4E6",
        gray4: "#D6DADC",
        gray5: "#CDD2D4",
        gray6: "#C4C9CC",
        gray7: "#B6BBBF",
        gray8: "#A5ACB0",
        gray9: "#959DA1",
        gray10: "#838C91",

        green1: "#EEF6EC",
        green2: "#D6ECD2",
        green3: "#B7DDB0",
        green4: "#99D18F",
        green5: "#7BC86C",
        green6: "#61BD4F",
        green7: "#5AAC44",
        green8: "#519839",
        green9: "#49852E",
        green1O: "#3F6F21"
      },
      width: {
        list: "272px",
        dropdown: "316px",
        cardDetail: "768px"
      },
      inset: {
        dropdown: "234px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
