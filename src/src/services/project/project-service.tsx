import { CreateProject, Project, UpdateProject } from "./project-service.types";

class ProjectServiceInternal {
	static instance = null as unknown as ProjectServiceInternal;

	static getInstance() {
		if (!ProjectServiceInternal.instance) {
			ProjectServiceInternal.instance = new ProjectServiceInternal();
			return ProjectServiceInternal.instance;
		}
		return ProjectServiceInternal.instance;
	}

	getProjects(): Promise<Project[]> {
		return fetch("http://localhost:3001/projects").then((response) => response.json());
	}

	getProject(id: string): Promise<Project> {
		return fetch(`http://localhost:3001/projects/${id}`).then((response) => response.json());
	}

	createProject(project: CreateProject): Promise<Project> {
		return fetch(`http://localhost:3001/projects`, {
			method: "POST",
			body: JSON.stringify({ ...project, id: Math.floor(Math.random() * 25) }),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());
	}

	updateProject(id: string, project: UpdateProject): Promise<Project> {
		return fetch(`http://localhost:3001/projects/${id}`, {
			method: "PUT",
			body: JSON.stringify(project),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());
	}

	deleteProject(id: string): void {
		fetch(`http://localhost:1234/projects/${id}`, {
			method: "DELETE",
		});
	}
}
export const ProjectService = ProjectServiceInternal.getInstance();
