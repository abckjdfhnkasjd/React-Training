import axios from 'axios';

import { GET_TASKS, ADD_TASK, DELETE_TASK, GET_TASK } from "./types";


export const getProjectTasks = (id) => async (dispatch) => {
    const response = await axios.get(`http://localhost:8080/project/${id}/tasks`);
    dispatch({
        type: GET_TASKS,
        payload: response.data
    })
}

export const addOrUpdateTask = (projectId, task, history) => async (dispatch) => {
    const response = await axios.post(`http://localhost:8080/project/${projectId}/task`, task);
    history.push(`/projectBoard/${projectId}`);
    dispatch({
        type: ADD_TASK,
        payload: response.data
    })
}

export const deleteTask = (taskId) => async (dispatch) => {
    const response = await axios.delete(`http://localhost:8080/task/${taskId}`);
    // history.push(`/projectBoard/${projectId}`);
    dispatch({
        type: DELETE_TASK,
        payload: taskId
    })
}

export const getTask = (taskId) => async (dispatch) => {
    const response = await axios.get(`http://localhost:8080/task/${taskId}`);
    // history.push(`/projectBoard/${projectId}`);
    dispatch({
        type: GET_TASK,
        payload: response.data
    })
}