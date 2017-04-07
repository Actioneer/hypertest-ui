import { Injectable } 			from '@angular/core';
import { Headers, Http } 	 	from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { TestCase }				from './test-case';

@Injectable()
export class TestCaseService {
	
	private testcasesUrl = 'http://tcp-172_23_0_4-8000.endpoints.us2.peragro.org/testcases/';
	private authenticationHeaders = new Headers({'Content-Type': 'application/json', 'Authorization' : 'Token ' + 'ed670b69b177fc0e72d7029bc8bf39abb0a79713'});

	constructor(private http: Http) {}

	get(id: number) : Promise<TestCase> {
		const url = `${this.testcasesUrl}${id}/`;
		return this.http.get(url, {headers: this.authenticationHeaders})
					.toPromise()
					.then(response => response.json() as TestCase)
					.catch(this.handleError);
	}

	create(testcaseName: string, requirementId: number): Promise<TestCase> {
		return this.http
				.post(this.testcasesUrl, JSON.stringify({name: testcaseName, requirement: requirementId}), {headers: this.authenticationHeaders})
				.toPromise()
				.then(response => response.json() as TestCase)
				.catch(this.handleError);
	}

	update(testCase : TestCase): Promise<TestCase> {
		const url = `${this.testcasesUrl}/${testCase.id}/`;
		return this.http
				.put(url, JSON.stringify(testCase), {headers : this.authenticationHeaders})
				.toPromise()
				.then(() => testCase)
				.catch(this.handleError);
	}

	delete(testcase: TestCase): Promise<void> {
		return this.http.delete(testcase.url, {headers : this.authenticationHeaders})
				.toPromise()
				.then(() => null)
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}
}

