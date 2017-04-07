import { NgModule }      		from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule }   		from '@angular/forms';
import { RouterModule }  	 	from '@angular/router';
import { HttpModule }	 	 	from '@angular/http';

import { AppRoutingModule }  	from './app-routing.module';

import { MDL } 					from './material-design-lite.directive';

import { InMemoryWebApiModule } 	from 'angular-in-memory-web-api';
import { InMemoryDataService }  	from './in-memory-data.service';

import { AppComponent }  				from './app.component';
import { DashboardComponent }        from './dashboard.component';
import { ProjectsOverviewComponent }  	from './projects-overview.component';
import { ProjectDetailComponent }    from './project-detail.component';
import { RequirementComponent }    from './requirement.component';
import { TestStepComponent } 			from './test-step.component';
import { TestCaseComponent } 			from './test-case.component';
import { DonutChartComponent }    from './donut-chart.component';

import { FocussedInputComponent }  from './focussed-input.component';

import { TestCaseService }				from './test-case.service';
import { ProjectService }				  from './project.service';
import { RequirementService }     from './requirement.service';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	//InMemoryWebApiModule.forRoot(InMemoryDataService),
  	AppRoutingModule
  ],
  declarations: [ 
  	MDL,
  	AppComponent,
    DashboardComponent,
  	ProjectsOverviewComponent,
    ProjectDetailComponent,
  	RequirementComponent,
  	TestStepComponent,
  	TestCaseComponent,
    DonutChartComponent,

    FocussedInputComponent
  ],
  providers: [
  	TestCaseService,
  	ProjectService,
    RequirementService
  ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
