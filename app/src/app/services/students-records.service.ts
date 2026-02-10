import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentRecords } from "../state/students-records";

@Injectable()
export class StudentsRecordsService {
    constructor(private http: HttpClient) {}
    getStudentsRecords() {
        return this.http.get<StudentRecords[]>('https://jsonplaceholder.typicode.com/users')
    }
}