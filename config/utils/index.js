const path = require("path");

/** Transforme un objet JS en attribut HTML */
const stringifyAttributes = (attributeMap) => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      return typeof value === "undefined" ? "" : `${attribute}="${value}"`;
    })
    .join(" ");
};

/** Récupère le chemin d'un fichier sans son répertoire de base */
const removeBaseDirectory = (str) => str.substring(str.indexOf(path.sep));

module.exports = {
  stringifyAttributes,
  removeBaseDirectory,
};
