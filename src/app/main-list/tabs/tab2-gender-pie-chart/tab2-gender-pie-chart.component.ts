import { Component, OnInit } from '@angular/core';
import { MainListService } from '../../main-list.service';
import { Subscription } from 'rxjs';
import { TabCalculationsService } from 'src/app/services/tab-calculations.service';

@Component({
  selector: 'app-tab2-gender-pie-chart',
  templateUrl: './tab2-gender-pie-chart.component.html',
  styleUrls: ['./tab2-gender-pie-chart.component.css'],
})
export class Tab2GenderPieChartComponent implements OnInit {
  dataSource: Object = {};
  characters;
  maleCharacters: number = 0;
  femaleCharacters: number = 0;
  otherCharacters: number = 0;
  genders: object;
  subscription: Subscription;
  constructor(
    private tabService: TabCalculationsService
  ) {}

  ngOnInit(): void {
    try {
      this.subscription = this.tabService.characterChanged.subscribe((code) => {
        if (code === 200) {
          this.genders = this.tabService.getAllGenders();
          this.maleCharacters = this.genders['male'];
          this.femaleCharacters = this.genders['female'];
          this.otherCharacters = this.genders['other'];
          this.pieChart();
        }
      });
    } catch (error) {
      console.log(
        '🚀 ~ Tab2GenderPieChartComponent ~ ngOnInit ~ error:',
        error
      );
    }
  }

  pieChart() {
    try {
      const chartData = [
        {
          label: 'Male',
          value: this.maleCharacters,
        },
        {
          label: 'Female',
          value: this.femaleCharacters,
        },
        {
          label: 'Other',
          value: this.otherCharacters,
        },
      ];
      const dataSource = {
        chart: {
          caption: 'Different genders of the Smurfs', //Set the chart caption
          theme: 'fusion', //Set the theme for your chart
          use3DLighting: '0',
          showPercentValues: '1',
          decimals: '1',
          useDataPlotColorForLabels: '1',
          paletteColors: '#4695D6,#f50388,#590266',
        },
        data: chartData,
      };
      this.dataSource = dataSource;
    } catch (error) {
      console.log(
        '🚀 ~ Tab2GenderPieChartComponent ~ pieChart ~ error:',
        error
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
