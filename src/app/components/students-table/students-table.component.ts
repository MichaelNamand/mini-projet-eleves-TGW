import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import { StudentsTableDataSource } from './students-table-datasource';
import {Student} from '../../../_models/Student';
import {ModifyDialogComponent} from '../modify-dialog/modify-dialog.component';
import {StudentService} from './student.service';

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

    constructor(private dialog: MatDialog, private studentService: StudentService) {
    }

    openDialog(s: Student) {
            const dialogRef = this.dialog.open(ModifyDialogComponent, {
            width: '750px', data: s
        });

            dialogRef.afterClosed().subscribe(result => {
               this.studentService.refresh.emit();
            });
    }

    ngOnChanges() {
      this.dataSource = new StudentsTableDataSource(this.paginator, this.sort, this.students);
  }
}
