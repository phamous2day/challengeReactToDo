var TodoList = React.createClass({
  getInitialState: function() {
    return {
      newTaskDescription: '',

      //creating some placeholder info as  test
      tasks: [
        { id: 1, name: 'loadup furniture', complete: false},
        { id: 2, name: 'make todo list', complete: true }
      ],


      //using next helps increment id for next task
      nextId: 3
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <input type="text"
            placeholder="What to do?"
            value={this.state.newTaskDescription}

            //onChange as event listener for when task descriptions change
            onChange={this.changeTaskDescription}
            />
        </form>
        <ul>
          {this.state.tasks.map(function(task) {
            return (

            //think of key as hash tables/dictionary as a way to retrieve/organize information by id

            <li key={task.id} className={task.complete ? 'complete' : ''}>
              <input type="checkbox" checked={task.complete}
              onChange={this.completeTask.bind(this, task)}
              />
              {task.name}
            </li>
            );
          }.bind(this))}
        </ul>
      </div>
    );
  },
  changeTaskDescription: function(event) {
    this.setState({
      newTaskDescription: event.target.value
    });
  },


  addTask: function(event) {
  event.preventDefault();
    var newItem = {
      id: this.state.nextId,
      name: this.state.newTaskDescription, complete: false
    };
    this.setState({
      tasks: this.state.tasks.concat(newItem),
      nextId: this.state.nextId + 1,
      newTaskDescription: ''
    })
  },
  completeTask: function(task, event){
  task.complete = event.target.checked;
  this.setState({
  tasks: this.state.tasks
  });
  }
});

//Always going to need a render at the bottom, this is one of first components I should already have when project begins

ReactDOM.render(
  <TodoList/>,
  document.getElementById('content')
)
