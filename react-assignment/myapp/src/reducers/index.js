import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectreducer from "./projectreducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
    errors: errorReducer,
    projects: projectreducer,
    projectDetails: taskReducer
})

export default rootReducer;