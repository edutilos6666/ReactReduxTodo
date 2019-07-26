import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import {actions} from '../../Redux/index';
import {connect, useDispatch} from 'react-redux';


const mapDispatchToProps = dispatch => ({
    onToggleTodoActivated: (id) => dispatch(actions.Todo.toggleTodo(id))
});


class TodoItem extends Component {
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



connect(
    null,
    mapDispatchToProps
)(TodoItem);

export default function TodoItemFn(props) {
    const dispatch = useDispatch();
    const handleChange = (e) => dispatch(actions.Todo.toggleTodo(props.todo.id));

    return (
        <li>
            <div className="view">
                <input className="toggle" type="checkbox" checked={props.todo.done}
                    onChange={handleChange}
                />
                <label>{props.todo.title}</label>
            </div>
            <input className="edit" value="fdsfsd" readOnly />
        </li>
    );
}
TodoItemFn.propTypes = {
    todo: PropTypes.object.isRequired,
}