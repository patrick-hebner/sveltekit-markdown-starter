import type { SeoSection } from '$lib/models/seo';
import type { TitleWithSummary } from '$lib/models/title_with_summary';

export type ProjectMetaData = SeoSection &
	TitleWithSummary & {
		category: string;
		date: string;
		cta: { label: string; url: string };
	};
