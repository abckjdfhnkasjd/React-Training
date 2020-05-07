import { GET_TASKS, ADD_TASK, DELETE_TASK, GET_TASK } from "../actions/types";

const initialState = {
    taskList: [],
    task: {}
}

export default function (state = initialState, action) {
    switch(action.type){
        case GET_TASKS : 
        return {
            ...state,
            taskList: action.payload
        }
        case ADD_TASK : 
        return {
            ...state,
            taskList: action.payload
        }
        case DELETE_TASK : {
            let tasks = [...state.taskList.taskList];
            tasks = tasks.filter((task) => {
                return (task.taskId !== action.payload)
            })
            console.log('on Action=', tasks);
            let taskList = {...state.taskList};
            taskList.taskList=tasks;
            return {
                ...state,
                taskList: taskList
            }
        }
        case GET_TASK : {
            // let task = [...state.task];
            // console.log('on Action=', tasks);
            // let taskList = {...state.taskList};
            // taskList.taskList=tasks;
            return {
                ...state,
                task: action.payload
            }
        }
        default: return state;
    }
}