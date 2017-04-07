import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { TestCase } 				from './test-case';
import { TestStep } 				from './test-step';
import { TestCaseService } 			from './test-case.service';

@Component({
	selector: 'test-case',
	templateUrl: './test-case.component.html'
})
export class TestCaseComponent implements OnInit {
	case : TestCase ;

	constructor(
		private testcaseService: TestCaseService,
		private route: ActivatedRoute
	) {}

	ngOnInit() : void {
		this.route.params
			.switchMap((params: Params) => this.testcaseService.get(+params['testCaseId']))
			.subscribe(testcase => this.case = testcase);
	}

	addTestStep(index: number): void {
		if (index >= 0) {
			this.case.steps.splice(index + 1, 0, new TestStep());
		} else {
			this.case.steps = [new TestStep()];
		}
		this.testcaseService.update(this.case);
	}

	deleteTestStep(index: number): void {
		this.case.steps.splice(index, 1);
		this.testcaseService.update(this.case);
	}

	addAssertion(index: number): void {
		if (index >= 0) {
			this.case.assertions.splice(index + 1, 0, new TestStep());
		} else {
			this.case.assertions = [new TestStep()];
		}
		this.testcaseService.update(this.case);
	}

	deleteAssertion(index: number): void {
		this.case.assertions.splice(index, 1);
		this.testcaseService.update(this.case);
	}
}