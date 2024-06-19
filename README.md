# Minimal Skeleton Eleventy

**Ce projet est un skeleton de projet [11ty](https://www.11ty.dev/) sur sa version stable 2.0.1.**

## Fonctionnalités :

- Pré-configuration des dossiers (input, output, includes, layouts, data);
- Gérération des balises meta et des fichiers `sitemap.xml`/`robots.txt`;
- Sépération des dossiers de config (collections, filters, shortcodes, etc);
- Génération automatique des favicons;
- Génération des balises picture;

## Démarrage :

1. Clonez ce référentiel ou téléchargez le fichier ZIP.
2. Installez les dépendances:

```bash
npm install
```

3. Démarrez le serveur de développement:

```bash
npm run dev
```

4. Ouvrez votre navigateur web et accédez à `http://localhost:8080`.

## Structure du projet:

### `src`

- `_data` : Contient fichiers de données globales;
- `_includes` : Contient des fichiers partiels HTML;
- `_layouts` : Contient les layouts HTML pour différentes pages;
- `_pages` : Contient les fichiers Markdown ou HTML pour les pages du site;
- `assets` : Contient les fichiers CSS, JavaScript et autres fichiers statiques;
- `robots.liquid` : Crée le `robots.txt`;
- `sitemap.liquid` : Crée le sitemap de votre site.

### `11ty`

Le fichier `.eleventy.js` permet de configurer notre site en ajoutant des filtres, des collections, etc.

## Utilisation de Markdown :

11ty peut rendre des fichiers Markdown en HTML. Vous pouvez créer des fichiers Markdown dans le répertoire `_pages` pour créer des articles de blog ou pour créer d'autres types de pages.

## Utilisation de layouts :

Les layouts HTML sont utilisés pour définir la structure de base d'une page. Vous pouvez créer des layouts dans le répertoire `_layouts`. Les layouts peuvent être utilisés dans les fichiers Markdown en utilisant le front matter:

```markdown
---
layout: default
---
```

## Ajout de CSS et de JavaScript :

Vous pouvez ajouter des fichiers CSS et JavaScript dans le répertoire `assets`. Les fichiers CSS seront automatiquement inclus dans toutes les pages. Vous pouvez inclure des fichiers JavaScript dans les layouts ou les fichiers Markdown en utilisant le front matter:

```markdown
---
stylesheets:
  - /assets/styles/main.css
scripts:
  - /assets/scripts/index.js
---
```

## Utilisation du shortcode pour la balise `picture`

Pour créer vos images responsives, mettez vos images dans le répertoire `assets\images`. Puis, ajoutez le code ci-dessous dans vos pages et remplissez les champs :

```liquid
  {% render "picture.html" src: "url-de-votre-image", alt: "alternative-textuelle-de-votre-image", className: "classe-de-votre-balise-picture", imgClassName: "classe-de-votre-balise-image",isLazy: "true ou false si vous voulez que votre image soit en lazy loading" %}
```

## Utilisation du front matter :

Dans le front matter de vos templates ou bien de vos layouts. Vous pouvez modifier ces éléments :

| **Clé**                 | **Type**                                                            | **Description**                                              |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------ |
| `title`                 | string                                                              | Le titre de la page.                                         |
| `description`           | string                                                              | La description de la page.                                   |
| `stylesheets`           | string[]                                                            | Ensemble des liens des fichiers CSS.                         |
| `scripts`               | string[]                                                            | Ensemble des liens des fichiers JS.                          |
| `preloads`              | { as: string; type: string; href: string; crossorigin?: boolean }[] | Optimisation preload.                                        |
| `noindex`               | boolean                                                             | Donne la permission aux moteurs de recherche la page.        |
| `excludeFromSitemap`    | boolean                                                             | Exclue la page courante du sitemap.                          |
| `openGraph.image`       | string                                                              | Permet de changer l'image quand la page est partagée.        |
| `openGraph.type`        | string                                                              | Permet de changer le type de la page.                        |
| `openGraph.title`       | string                                                              | Permet de changer le titre quand la page est partagée.       |
| `openGraph.description` | string                                                              | Permet de changer la description quand la page est partagée. |

## Passthrough de fichiers statiques :

11ty a la possiblité de transférer des fichiers statiques du répertoire `assets` vers le répertoire de sortie. Cela signifie que vous pouvez placer des images, des polices et d'autres fichiers statiques dans le répertoire `assets` et ils seront disponibles sur votre site web.

## `package.json :`

- `dev` : Lance le projet en environnement de développement;
- `build` : Lance le projet en environnement de production;

## Pour plus d'informations:

- [Documentation 11ty](https://www.11ty.dev/docs/local-installation/)
- [Exemples de projets 11ty](https://github.com/11ty)
