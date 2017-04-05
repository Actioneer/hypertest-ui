import { TestStep } from "./test-step";

export class TestCase {
	id: number;
	name: string;
	url: string;
	description: string;
	steps: TestStep[];
	assertions: TestStep[];
}