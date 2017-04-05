import { Component, Input } from "@angular/core";

import { TestStep } from "./test-step";
import { TestCaseService } 			from './test-case.service';

@Component({
	selector: 'test-step',
	templateUrl: './test-step.component.html'
})

export class TestStepComponent {
	@Input()
	step : TestStep;

	constructor(
		private testcaseService: TestCaseService
	) {}
}