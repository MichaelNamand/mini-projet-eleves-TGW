import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../../_models/Student';
import {ApiService} from '../../api.service';
import {MatDialog, MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-form-student',
    templateUrl: './form-student.component.html',
    styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnChanges {
    signupForm: FormGroup;
    student: Student = new Student();
    maxDate = new Date();

    @Input() studentPatch: Student;
    @Input() post: boolean;

    constructor(private api: ApiService, public snackBar: MatSnackBar, private dialog: MatDialog) {
        this.setFormControl();
    }

    ngOnChanges() {
        if (!this.post && this.studentPatch) {
            this.student = JSON.parse(JSON.stringify(this.studentPatch));
        }
    }

    resetFormControl() {
        this.signupForm.controls['email'].setErrors(null);
        this.signupForm.controls['firstName'].setErrors(null);
        this.signupForm.controls['lastName'].setErrors(null);
        this.signupForm.controls['formation'].setErrors(null);
        this.signupForm.controls['birthday'].setErrors(null);
    }

    setFormControl() {
        this.signupForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            formation: new FormControl('', Validators.required),
            birthday: new FormControl('', Validators.required)
        });
    }

    postStudent() {
        if (this.post) {
            this.api.createStudent(this.student).subscribe(
                r => {
                    const fname = this.student.first_name;
                    const lname = this.student.last_name;
                    this.signupForm.reset();
                    this.resetFormControl();
                    this.snackBar.open('L\'élève ' + fname + ' ' + lname + ' a bien été créé', 'Fermer', {
                        duration: 10000,
                    });
                },
                e => console.log(e)
            );
        } else {
            this.api.updateStudent(this.student).subscribe(
                r => {
                    const fname = this.student.first_name;
                    const lname = this.student.last_name;
                    this.dialog.closeAll();
                    this.snackBar.open('L\'élève ' + fname + ' ' + lname + ' a bien été modifié', 'Fermer', {
                        duration: 10000,
                    });
                },
                e => console.log(e)
            );
        }
    }
}
