import { Component, OnInit } from '@angular/core';
import { MainListService } from '../../main-list.service';
import { Subscription } from 'rxjs';
import { TabCalculationsService } from 'src/app/services/tab-calculations.service';
import { LoggingService } from 'src/app/services/logging.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-tab2-gender-pie-chart',
  templateUrl: './tab2-gender-pie-chart.component.html',
  styleUrls: ['./tab2-gender-pie-chart.component.css'],
})
export class Tab2GenderPieChartComponent implements OnInit {
  public className = 'Tab2GenderPieChartComponent';
  public alive: boolean = true;

  dataSource: Object = {};
  characters;
  maleCharacters: number = 0;
  femaleCharacters: number = 0;
  otherCharacters: number = 0;
  genders: object;
  constructor(
    private tabService: TabCalculationsService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    let methodName = 'ngOnInit';
    try {
      this.tabService.characterChanged
        .pipe(takeWhile(() => this.alive))
        .subscribe((code) => {
          if (code === 200) {
            this.genders = this.tabService.getAllGenders();
            this.maleCharacters = this.genders['male'];
            this.femaleCharacters = this.genders['female'];
            this.otherCharacters = this.genders['other'];
            this.pieChart();
          }
        });
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  pieChart() {
    let methodName = 'pieChart';
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
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  ngOnDestroy() {
    let methodName = 'ngOnDestroy';
    try {
      this.alive = false;
      // this.listService.resetValues();
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
}
