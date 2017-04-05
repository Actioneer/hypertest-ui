import { Injectable } 					from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Requirement }					from './requirement';

@Injectable()
export class RequirementService {

	private requirementUrl = 'http://tcp-172_23_0_4-8000.endpoints.us2.peragro.org/requirements/';
	private headers = new Headers({'Content-Type': 'application/json'});

	private authenticationHeaders = new Headers({'Authorization' : 'Token ' + 'ed670b69b177fc0e72d7029bc8bf39abb0a79713'});

	constructor(
		private http: Http
	) {}

	getRequirements(): Promise<Requirement[]> {
		return this.http.get(this.requirementUrl, {headers: this.authenticationHeaders})
			.toPromise()
			.then(response => response.json().results as Requirement[])
			.catch(this.handleError);
	}


	get(id: number) : Promise<Requirement> {
		const url = `${this.requirementUrl}${id}/`;
		return this.http.get(url, {headers: this.authenticationHeaders})
					.toPromise()
					.then(response => response.json() as Requirement)
					.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}
}