import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    listStudent: [],
}

const studentReducer = createSlice({
    name: "studentReducer",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            const index = state.listStudent.findIndex(student => student.studentId === action.payload.studentId)
            if (index === -1) {
                state.listStudent.push(action.payload)
            } else {
                state.listStudent[index] = {...state.listStudent[index],...action.payload }
            }
            // state.listStudent.push(action.payload)
        },
        deleteStudent: (state, action) => {
            const index = state.listStudent.findIndex(student => student.studentId === action.payload.studentId)
            if (index!== -1) {
                state.listStudent.splice(index, 1)
            }
        },
    }
})

export const { addStudent, deleteStudent } = studentReducer.actions;

export default studentReducer.reducer;