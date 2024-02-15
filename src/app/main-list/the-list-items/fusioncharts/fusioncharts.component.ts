import { Component, OnInit } from '@angular/core';
import { MainListService } from '../../main-list.service';
import { takeWhile } from 'rxjs/operators';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-fusioncharts',
  templateUrl: './fusioncharts.component.html',
  styleUrls: ['./fusioncharts.component.css'],
})
export class FusionchartsComponent implements OnInit {
  public className = 'FusionchartsComponent';
  public alive: boolean = true;
  dataSource: Object;
  characters;
  maleCharacters: number = 0;
  femaleCharacters: number = 0;
  otherCharacters: number = 0;
  constructor(private listService: MainListService, private loggingService: LoggingService) {}

  ngOnInit(): void {
    let methodName = 'ngOnInit';
    try {
          if (!this.listService.isFetched) {
      this.listService.setItems();
    }
     this.listService.itemsChanged.pipe(takeWhile(() => this.alive)).subscribe((code) => {
      if (code === 200) {
        this.characters = this.listService.getItems();

        for (const character of this.characters) { // this makes all the calculations regarding gender
          // Check if the character is male
          if (character.sex.toLowerCase() === 'male') {
            // Add the male character to the maleCharacters array
            this.maleCharacters++;
          }
          if (character.sex.toLowerCase() === 'female') {
            // Add the male character to the maleCharacters array
            this.femaleCharacters++;
          }
          if (character.sex.toLowerCase() === 'other') {
            // Add the male character to the maleCharacters array
            this.otherCharacters++;
          }
        }
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
          },
          // Chart Data - from step 2
          data: chartData,
        };
        this.dataSource = dataSource;
      }
    });
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
