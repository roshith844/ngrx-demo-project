import { createReducer, on } from "@ngrx/store";
import { StudentRecords } from "./students-records";

export const initState: ReadonlyArray<StudentRecords> = [{
  name: "",
   city: "",
   country: "",
   subject:  "",
   passportDeclaration: "",
   fitnessDeclaration: "",
   courseName:  "",
   date: "",
   state: "",
   subjects: "",
   street: "",
   email: "",
   phone: "",
   postalCode: ""
}];

export const studentsReducer = createReducer(initState
)



 