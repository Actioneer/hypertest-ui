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
var DonutChartComponent = (function () {
    function DonutChartComponent() {
    }
    DonutChartComponent.prototype.ngOnInit = function () {
        var angle = this.percentage * 360 / 100;
        var angleInRadials = -angle * Math.PI / 180;
        var x = Math.sin(angleInRadials) * 0.5;
        var y = Math.cos(angleInRadials) * -0.5;
        var largeArcFlag = (angle < 180) ? 1 : 0;
        this.d = 'M0 0 v-0.5 A0.5 0.5 1 ' + largeArcFlag + ' 1 ' + x + ' ' + y + ' z';
        this.percentageColor = this.getPercentageColor();
    };
    DonutChartComponent.prototype.getPercentageColor = function () {
        if (this.percentage == 100) {
            return "green";
        }
        else {
            return "red";
        }
    };
    return DonutChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DonutChartComponent.prototype, "percentage", void 0);
DonutChartComponent = __decorate([
    core_1.Component({
        selector: 'donut-chart',
        templateUrl: './donut-chart.component.html'
    }),
    __metadata("design:paramtypes", [])
], DonutChartComponent);
exports.DonutChartComponent = DonutChartComponent;
//# sourceMappingURL=donut-chart.component.js.map