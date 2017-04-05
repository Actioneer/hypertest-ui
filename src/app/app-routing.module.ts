import { NgModule }				  from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { DashboardComponent }  	  from './dashboard.component';
import { ProjectDetailComponent } from './project-detail.component';
import { RequirementComponent }	  from './requirement.component';
import { TestCaseComponent } 	  from './test-case.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', 																component: DashboardComponent },
	{ path: 'projects/:projectId',														component: ProjectDetailComponent },
	{ path: 'projects/:projectId/requirements/:requirementId',							component: RequirementComponent },
	{ path: 'projects/:projectId/requirements/:requirementId/testcases/:testCaseId', 	component: TestCaseComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}