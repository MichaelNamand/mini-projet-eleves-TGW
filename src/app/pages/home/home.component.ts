import {Component, OnInit} from '@angular/core';
import {Student} from '../../../_models/Student';
import {ApiService} from '../../api.service';
import {MatTabChangeEvent} from '@angular/material';
import {AppComponent} from '../../app.component';
import {StudentService} from '../../components/students-table/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    students: Student[] = [];
    studentsTemp: Student[] = [];

    constructor(private api: ApiService, private studentService: StudentService) {
        studentService.refresh.subscribe(() => this.getStudents());
    }
    getStudents() {
        this.api.getAllStudents().subscribe(
            s => {
                this.students = s;
                this.studentsTemp = s;
            }
        );
    }
    ngOnInit() {
        this.getStudents();
    }

    search(value: string) {
        console.log(value);
        this.students = AppComponent.searchItemsFromArray(this.studentsTemp, value,
            ['first_name', value, 'last_name', 'formation', 'email']);
    }

    onLinkClick(event: MatTabChangeEvent) {
        if (event.tab.textLabel === 'Mes étudiants') {
            console.log('here');
            this.getStudents();
        }
        if (event.tab.textLabel === 'Statistiques') {
            this.studentService.refresh.emit();
        }
    }
}
