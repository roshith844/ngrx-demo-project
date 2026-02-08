import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-students-table',
  imports: [MatTableModule],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css',
})
export class StudentsTable {
  displayedColumns: string[] = ['name', 'city', 'country', 'subject'];
  dataSource = [];
}





