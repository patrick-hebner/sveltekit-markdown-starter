import { fetchHomeData } from '$lib/utils/home';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	try {
		const homeData = await fetchHomeData();
		return {
			...homeData.metadata,
			Content: homeData.Content
		};
	} catch (e) {
		console.log(e);
		throw error(500, {
			message: 'Can not load home data'
		});
	}
}) satisfies PageLoad;
