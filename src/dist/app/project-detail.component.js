"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var project_service_1 = require("./project.service");
var requirement_service_1 = require("./requirement.service");
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(projectService, requirementsService, route) {
        this.projectService = projectService;
        this.requirementsService = requirementsService;
        this.route = route;
        this.requirements = [];
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.projectService.get(+params['projectId']); })
            .subscribe(function (project) {
            _this.project = project;
            for (var _i = 0, _a = project.requirements; _i < _a.length; _i++) {
                var requirements = _a[_i];
                _this.requirementsService.get(requirements)
                    .then(function (requirement) { return _this.requirements.push(requirement); });
            }
        });
    };
    return ProjectDetailComponent;
}());
ProjectDetailComponent = __decorate([
    core_1.Component({
        selector: 'project-detail',
        templateUrl: './project-detail.component.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        requirement_service_1.RequirementService,
        router_1.ActivatedRoute])
], ProjectDetailComponent);
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map