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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.projectsUrl = 'http://tcp-172_23_0_4-8000.endpoints.us2.peragro.org/projects/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.authenticationHeaders = new http_1.Headers({ 'Authorization': 'Token ' + 'ed670b69b177fc0e72d7029bc8bf39abb0a79713' });
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.projectsUrl, { headers: this.authenticationHeaders })
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    ProjectService.prototype.get = function (id) {
        var url = "" + this.projectsUrl + id + "/";
        return this.http.get(url, { headers: this.authenticationHeaders })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProjectService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map