import { createReducer, on } from "@ngrx/store";
import { StudentRecords } from "./students-records";

export const initState: ReadonlyArray<StudentRecords> = [{
  name: "example name",
   city: "example city",
   country: "example country",
   subject:  "example subject",
   passportDeclaration: "example passport declaration",
   fitnessDeclaration: "example fitness declaration",
   courseName:  "example course name",
   date: "example date",
   state: "example state",
   subjects: "example subjects",
   street: "example street",
   email: "example email",
   phone: "example phone",
   postalCode: "123456"
}];

export const studentsReducer = createReducer(initState)



 