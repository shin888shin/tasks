import React from 'react';
import List from './list';
import CreateTask from './create-task'

const tasks = [
  {
  	task: 'feed cats',
  	isCompleted: false
  },
  {
  	task: 'wash dishes',
  	isCompleted: false
  }
]

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks
		}
	}
  render() {
  	return (
  		<div>
  		  <h1>Todos</h1>
  		  <CreateTask tasks={this.state.tasks} createTask={this.createTask.bind(this)} />
  		  <List 
  		    tasks={this.state.tasks} 
  		    toggleTask={this.toggleTask.bind(this)}
  		    saveTask={this.saveTask.bind(this)}
  		    deleteTask={this.deleteTask.bind(this)}
  		  />
  		</div>
  	);
  }
  toggleTask(task) {
    console.log("+++> app.js toggleTask 1: ", task);
    console.log("+++> app.js toggleTask 2: ", this.state);
    // Object.keys(this.state.tasks).forEach(function(key) {
    //   console.log(key + ' : ' + x[key]);
    // });

    for(var i = 0; i < this.state.tasks.length; i++) {
    	// console.log(this.state.tasks[i].task);
    	if (this.state.tasks[i].task === task) {
        this.state.tasks[i].isCompleted = !this.state.tasks[i].isCompleted;
    	}
    }
    this.setState({ tasks: this.state.tasks })
  }
  createTask(task) {
    this.state.tasks.push({
    	task,
    	isCompleted: false
    })
    this.setState({ tasks: this.state.tasks })
  }

  saveTask(oldTask, newTask){
    for(var i = 0; i < this.state.tasks.length; i++) {
    	if (this.state.tasks[i].task === oldTask) {
    	  this.state.tasks[i].task = newTask;
    	}
    }
  	this.setState({ tasks: this.state.tasks })
  }

  deleteTask(taskToDelete) {
  	const taskArray = [];

    for(var i = 0; i < this.state.tasks.length; i++) {
    	if (this.state.tasks[i].task === taskToDelete) {
    	} else {
    		taskArray.push(this.state.tasks[i]);
    	}
    }
  	this.setState({ tasks: taskArray });
  }
}