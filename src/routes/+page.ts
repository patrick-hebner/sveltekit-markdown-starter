import type { HomeMetaData } from '$lib/models/pages/home_metadata';
import { fetchPageData } from '$lib/utils/page';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	try {
		const homeData = await fetchPageData<HomeMetaData>('home');
		return {
			...homeData.metadata,
			Content: homeData.Content
		};
	} catch (_) {
		throw error(500, {
			message: 'Can not load home data'
		});
	}
}) satisfies PageLoad;
