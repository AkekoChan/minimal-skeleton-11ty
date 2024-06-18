const site = require("../../src/_data/site");

const toAbsoluteUrl = (url) => {
  return new URL(url, site.url).href;
};

const toISOString = (dateString) => new Date(dateString).toISOString();

module.exports = {
  toAbsoluteUrl,
  toISOString,
};
