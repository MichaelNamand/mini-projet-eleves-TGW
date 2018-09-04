import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Student} from '../../../_models/Student';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentChecked {


    students: Student[] = [];

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getAllStudents().subscribe(
            s => {
                this.students = s;
            }
        );
    }

    ngAfterContentChecked(): void {
    }
}
