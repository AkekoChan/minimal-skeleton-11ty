const dir = require("./config/constants/dir");
const { faviconShortcode } = require("./config/shortcodes");
const { toAbsoluteUrl, toISOString } = require("./config/filters");

const TEMPLATE_ENGINE = "liquid";

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget(`${dir.input}/assets/styles`);

  eleventyConfig.addPassthroughCopy(`${dir.input}/assets/styles`);
  eleventyConfig.addPassthroughCopy(`${dir.input}/assets/scripts`);

  eleventyConfig.addShortcode("favicon", faviconShortcode);

  eleventyConfig.addFilter("toAbsoluteUrl", toAbsoluteUrl);
  eleventyConfig.addFilter("toISOString", toISOString);
  eleventyConfig.addFilter("toJson", JSON.stringify);
  eleventyConfig.addFilter("fromJson", JSON.parse);
  eleventyConfig.addFilter("keys", Object.keys);
  eleventyConfig.addFilter("values", Object.values);
  eleventyConfig.addFilter("entries", Object.entries);

  return {
    dir: dir,
    templateFormats: ["md", "html", TEMPLATE_ENGINE],
    markdownTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    dataTemplateEngine: TEMPLATE_ENGINE,
  };
};
