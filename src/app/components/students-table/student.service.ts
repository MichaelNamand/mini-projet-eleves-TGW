import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class StudentService {
    refresh: EventEmitter<any> = new EventEmitter();
}