import { CreateProject, Project, UpdateProject } from "./project-service.types";

class ProjectServiceInternal {
	BASE_URL = process.env.REACT_APP_API_BASE_URL;

	static instance = null as unknown as ProjectServiceInternal;

	static getInstance() {
		if (!ProjectServiceInternal.instance) {
			ProjectServiceInternal.instance = new ProjectServiceInternal();
			return ProjectServiceInternal.instance;
		}
		return ProjectServiceInternal.instance;
	}

	getProjects(): Promise<Project[]> {
		return fetch(`${this.BASE_URL}/projects`).then((response) => response.json());
	}

	getProject(id: string): Promise<Project> {
		return fetch(`${this.BASE_URL}/projects/${id}`).then((response) => response.json());
	}

	createProject(project: CreateProject): Promise<Project> {
		return fetch(`${this.BASE_URL}/projects`, {
			method: "POST",
			body: JSON.stringify({ ...project, id: Math.floor(Math.random() * 25) }),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());
	}

	updateProject(id: string, project: UpdateProject): Promise<Project> {
		return fetch(`${this.BASE_URL}/projects/${id}`, {
			method: "PUT",
			body: JSON.stringify(project),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());
	}

	deleteProject(id: string): void {
		fetch(`${this.BASE_URL}projects/${id}`, {
			method: "DELETE",
		});
	}
}
export const ProjectService = ProjectServiceInternal.getInstance();
