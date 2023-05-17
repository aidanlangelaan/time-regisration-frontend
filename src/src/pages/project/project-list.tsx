import { Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell, Title1 } from "@fluentui/react-components";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { ProjectService } from "services/project/project-service";
import { Project } from "services/project/project-service.types";

export default function ProjectListPage(): JSX.Element {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		ProjectService.getProjects()
			.then((projects) =>
				projects.map((project) => ({ ...project, startDate: new Date(project.startDate), endDate: project.endDate ? new Date(project.endDate) : null }))
			)
			.then((projects) => setProjects(projects));
	}, []);

	return (
		<div>
			<Title1>Projects</Title1>

			<Table sortable aria-label="Table with sort">
				<TableHeader>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Customer</TableHeaderCell>
						<TableHeaderCell>Description</TableHeaderCell>
						<TableHeaderCell>Start date</TableHeaderCell>
						<TableHeaderCell>End date</TableHeaderCell>
					</TableRow>
				</TableHeader>
				<TableBody>
					{projects.map((project) => (
						<TableRow key={project.id}>
							<TableCell>{project.name}</TableCell>
							<TableCell>{project.customer.name}</TableCell>
							<TableCell>{project.description}</TableCell>
							<TableCell>{format(project.startDate, "dd-MM-yyyy")}</TableCell>
							<TableCell>{project.endDate != null && <>{format(project.endDate, "dd-MM-yyyy")}</>}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
