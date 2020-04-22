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
    render() {
        let taskArray = this.state.taskList.map((task, index) => {
            return <Task task={task} key = {index}/>
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
