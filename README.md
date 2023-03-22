# SvelteKit Markdown Starter

<img width="1240" alt="Bildschirm­foto 2023-02-28 um 06 12 19" src="https://user-images.githubusercontent.com/6704069/226823919-54a0d0d6-8d89-4790-89ee-27f98b14900f.png">

This is a website starter for building a JAM stack site with

- SvetleKit
- Markdown
- Tailwind CSS

This starter might help you get startet with your own JAM stack site and provides some helpful features:

## Single type markdown pages

You can manage your content for single pages like `home` or `about` as markdown frontmatter.

To create a new page follow these steps:

1. Add a new file to `/src/lib/content`. E.g. your_page.md
2. Insert a frontmatter with your page data to the new file. The frontmatter can be arbitrary and you can also add a markdown body if needed.

```markdown
---

seo:
  title: 'New Page - SvelteKit starter'
  description: 'A new page'
title: 'My new page'
summary: 'A short description'

... and others

---
```

3. Create a new `TS` type definition for the frontmatter of your new page to `/src/lib/models/pages` to make `TS` happy.

```js
import type { SeoSection } from '$lib/models/seo';
import type { TitleWithSummary } from '$lib/models title_with_summary';

export type NewPageMetaData = SeoSection & TitleWithSummary & { ... };
```

4. Extend the type of available pages in `/src/lib/utils/page.ts`. The type has to match the filename without the extension.

```js

...

export type Page = 'home' | 'about' | 'projects' | 'new_page';

export async function fetchPageData<T>(page: Page): Promise<MarkdownData<T>> {
	...
}
```

5. Create a new page in routes and fetch the data. To see how this works, please look at one of the example pages (about, home)

## Collection type markdown files

This starter already gives you a sample collection type (projects) you can easily adapt to your need. However, if you want to add another one, you can follow almost the same steps as for a single type.

1. Create a new folder in `content` with the name of the collection and add a markdown file for each collection item (see projects for an example).

2. Add a `TS` type definition for a single collection type and for the collection list page if needed.

3. Extend the `/src/lib/utils/collection.ts` file

```js
...
export const collections: { [key: string]: Record<string, () => Promise<unknown>> } = {
	projects: import.meta.glob(`$content/projects/*.md`),
    your_new_collection: import.meta.glob(`$content/new_collection/*.md`),
};
...
```

4. Add pages for the new collection in `routes` (see projects)

## Other features

- SEO component for conveniently adding meta tags for title and description (extendable according to your needs)
- Category filter for projects
- Latest projects on homepage
- Tailwind CSS integration with prepared configuration
- Basic components for your page layout
- Custom font integration
