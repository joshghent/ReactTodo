Task = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired,
    showPrivateButton: React.PropTypes.bool.isRequired
  },
 
  toggleChecked() {
    Meteor.call('setChecked', this.props.task._id, !this.props.task.checked);
  },
 
  deleteThisTask() {
    Meteor.call('removeTask', this.props.task._id);
  },
 
  render() {
    const taskClassName = this.props.task.checked ? "checked" : "";
 
    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask}>
          &#x2716;
        </button>
 
        <input
          type="checkbox"
          readOnly={true}
          checked={this.props.task.checked}
          onClick={this.toggleChecked} />
 
        <span className="text">
            {this.props.task.text}
        </span>
      </li>
    );
  }
});