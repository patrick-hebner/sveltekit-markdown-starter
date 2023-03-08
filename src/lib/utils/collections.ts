import type { MetaDataWithPath, Markdown, MarkdownData } from '$lib/models/markdown';
import { slugify } from './slugify';

export type Collection = 'projects';

export const collections: { [key: string]: Record<string, () => Promise<unknown>> } = {
	projects: import.meta.glob(`$content/projects/*.md`)
};

export async function fetchCollectionData<T>(collection: string): Promise<MetaDataWithPath<T>[]> {
	const collectionEntries = collections[collection];

	const iterableCollectionEntries = Object.entries(collectionEntries);

	const collectionItems = await Promise.all(
		iterableCollectionEntries.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as Markdown<T>;
			const subpath = path.slice(12, -3);
			return {
				metadata,
				path: subpath
			};
		})
	);

	return collectionItems;
}

export async function getLatestCollectionEntries<T extends { date: string }>(
	collection: string,
	limit: number
): Promise<MetaDataWithPath<T>[]> {
	const entries = await fetchCollectionData<T>(collection);
	const sorted = sortByDate<T>(entries);
	return limitEntries(sorted, limit);
}

export async function fetchCollectionItemData<T>(
	collection: Collection,
	item: string
): Promise<MarkdownData<T>> {
	const post = (await import(`../../content/${collection}/${item}.md`)) as Markdown<T>;

	return {
		metadata: post.metadata,
		Content: post.default
	};
}

export function limitEntries<T>(
	entries: MetaDataWithPath<T>[],
	limit?: number
): MetaDataWithPath<T>[] {
	if (!limit || entries.length <= limit) {
		return entries;
	}

	return entries.slice(0, limit);
}

export function sortByDate<T extends { date: string }>(
	entries: MetaDataWithPath<T>[]
): MetaDataWithPath<T>[] {
	return entries.sort((a: MetaDataWithPath<T>, b: MetaDataWithPath<T>) => {
		return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
	});
}

export function filterByCategory<T extends { category?: string }>(
	entries: MetaDataWithPath<T>[],
	category: string
): MetaDataWithPath<T>[] {
	return entries.filter((t: MetaDataWithPath<T>) => {
		const currentCategory = slugify(t.metadata.category || '');
		return currentCategory === category;
	});
}

export function getCategoriesFromCollection(
	entries: MetaDataWithPath<{ category: string }>[]
): string[] {
	return [...new Set(entries.map((e) => e.metadata.category))];
}

export function getCategoryName(categories: string[], slug: string): string {
	return categories.find((c) => slugify(c) === slug) || '';
}
