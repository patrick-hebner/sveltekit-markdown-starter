type TitleWithSummary = {
	title: string;
	summary: string;
};

export type HomeMetaData = TitleWithSummary & {
	features: TitleWithSummary[];
	buttons: {
		primary: string;
		primaryUrl: string;
		secondary: string;
		secondaryUrl: string;
	};
};
