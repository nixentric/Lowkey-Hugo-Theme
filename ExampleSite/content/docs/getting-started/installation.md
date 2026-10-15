---
title: "Installation"
description: "Requirements and a step-by-step setup for a brand new site."
weight: 1
tableOfContents: true
---

## Requirements

| Tool          | Version           | Why it is needed                                |
| ------------- | ----------------- | ----------------------------------------------- |
| Hugo          | v0.158.0 or newer | Builds the site                                 |
| Node.js + npm | Current LTS       | Runs Tailwind CSS through PostCSS               |
| Git           | Any recent version | Adds the theme to your site as a submodule     |

Check what you have installed:

```bash
hugo version
node --version
git --version
```

## Create a site

```bash
hugo new project my-blog
cd my-blog
git init
```

## Add the theme

Add Lowkey as a Git submodule in `themes/enchanted-lowkey`:

```bash
git submodule add https://github.com/nixentric/Lowkey-Hugo-Theme.git themes/enchanted-lowkey
```

If you use SSH with GitHub, the URL `git@github.com:nixentric/Lowkey-Hugo-Theme.git` works too.

{{< alert warning "Keep the folder name" >}}
The example configuration says <code>theme = 'enchanted-lowkey'</code>. If you clone the theme into a different folder, change that line to match.
{{< /alert >}}

## Copy the example site

The example site holds a ready-made configuration and sample content. Remove the default config Hugo created, then copy the example over your site:

```bash
rm hugo.toml
cp -R themes/enchanted-lowkey/ExampleSite/. .
```

You now have:

```text
my-blog/
├── config/_default/
│   ├── hugo.toml      # site settings
│   ├── params.toml    # theme settings
│   └── menus.toml     # header and footer links
├── content/
│   ├── _index.md      # home page
│   ├── about.md       # about page
│   ├── posts/         # blog posts
│   ├── docs/          # these docs
│   ├── categories/
│   └── tags/
└── package.json       # Tailwind CSS and PostCSS
```

## Install the CSS tools

```bash
npm install
```

This installs Tailwind CSS, PostCSS and Autoprefixer into `node_modules/`. Hugo calls them every time it builds your styles.

## Start the development server

```bash
hugo server
```

Open [http://localhost:1313](http://localhost:1313). Every change you save reloads the page automatically. Add `-D` to also show posts that are still drafts.

## Updating the theme

Pull the newest version of the submodule:

```bash
git submodule update --remote --merge
```

Your content, configuration and any templates you overrode in your own `layouts/` folder are never touched by an update.

### Upgrading from an older version

Lowkey now requires Hugo v0.158.0 or newer. If your site was set up before that, rename these settings:

| Old setting                         | New setting                              |
| ----------------------------------- | ---------------------------------------- |
| `languageCode = 'en-US'`            | `locale = 'en-US'`                       |
| `paginate = 5`                      | `[pagination]` → `pagerSize = 5`         |
| `disqusShortname` in `params.toml`  | `[services.disqus]` → `shortname = '…'`  |

The old `paginate` key is ignored by recent Hugo versions without any warning, so lists silently fall back to 10 posts per page until you rename it.

You can also remove `type: taxonomies` and `layout: "home"` from `content/categories/_index.md` and `content/tags/_index.md`. They are no longer needed, but they do no harm if you keep them.

## Troubleshooting

**`POSTCSS: failed to transform "/css/tailwind.css"`**
Run `npm install` in the root of your site (the folder with `package.json`), not inside the theme folder.

**`Access to this API has been restricted`**
Hugo runs Node.js in a sandbox that may only read files inside your project. This happens when the theme is a symlink to a folder somewhere else. Keep the theme inside `themes/`, as a submodule or a plain copy.

**The page has no styles**
Check that `node_modules/` exists, then stop and restart `hugo server`.
