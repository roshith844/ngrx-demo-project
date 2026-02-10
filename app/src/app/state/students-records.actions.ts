import { createAction, props } from "@ngrx/store";
import { StudentRecords } from "./students-records";

export const actionList = {
    callStudentsRecordApi: '[Students Record] Call Students Record',
    callStudentsRecordSuccess: '[Students Record] Call Students Record Success',
    callStudentsRecordFailure: '[Students Record] Call Students Record Failure',
}

export const studentRecordsActions = {
    callStudentsRecord: createAction(actionList.callStudentsRecordApi),
    callStudentsRecordSuccess: createAction(actionList.callStudentsRecordSuccess, props<{ students: StudentRecords[] }>()),
    callStudentsRecordFailure: createAction(actionList.callStudentsRecordFailure, props<{ error: string }>())
}