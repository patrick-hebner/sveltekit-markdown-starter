import type { ProjectMetaData } from '$lib/models/pages/project_metadata';
import { filterByCategory } from '$lib/utils/collections';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, parent }) => {
	try {
		const parentData = await parent();
		const filteredProjects = filterByCategory<ProjectMetaData>(
			parentData.projects,
			params.category
		);
		return {
			projects: filteredProjects
		};
	} catch (e) {
		throw error(404, {
			message: `Projects for ${params.category} not found`
		});
	}
}) satisfies PageLoad;
