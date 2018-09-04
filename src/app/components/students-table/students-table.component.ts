import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { StudentsTableDataSource } from './students-table-datasource';
import {Student} from '../../../_models/Student';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnChanges {
  @Input() students: Student[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: StudentsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'first_name', 'last_name', 'birthday', 'formation', 'email'];

    constructor() {
    }


    ngOnChanges() {
      this.dataSource = new StudentsTableDataSource(this.paginator, this.sort, this.students);
  }
}
