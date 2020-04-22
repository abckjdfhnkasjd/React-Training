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

    render() {
        let taskArray = this.state.taskList.map((task, index) => {
            return <Task task={task} index= {index} key = {index} deleteTask = {this.deleteTaskHandler.bind(this)}/>
        })
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <p> 
                                <a onClick={(event) => { event.preventDefault();this.renderTaskList('All')}}>
                                    All</a> | <a onClick={(event) => { event.preventDefault();this.renderTaskList('Completed')}}>
                                        Completed</a> | <a onClick={(event) => { event.preventDefault();this.renderTaskList('Active')}}>
                                            Active</a>
                            </p>
                        </div>
                        <div class="panel-body">
                            <ul className="list-group">
                                {taskArray}
                            </ul>
                        </div>
                        {/* <div class="panel-footer">Panel Footer</div> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default TaskList;
