const site = require("../../src/_data/site");

/** Transforme une URL relative en absolute */
const toAbsoluteUrl = (url) => {
  return new URL(url, site.url).href;
};

/** Tranforme une date en format ISO */
const toISOString = (dateString) => new Date(dateString).toISOString();

module.exports = {
  toAbsoluteUrl,
  toISOString,
};
