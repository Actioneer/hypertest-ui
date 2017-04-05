import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
	selector: 'projects-overview',
	templateUrl: './projects-overview.component.html'
})
export class ProjectsOverviewComponent implements OnInit {

	projects: Project[];
	
	constructor(
		private projectsService: ProjectService
	) { }

	ngOnInit(): void {
		this.projectsService.getProjects()
			.then(projects => this.projects = projects);
	}
}