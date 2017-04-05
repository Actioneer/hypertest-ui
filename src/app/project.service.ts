import { Injectable } 			from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project }				from './project';

@Injectable()
export class ProjectService {

	private projectsUrl = 'http://tcp-172_23_0_4-8000.endpoints.us2.peragro.org/projects/';
	private headers = new Headers({'Content-Type': 'application/json'});

	private authenticationHeaders = new Headers({'Authorization' : 'Token ' + 'ed670b69b177fc0e72d7029bc8bf39abb0a79713'});

	constructor(
		private http: Http
	) {}

	getProjects(): Promise<Project[]> {
		return this.http.get(this.projectsUrl, {headers: this.authenticationHeaders})
			.toPromise()
			.then(response => response.json().results as Project[])
			.catch(this.handleError);
	}


	get(id: number) : Promise<Project> {
		const url = `${this.projectsUrl}${id}/`;
		return this.http.get(url, {headers: this.authenticationHeaders})
					.toPromise()
					.then(response => response.json() as Project)
					.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}
}