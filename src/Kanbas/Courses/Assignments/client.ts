import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return data;
};

export const deleteAssignment = async (id: string) => {
    const { data } = await axios.delete(`${ASSIGNMENT_API}/${id}`);
    return data;
};

export const findAssignmentForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${ASSIGNMENT_API}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(
        `${ASSIGNMENT_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};