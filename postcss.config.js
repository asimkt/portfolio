module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            colorPrimaryDark: "#5BC0EB",
            colorPrimary: "#5BC0EB",
            colorSecondaryDark: "#8AA29E",
            colorSecondary: "#8AA29E",
            colorNeutralDark: "#EAF2E3",
            colorNeutral: "#EAF2E3",
            colorNeutralLight: "#FFFFFF",
            colorText: "#000000",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
