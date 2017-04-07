import { Component, OnInit} 				from '@angular/core';
import { ActivatedRoute, Params, Router } 	from '@angular/router';

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

	editableProjectName: string;
	editableProjectDescription: string;

	constructor(
		private projectService: ProjectService,
		private requirementsService: RequirementService,
		private route: ActivatedRoute,
		private router : Router
	) {}

	ngOnInit() : void {
		this.route.params
			.switchMap((params: Params) => this.projectService.get(+params['projectId']))
			.subscribe(project => {
				this.project = project;
				this.project.description = this.project.description ? this.project.description : 'no description here';
				for (let requirements of project.requirements) {
					this.requirementsService.get(requirements)
						.then(requirement => this.requirements.push(requirement));
				}
			});
	}

	editProjectName(): void {
		this.editableProjectName = this.project.name;
	}

	editProjectDescription(): void {
		this.editableProjectDescription = this.project.description;
	}

	updateProjectName(newProjectName: string) : void {
		var trimmedNewProjectName = newProjectName.trim();
		if (trimmedNewProjectName != '' && this.project.name != trimmedNewProjectName) {
			this.project.name = trimmedNewProjectName;
			this.projectService.update(this.project);
		}
		this.editableProjectName = undefined;
	}

	updateProjectDescription(newDescription: string): void {
		var trimmedNewDescription = newDescription.trim();
		if (trimmedNewDescription == '') {
			trimmedNewDescription = 'no description here';
		}
		if (this.project.description != trimmedNewDescription) {
			this.project.description = trimmedNewDescription;
			this.projectService.update(this.project);
		}
		this.editableProjectDescription = undefined;
	}

	addRequirement(): void {
		this.requirementsService.create('New requirement', this.project.id)
			.then(requirement => this.router.navigate(['requirements', requirement.id], {relativeTo: this.route}));
	}

	deleteRequirement(index: number): void {
		var requirement = this.requirements[index];
		this.requirementsService.delete(requirement);

		this.requirements.splice(index, 1);
		this.project.requirements.splice(index, 1);
	}
}