import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'donut-chart',
  templateUrl:'./donut-chart.component.html'
})
export class DonutChartComponent implements OnInit {
  @Input()
  percentage: number;
  
  percentageColor: string;
  d: string;

  constructor(){}

  ngOnInit() {
    var angle = this.percentage * 360 / 100;
    var angleInRadials = -angle * Math.PI / 180;
    var x = Math.sin(angleInRadials) * 0.5;
    var y = Math.cos(angleInRadials) * -0.5;
    var largeArcFlag = (angle < 180) ? 1 : 0;
    
    this.d = 'M0 0 v-0.5 A0.5 0.5 1 ' + largeArcFlag + ' 1 ' +  x + ' ' +  y + ' z';
    this.percentageColor = this.getPercentageColor();
  }

  getPercentageColor() : string {
    if (this.percentage == 100) {
      return "green";
    } else {
      return "red";
    }
  }
}