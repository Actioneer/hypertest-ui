import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';

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

	constructor(
		private requirementService: RequirementService,
		private testcaseService: TestCaseService,
		private route: ActivatedRoute
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
}