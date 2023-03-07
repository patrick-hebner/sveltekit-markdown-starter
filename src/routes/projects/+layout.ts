import type { ProjectsMetaData } from '$lib/models/pages/projects_metadata';
import type { ProjectMetaData } from '$lib/models/pages/project_metadata';
import { fetchCollectionData } from '$lib/utils/collections';
import { fetchPageData } from '$lib/utils/page';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	try {
		const pageData = await fetchPageData<ProjectsMetaData>('projects');
		const projects = await fetchCollectionData<ProjectMetaData>('projects');
		return {
			...pageData.metadata,
			projects: projects
		};
	} catch (_) {
		throw error(500, {
			message: 'Can not load projects data'
		});
	}
}) satisfies LayoutLoad;
