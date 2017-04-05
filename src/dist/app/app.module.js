"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var material_design_lite_directive_1 = require("./material-design-lite.directive");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var projects_overview_component_1 = require("./projects-overview.component");
var project_detail_component_1 = require("./project-detail.component");
var requirement_component_1 = require("./requirement.component");
var test_step_component_1 = require("./test-step.component");
var test_case_component_1 = require("./test-case.component");
var donut_chart_component_1 = require("./donut-chart.component");
var test_case_service_1 = require("./test-case.service");
var project_service_1 = require("./project.service");
var requirement_service_1 = require("./requirement.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            //InMemoryWebApiModule.forRoot(InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            material_design_lite_directive_1.MDL,
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            projects_overview_component_1.ProjectsOverviewComponent,
            project_detail_component_1.ProjectDetailComponent,
            requirement_component_1.RequirementComponent,
            test_step_component_1.TestStepComponent,
            test_case_component_1.TestCaseComponent,
            donut_chart_component_1.DonutChartComponent
        ],
        providers: [
            test_case_service_1.TestCaseService,
            project_service_1.ProjectService,
            requirement_service_1.RequirementService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map