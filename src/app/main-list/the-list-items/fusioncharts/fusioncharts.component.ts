import { Component, OnInit } from '@angular/core';
import { MainListService } from '../../main-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fusioncharts',
  templateUrl: './fusioncharts.component.html',
  styleUrls: ['./fusioncharts.component.css'],
})
export class FusionchartsComponent implements OnInit {
  dataSource: Object;
  characters;
  maleCharacters: number = 0;
  femaleCharacters: number = 0;
  otherCharacters: number = 0;
  subscription: Subscription;
  constructor(private listService: MainListService) {}

  ngOnInit(): void {
    if (!this.listService.isFetched) {
      this.listService.setItems();
    }
    this.subscription = this.listService.itemsChanged.subscribe((code) => {
      if (code === 200) {
        this.characters = this.listService.getItems();

        for (const character of this.characters) {
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
            // subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
            //xAxisName: "Gender/Sex", //Set the x-axis name
            //yAxisName: "Number of Smurfs", //Set the y-axis name
            // numberSuffix: "K",
            theme: 'fusion', //Set the theme for your chart
            // xAxisMaxValue: 20, // Set your maximum X-axis value
            // xAxisMinValue: 0,  // Set your minimum X-axis value
            // setadaptiveymin: "0"

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
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
