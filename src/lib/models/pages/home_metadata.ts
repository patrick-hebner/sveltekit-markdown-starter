import type { TitleWithSummary } from '../title_with_summary';

export type HomeMetaData = TitleWithSummary & {
	features: TitleWithSummary[];
	buttons: {
		primary: string;
		primaryUrl: string;
		secondary: string;
		secondaryUrl: string;
	};
};
