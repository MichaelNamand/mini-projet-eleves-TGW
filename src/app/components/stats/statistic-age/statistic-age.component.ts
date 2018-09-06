import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../api.service';
import {StudentService} from '../../students-table/student.service';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-statistic-age',
  templateUrl: './statistic-age.component.html',
  styleUrls: ['./statistic-age.component.css']
})
export class StatisticAgeComponent {

    dataFormation: any[]  = [];
    // options
    view = [450, 350];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Age';
    showYAxisLabel = true;
    yAxisLabel = 'Etudiants';

    colorScheme = {
        domain: ['#3f51b5']
    };


    single: any[];

    constructor(private api: ApiService, private studentService: StudentService) {
        this.getData();
        this.studentService.refresh.subscribe(() => {
            this.dataFormation = [];
            this.getData();
        });
    }

    calculateAge(birthday: string) { // birthday is a date
      const bDate = new Date(birthday);
        const ageDifMs = Date.now() - bDate.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getData() {
      this.dataFormation = [];
        this.api.getAllStudents().subscribe(
            s => {
                s = AppComponent.sortByProperty(s, 'birthday', 1);
                console.log(s);

                let name = this.calculateAge(s[0].birthday);
                let value = 1;
                for (let i = 0; i < s.length - 1; i++) {
                    if (this.calculateAge(s[i].birthday) !== this.calculateAge(s[i + 1].birthday)) {
                        this.dataFormation.push({
                            'name' : name + ' ans',
                            'value': value
                        });
                        name = this.calculateAge(s[i].birthday);
                        value = 1;
                    } else {
                        value++;
                    }
                    if (i == s.length - 2) {
                        this.dataFormation.push({
                            'name' : name + ' ans',
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
}
