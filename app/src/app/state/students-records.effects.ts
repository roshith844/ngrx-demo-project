import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { actionList, studentRecordsActions } from "./students-records.actions";
import { StudentsRecordsService } from "../services/students-records.service";

@Injectable()
export class StudentsRecordsEffects {
    constructor(private actions$: Actions, private studentsRecordsService: StudentsRecordsService) { }
    loadStudentsRecords$ = createEffect(() => this.actions$.pipe(
        ofType(studentRecordsActions.callStudentsRecord),
        exhaustMap(() => this.studentsRecordsService.getStudentsRecords().pipe(
            map(studentRecords => studentRecordsActions.callStudentsRecordSuccess({ students: studentRecords })),
            catchError(error => of(studentRecordsActions.callStudentsRecordFailure({ error: error.message })))
        ))

    ))
}