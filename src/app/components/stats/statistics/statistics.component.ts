import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {AppComponent} from '../../app.component';
import {StudentService} from '../students-table/student.service';
@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
    dataFormation: any[]  = [];
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Formation';
    showYAxisLabel = true;
    yAxisLabel = 'Etudiants';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    single: any[];

    constructor(private api: ApiService, private studentService: StudentService) {
        this.getData();
        this.studentService.refresh.subscribe(() => {
            this.dataFormation = [];
            this.getData()
        });
    }

    getData() {
        this.api.getAllStudents().subscribe(
            s => {
                s = AppComponent.sortByProperty(s, 'formation', 1);
                console.log(s);

                let name = s[0].formation;
                let value = 1;
                for (let i = 0; i < s.length - 1; i++) {
                    if (s[i].formation !== s[i + 1].formation) {
                        this.dataFormation.push({
                            'name' : name,
                            'value': value
                        });
                        name = s[i + 1].formation;
                        value = 1;
                    } else {
                        value++;
                    }
                    if (i == s.length - 2) {
                        this.dataFormation.push({
                            'name' : name,
                            'value': value
                        });
                    }
                }
                Object.assign(this, this.dataFormation);
                console.log(this.dataFormation);
            }
        );
    }

    onSelect(event) {
    }
    ngOnInit() {
    }

}
