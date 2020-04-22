import React from 'react';
import './App.css'

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    toggleTask = () => {
        const {editMode} = this.state;
        this.setState({
            editMode: !editMode
        })
    }

    updateTask = (event) => {
        event.preventDefault();
        this.props.editTask(this.props.index, this.input.value);
        this.toggleTask();
    }

    renderForm = () => {
        return (
            <form onSubmit={this.updateTask}>
                <input 
                    type="text" 
                    className="form-control"
                    defaultValue={this.props.task.name} 
                    ref = {(value) => { this.input = value}}
                    onChange={this.props.updateTask}/>
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="submit" className="btn btn-danger">Cancel</button>
            </form>
        );
    }

    renderTask = () => {
        var inputProps = {
          };
        return (
            <li
                className={this.props.task.completed? 'list-group-item completed': 'list-group-item'}>
                    <input 
                        checked = {this.props.task.completed ? 'checked': ''}
                        type="checkbox" 
                        onChange={(event) => {this.props.taskCompleted(event.target.checked, this.props.index)}}
                        />
                    {this.props.task.name}
                    <button 
                        className="btn btn-info glyphicon glyphicon-trash pull-right" 
                        onClick={(event) => {event.stopPropagation();this.props.deleteTask(this.props.index)}}></button>
                    <button 
                        className="btn btn-info glyphicon glyphicon-pencil pull-right" 
                        onClick={(event) => {event.stopPropagation();this.toggleTask()}}></button>
            </li>
        );
    }

    render(){
        const editMode = this.state.editMode;
        return (
            <section>
                {
                    editMode ? this.renderForm() : this.renderTask()
                }
            </section>
        );
    }
}

export default Task;