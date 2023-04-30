import { useEffect, useState } from "react";
import { ProjectService } from "services/project/project-service";
import { Project } from "services/project/project-service.types";

export default function ProjectListPage(): JSX.Element {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		ProjectService.getProjects().then((projects) => setProjects(projects));
	}, []);

	return (
		<div>
			<h1>Projects</h1>

			<ul>
				{projects.map((project) => (
					<li key={project.id}>{project.name}</li>
				))}
			</ul>
		</div>
	);
}
