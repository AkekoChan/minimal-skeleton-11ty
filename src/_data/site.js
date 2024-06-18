require("dotenv").config();

const environmentSpecificVariables = {
  development: {
    url: "http://localhost:8080",
  },
  production: {
    url: "",
  },
};

module.exports = {
  title: "Eleventy Skeleton",
  author: "",
  email: "",
  description: "Eleventy Skeleton, pour bien réussir son projet 11ty",
  language: "fr-FR",
  favicon: {
    widths: [32, 57, 76, 96, 128, 192, 228],
    format: "png",
  },
  ...environmentSpecificVariables[process.env.ELEVENTY_ENV],
};
