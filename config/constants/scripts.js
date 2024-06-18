const path = require("path");
const dir = require("./dir");

const scriptUrlPath = "/assets/scripts";

const scriptPaths = {
  input: path.join(dir.input, scriptUrlPath),
  output: path.join(dir.output, scriptUrlPath),
};

module.exports = {
  scriptUrlPath,
  scriptPaths,
};
