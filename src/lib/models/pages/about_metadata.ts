import type { TitleWithSummary } from '../title_with_summary';

export type AboutMetaData = TitleWithSummary & {
	social: {
		title: string;
		twitter: string;
		github: string;
	};
};
