import { createSelector } from "@ngrx/store";
import { StudentRecords } from "./students-records";

export interface AppState {
  students: StudentRecords[];
}

export const selectFeature = (state: AppState)=> state.students;
export const selectAllStudents = createSelector(
    selectFeature, (state: StudentRecords[]) => state);