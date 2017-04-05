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
var test_step_1 = require("./test-step");
var test_case_service_1 = require("./test-case.service");
var TestCaseComponent = (function () {
    function TestCaseComponent(testcaseService, route) {
        this.testcaseService = testcaseService;
        this.route = route;
    }
    TestCaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.testcaseService.get(+params['testCaseId']); })
            .subscribe(function (testcase) { return _this.case = testcase; });
    };
    TestCaseComponent.prototype.addTestStep = function (index) {
        console.log(index);
        if (index >= 0) {
            this.case.steps.splice(index + 1, 0, new test_step_1.TestStep());
        }
        else {
            this.case.steps = [new test_step_1.TestStep()];
        }
        this.testcaseService.update(this.case);
    };
    TestCaseComponent.prototype.deleteTestStep = function (index) {
        this.case.steps.splice(index, 1);
        this.testcaseService.update(this.case);
    };
    TestCaseComponent.prototype.addAssertion = function (index) {
        if (index >= 0) {
            this.case.assertions.splice(index + 1, 0, new test_step_1.TestStep());
        }
        else {
            this.case.assertions = [new test_step_1.TestStep()];
        }
        this.testcaseService.update(this.case);
    };
    TestCaseComponent.prototype.deleteAssertion = function (index) {
        this.case.assertions.splice(index, 1);
        this.testcaseService.update(this.case);
    };
    return TestCaseComponent;
}());
TestCaseComponent = __decorate([
    core_1.Component({
        selector: 'test-case',
        templateUrl: './test-case.component.html'
    }),
    __metadata("design:paramtypes", [test_case_service_1.TestCaseService,
        router_1.ActivatedRoute])
], TestCaseComponent);
exports.TestCaseComponent = TestCaseComponent;
//# sourceMappingURL=test-case.component.js.map