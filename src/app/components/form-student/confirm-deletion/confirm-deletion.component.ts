import {Component, Inject, Input, OnInit} from '@angular/core';
import {Student} from '../../../../_models/Student';
import {ApiService} from '../../../api.service';
import {MAT_DIALOG_DATA, MatDialog, MatSnackBar} from '@angular/material';
import {StudentService} from '../../students-table/student.service';

@Component({
  selector: 'app-confirm-deletion',
  templateUrl: './confirm-deletion.component.html',
  styleUrls: ['./confirm-deletion.component.css']
})
export class ConfirmDeletionComponent implements OnInit {

  @Input() student: Student;

  constructor(private api: ApiService, private dialog: MatDialog, public snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: Student, private studentService: StudentService) {
        this.student = data;
    }
  ngOnInit() {
  }
  delete() {
    this.api.deleteStudentById(this.student.id).subscribe(
        r => {
          this.dialog.closeAll();
          this.snackBar.open('L\'étudiant a bien été supprimé', 'Fermer');
          this.studentService.refresh.emit();
        }
    );
  }

}
