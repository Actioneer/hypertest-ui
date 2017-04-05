import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Project } 					from './project';
import { Requirement } 				from './requirement';

import { ProjectService } 			from './project.service';
import { RequirementService } 		from './requirement.service';

@Component({
	selector: 'project-detail',
	templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
	project : Project ;
	requirements: Requirement[] = [];

	constructor(
		private projectService: ProjectService,
		private requirementsService: RequirementService,
		private route: ActivatedRoute
	) {}

	ngOnInit() : void {
		this.route.params
			.switchMap((params: Params) => this.projectService.get(+params['projectId']))
			.subscribe(project => {
				this.project = project;
				for (let requirements of project.requirements) {
					this.requirementsService.get(requirements)
						.then(requirement => this.requirements.push(requirement));
				}
			});
	}
}