import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Student} from '../_models/Student';
import {HttpClient} from '@angular/common/http';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient
    ) {
    }

    // API: GET /students
    public getAllStudents() {
       return this.http.get<Student[]>(API_URL + 'students');
    }

    // API: POST /students
    public createStudent(student: Student) {
        return this.http.post<Student>(API_URL + 'students', student);
    }

    // API: GET /students/:id
    public getStudentById(studentId: number) {
        return this.http.get<Student>(API_URL + 'students/' + studentId);
    }

    // API: PUT /students/:id
    public updateStudent(student: Student) {
        return this.http.put<Student>(API_URL + 'students/' + student.id, student);
    }

    // DELETE /students/:id
    public deleteStudentById(studentId: number) {
        // will use this.http.delete()
    }
}
