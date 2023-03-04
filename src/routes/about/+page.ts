import type { AboutMetaData } from '$lib/models/pages/about_metadata';
import { fetchPageData } from '$lib/utils/page';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	try {
		const pageData = await fetchPageData<AboutMetaData>('about');
		return {
			...pageData.metadata,
			Content: pageData.Content
		};
	} catch (_) {
		throw error(500, {
			message: 'Can not load about data'
		});
	}
}) satisfies PageLoad;
