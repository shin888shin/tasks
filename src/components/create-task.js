import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }
  renderError() {
    if (!this.state.error) { return null; }

    return <div style={{ color: 'red' }}>{this.state.error}</div>;
  }
  render() {
  	return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Enter task." ref="createInput" />
        <button>Create</button>
        {this.renderError()}
      </form>
  	);
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }

  matchingItem(task, collection) {
    for(var i = 0; i < collection.length; i++) {
      console.log(collection[i].task);
      if (collection[i].task === task) {
        return true;
      }
    }
    return false;
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter a task.';
    } else if (this.matchingItem(task, this.props.tasks)) {
      return 'Task already exists.';
    } else {
      return null;
    }
  }
}