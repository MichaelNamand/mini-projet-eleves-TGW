import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {AppComponent} from '../../app.component';
@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
    data: any[]  = [
    ];
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    single: any[];

    constructor(private api: ApiService) {
        this.api.getAllStudents().subscribe(
            s => {
                s = AppComponent.sortByProperty(s, 'formation', 1);
                let j = 0;
                while (j < s.length - 1) {
                    const name = s[j].formation;
                    let value = 1;
                    for (let i = 0; i < s.length; i++) {
                        if (s[i].formation === s[j].formation && j !== i) {
                            value ++;
                        }
                    }
                    this.data.push({
                        'name': name,
                        'value': value
                    });

                    j++;
                }
            }
        );
    }

    onSelect(event) {
    }
    ngOnInit() {
    }

}
