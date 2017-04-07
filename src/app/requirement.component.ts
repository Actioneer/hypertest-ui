import { Component, OnInit } 				from '@angular/core';
import { ActivatedRoute, Params, Router } 	from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Requirement } 				from './requirement';
import { TestCase } 				from './test-case';

import { RequirementService } 		from './requirement.service';
import { TestCaseService } 			from './test-case.service';

@Component({
	selector: 'requirement',
	templateUrl: './requirement.component.html'
})
export class RequirementComponent implements OnInit {
	requirement : Requirement ;
	testcases: TestCase[] = [];

	editableName: boolean = false;
	editableDescription: boolean = false;

	constructor(
		private requirementService: RequirementService,
		private testcaseService: TestCaseService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() : void {
		this.route.params
			.switchMap((params: Params) => this.requirementService.get(+params['requirementId']))
			.subscribe(requirement => {
				this.requirement = requirement;
				for (let testcase of requirement.testcases) {
					this.testcaseService.get(testcase)
						.then(testcase => this.testcases.push(testcase));
				}
			});
	}

	editName(): void {
		this.editableName = true;
	}

	editDescription(): void {
		this.editableDescription = true;
	}

	updateName(newName: string): void {
		var trimmedNewName = newName.trim();
		if (trimmedNewName != '' && this.requirement.name != trimmedNewName) {
			console.log('updating name to ' + trimmedNewName);
			this.requirement.name = trimmedNewName;
			this.requirementService.update(this.requirement);
		}
		this.editableName = false;
	}

	updateDescription(newDescription: string): void {
		var trimmedNewDescription = newDescription.trim();
		if (trimmedNewDescription == '') {
			trimmedNewDescription = 'no description here';
		}
		if (this.requirement.description != trimmedNewDescription) {
			this.requirement.description = trimmedNewDescription;
			this.requirementService.update(this.requirement);
		}
		this.editableDescription = false;
	}

	addTestCase(): void {
		this.testcaseService.create('New testcase', this.requirement.id)
			.then(testcase => this.router.navigate(['testcases', testcase.id], {relativeTo: this.route}));
	}

	deleteTestCase(index: number): void {
		var testcase = this.testcases[index];
		this.testcaseService.delete(testcase);

		this.testcases.splice(index, 1);
		this.requirement.testcases.splice(index, 1);
	}

}