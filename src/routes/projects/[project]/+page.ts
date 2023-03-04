import type { ProjectMetaData } from '$lib/models/pages/project_metadata';
import { fetchCollectionItemData } from '$lib/utils/collections';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const project = await fetchCollectionItemData<ProjectMetaData>('projects', params.project);
		return { ...project.metadata, Content: project.Content };
	} catch (e) {
		throw error(404, {
			message: `Project ${params.project} not found`
		});
	}
}) satisfies PageLoad;
