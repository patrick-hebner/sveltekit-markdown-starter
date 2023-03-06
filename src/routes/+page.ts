import type { HomeMetaData } from '$lib/models/pages/home_metadata';
import type { ProjectMetaData } from '$lib/models/pages/project_metadata';
import { getLatestCollectionEntries } from '$lib/utils/collections';
import { fetchPageData } from '$lib/utils/page';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	try {
		const homeData = await fetchPageData<HomeMetaData>('home');
		const latestProjects = await getLatestCollectionEntries<ProjectMetaData>('projects', 2);
		return {
			...homeData.metadata,
			latestProjects,
			Content: homeData.Content
		};
	} catch (_) {
		throw error(500, {
			message: 'Can not load home data'
		});
	}
}) satisfies PageLoad;
