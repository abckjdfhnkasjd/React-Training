import { GET_TASKS, ADD_TASK, DELETE_TASK, GET_TASK } from "../actions/types";

const initialState = {
    project: {},
    taskList: [],
    task: {},
}

export default function (state = initialState, action) {
    switch(action.type){
        case GET_TASKS : {
            console.log('GET_TASKS=', action.payload.taskList)
            return {
                ...state,
                project: action.payload,
                taskList: action.payload.taskList
            }
        }
        case ADD_TASK : 
        return {
            ...state,
            taskList: action.payload
        }
        case DELETE_TASK : {
            let tasks = [...state.taskList];
            tasks = tasks.filter((task) => {
                return (task.taskId !== action.payload)
            })
            let taskList = {...state.taskList};
            taskList=tasks;
            return {
                ...state,
                taskList: taskList
            }
        }
        case GET_TASK : {
            return {
                ...state,
                task: action.payload
            }
        }
        default: return state;
    }
}