import React from 'react';
import Task from './Task';

class TaskList extends React.Component{
    state = {
        taskList: [
            {name: 'Task 1', status: 'Active', completed: false},
            {name: 'Task 2', status: 'Completed', completed: true},
            {name: 'Task 3', status: 'Active', completed: false}
        ],
        tempTaskList: []
    }
    

    deleteTaskHandler = (index) => {
        console.log('index:'+ index);
        const taskList = this.state.taskList;
        taskList.splice(index, 1);
        this.setState({
            taskList
        })
        console.log('task:'+ this.state.taskList);
    }
    
    renderTaskList = (param) => {
        console.log(this.state.taskList);
        let tempList = (this.state.tempTaskList.length === 0) ? this.state.taskList : this.state.tempTaskList;
        let filteredTask = tempList.filter((task) => {
            return (task.status === param);
        });
        if(param === 'All'){
            filteredTask = tempList;
        }
        this.setState({
            taskList: filteredTask,
            tempTaskList: tempList
        })
    }

    addTask = () => {
        let taskText = this.newtask.value
        const newTask = {
            name: taskText,
            status: 'Active',
            completed: false

        }
        const taskList = this.state.taskList;
        taskList.push(newTask);
        this.setState({
            taskList
        })
    }

    editTask = (index, newTask) => {
        var {taskList} = this.state;
        var task = taskList[index];
        task.name = newTask;
        this.setState({
            taskList 
        })
    }

    
    taskCompleted = (isChekced, index) => {
        console.log(isChekced, index);
        let {taskList} = this.state;
        let task = taskList[index];
        task.completed = isChekced;
        task.status="Completed";
        this.setState({
            taskList
        })
    }

    render() {
        let taskArray = this.state.taskList.map((task, index) => {
            return <Task task={task} index= {index} key = {index} 
                        deleteTask = {this.deleteTaskHandler.bind(this)}
                        editTask = {this.editTask.bind(this)}
                        taskCompleted = {this.taskCompleted.bind(this)}/>
        })
        return (
            <div>
            <div className="row text-center">
                <div className="col-xs-12">
                <div className="input-group">
                    <input className="form-control" placeholder="Add todo ..." ref={(newtask) => {this.newtask = newtask}}/>
                    <span className="input-group-btn">
                        <button className="btn btn-info" onClick= {this.addTask}>Submit</button>
                    </span>
                </div>
                </div>
            </div><br/><br/>
            <div className="row">
                <div className="col-xs-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <p> 
                                <a onClick={(event) => { event.preventDefault();this.renderTaskList('All')}} >All</a>|
                                <a onClick={(event) => { event.preventDefault();this.renderTaskList('Completed')}}>Completed</a>|
                                <a onClick={(event) => { event.preventDefault();this.renderTaskList('Active')}}>Active</a>
                            </p>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {taskArray}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default TaskList;
