import type { Markdown, MarkdownData } from '$lib/models/markdown';
import type { HomeMetaData } from '$lib/models/pages/home_metadata';

const file = 'home';

export async function fetchHomeData(): Promise<MarkdownData<HomeMetaData>> {
	const homeData = (await import(`../../content/${file}.md`)) as Markdown<HomeMetaData>;
	return {
		metadata: homeData.metadata,
		Content: homeData.default
	};
}
