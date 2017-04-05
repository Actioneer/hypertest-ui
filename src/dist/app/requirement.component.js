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
var requirement_service_1 = require("./requirement.service");
var test_case_service_1 = require("./test-case.service");
var RequirementComponent = (function () {
    function RequirementComponent(requirementService, testcaseService, route) {
        this.requirementService = requirementService;
        this.testcaseService = testcaseService;
        this.route = route;
        this.testcases = [];
    }
    RequirementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.requirementService.get(+params['requirementId']); })
            .subscribe(function (requirement) {
            _this.requirement = requirement;
            for (var _i = 0, _a = requirement.testcases; _i < _a.length; _i++) {
                var testcase = _a[_i];
                _this.testcaseService.get(testcase)
                    .then(function (testcase) { return _this.testcases.push(testcase); });
            }
        });
    };
    return RequirementComponent;
}());
RequirementComponent = __decorate([
    core_1.Component({
        selector: 'requirement',
        templateUrl: './requirement.component.html'
    }),
    __metadata("design:paramtypes", [requirement_service_1.RequirementService,
        test_case_service_1.TestCaseService,
        router_1.ActivatedRoute])
], RequirementComponent);
exports.RequirementComponent = RequirementComponent;
//# sourceMappingURL=requirement.component.js.map