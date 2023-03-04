import type { MetaDataWithPath, Markdown, MarkdownData } from '$lib/models/markdown';

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
