import React from 'react';
import Task from './Task';

class TaskList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            taskList: [
                {name: 'Task 1', status: 'In Progress', completed: false},
                {name: 'Task 2', status: 'Completed', completed: true},
                {name: 'Task 3', status: 'In Progress', completed: false}
            ]
        }
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
    
    render() {
        let taskArray = this.state.taskList.map((task, index) => {
            return <Task task={task} index= {index} key = {index} deleteTask = {this.deleteTaskHandler.bind(this)}/>
        })
        return (
            <div className="row">
                <div className="col-xs-12">
                    <ul className="list-group">
                        {taskArray}
                    </ul>
                </div>
            </div>
        );
    }
}
export default TaskList;
