import type { TitleWithSummary } from '$lib/models/title_with_summary';
import type { SeoSection } from '$lib/models/seo';

export type HomeMetaData = SeoSection &
	TitleWithSummary & {
		features: TitleWithSummary[];
		buttons: {
			primary: string;
			primaryUrl: string;
			secondary: string;
			secondaryUrl: string;
		};
		projects: {
			title: string;
			button: string;
		};
	};
