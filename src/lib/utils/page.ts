import type { Markdown, MarkdownData } from '$lib/models/markdown';

export type Page = 'home' | 'about' | 'projects';

export async function fetchPageData<T>(page: Page): Promise<MarkdownData<T>> {
	const homeData = (await import(`../../content/${page}.md`)) as Markdown<T>;
	return {
		metadata: homeData.metadata,
		Content: homeData.default
	};
}
