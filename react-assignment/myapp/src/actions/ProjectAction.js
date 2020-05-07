import axios from "axios"
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";

export const createProject = (project, history) => async (dispatch) => {
    axios.post('http://localhost:8080/addProject',project)
      .then(response => { history.push("/dashboard"); return response.data})
      .catch(error => {
          if (error.response) {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            })
        }
      });
}

export const getProjects = () => async (dispatch) => {
    const response = await axios.get("http://localhost:8080/allProjects");
    dispatch({
        type: GET_PROJECTS,
        payload: response.data
    })

}

export const getProject = (id, history) => async (dispatch) => {
    const response = await axios.get(`http://localhost:8080/project/${id}`);
    dispatch({
        type: GET_PROJECT,
        payload: response.data
    })
}

export const deleteProject = (id, history) => async (dispatch) => {
    const response = await axios.delete(`http://localhost:8080/project/${id}`);
    dispatch({
        type: DELETE_PROJECT,
        payload: id
    })
}