export type Markdown<T> = {
	metadata: T;
	default: unknown;
};

export type MarkdownData<T> = {
	metadata: T;
	Content: any;
};

export type MetaDataWithPath<T> = {
	metadata: T;
	path: string;
};
