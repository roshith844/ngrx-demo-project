import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { AppState, selectAllStudents } from '../state/students.selector';
import { StudentRecords } from '../state/students-records';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-students-table',
  imports: [MatTableModule, AsyncPipe],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css',
})
export class StudentsTable {
  displayedColumns: string[] = ['name', 'city', 'country', 'subject'];
  dataSource$!: Observable<StudentRecords[]>;
  store = inject(Store<AppState>)
  ngOnInit(): void {
    this.dataSource$ = this.store.select(selectAllStudents)
  }

}





