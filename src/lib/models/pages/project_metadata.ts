import type { TitleWithSummary } from '../title_with_summary';

export type ProjectMetaData = TitleWithSummary & {
	category: string;
	date: string;
	cta: { label: string; url: string };
};
