module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            colorPrimaryDark: "#ff5851",
            colorPrimary: "#ff5851",
            colorSecondaryDark: "#ff5851",
            colorSecondary: "#ff5851",
            colorNeutralDark: "#414a6b",
            colorNeutral: "#f8f8f8",
            colorNeutralLight: "#f8f8f8",
            colorText: "##1c1b20",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
