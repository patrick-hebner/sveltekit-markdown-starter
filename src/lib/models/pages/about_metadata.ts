import type { SeoSection } from '$lib/models/seo';
import type { TitleWithSummary } from '$lib/models/title_with_summary';

export type AboutMetaData = SeoSection &
	TitleWithSummary & {
		social: {
			title: string;
			twitter: string;
			github: string;
		};
	};
