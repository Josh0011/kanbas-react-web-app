import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import axios from "axios";
const initialState = {
    assignments: assignments || [],
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignments }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignments.title,
                course: assignments.course,
                points: assignments.points,
                available: assignments.available,
                due: assignments.due,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== assignmentID);
        },
        updateAssignment: (state, { payload: assignments }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignments._id ? assignments : m
            ) as any;
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
        setAssignment: (state, action) => {
            state.assignments = action.payload;
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;

