export interface Project {
	id: string;
	name: string;
	description: string;
	startDate: Date;
	endDate: Date | null;
}

export interface CreateProject {
	name: string;
	description: string;
	startDate: Date;
	endDate: Date | null;
}

export interface UpdateProject {
	name: string;
	description: string;
	startDate: Date;
	endDate: Date | null;
}
