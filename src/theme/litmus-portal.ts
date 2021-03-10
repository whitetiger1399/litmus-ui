import { createTheme } from "./base";

const litmusPortalTheme = createTheme({
  palette: {
    primary: {
      main: "#5B44BA",
      light: "#858CDD",
      dark: "#4028A0",
    },
    secondary: {
      main: "#109B67",
      light: "#858CDD",
      dark: "#128359",
    },
    graph: {
      dashboard: {
        lightBlue: "#08BBD7",
        lightOrange: "#F6B92B",
      },
      toolTip: "#5252F6",
      legendTableHeading: "#0098DD",
      radialChartPassed: "#0098DD",
      line: [
        "#A93DDB",
        "#A05195",
        "#D45087",
        "#CC556A",
        "#FFA600",
        "#DFA73E",
        "#F6793E",
        "#6DA966",
        "#51C9DA",
        "#2F4B7C",
      ],
      area: [
        "#A93DDB73",
        "#A0519573",
        "#A4508773",
        "#CC556A73",
        "#FFA60073",
        "#DFA73E73",
        "#F6793E73",
        "#6DA96673",
        "#51C9DA73",
        "#2F4B7C73",
      ],
    },
    success: {
      main: "#109B67",
      light: "#109B6710",
      dark: "#128359",
    },
    error: {
      light: "#CA2C2C10",
      main: "#CA2C2C",
      dark: "#A62F28",
    },
    warning: {
      light: "#F6B92B20",
      main: "#F6B92B",
      dark: "#402C01",
    },
    background: {
      default: "#FAFBFD",
      paper: "#FFFFFF",
    },
    sidebarMenu: "#FAFBFD",
    loginBackground: "#FFFFFF",
    disabledBackground: "#E6E6E6",
    text: {
      primary: "#101217",
      secondary: "#FFFFFF",
      disabled: "#777777",
      hint: "#777777",
    },
    highlight: "#5B44BA",
    horizontalStepper: {
      completed: "#5D6173",
      active: "#2CCA8F",
      pending: "#B9B9B9",
    },
    border: {
      main: "#B9B9B9",
      success: "#109B67",
      error: "#CA2C2C",
    },
    progressBarGradient:
      "linear-gradient(90.43deg, #5B44BA 0.35%, #858CDD 51.03%, #109B67 99.64%)",
    status: {
      running: {
        text: "#F6FB92B",
        background: "#F6FB92B20",
      },
      completed: {
        text: "#109B67",
        background: "#109B6720",
      },
      pending: {
        text: "#B9B9B9",
        background: "#B9B9B920",
      },
      failed: {
        text: "#CA2C2C",
        background: "#CA2C2C20",
      },
    },
    cards: {
      header: "#EDF0F8",
      background: "#FFFFFF",
      highlight: "#109B6710",
    },
  },
});

export { litmusPortalTheme };
