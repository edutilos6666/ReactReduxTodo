import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import {actions} from '../../Redux/index';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => ({
    onToggleTodoActivated: (id) => dispatch(actions.Todo.toggleTodo(id))
});


class TodoItem extends PureComponent {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        // dispatch
        onToggleTodoActivated: PropTypes.func.isRequired,
    }

    handleChange = (e) => {
        this.props.onToggleTodoActivated(this.props.todo.id)
    }
    render() {
        return (
         <li>
            <div className="view">
                <input className="toggle" type="checkbox" checked={this.props.todo.done}
                 onChange={this.handleChange}
                />
                <label>{this.props.todo.title}</label>
            </div>
            <input className="edit" value="fdsfsd" readOnly />
         </li>
        );
    }
}



export default connect(
    null,
    mapDispatchToProps
)(TodoItem);