import {Component, Inject, OnChanges} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Student} from '../../../_models/Student';

@Component({
  selector: 'app-modify-dialog',
  templateUrl: './modify-dialog.component.html',
  styleUrls: ['./modify-dialog.component.css']
})
export class ModifyDialogComponent implements OnChanges {
    student: Student;
    constructor(@Inject(MAT_DIALOG_DATA) public data: Student) {
      console.log(data);
      this.student = data;
    }

  ngOnChanges() {
  }

}
