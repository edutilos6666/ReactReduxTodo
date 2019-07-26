
import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import { selectors } from '../../Redux';
import {connect} from 'react-redux';


// export default function TodoList() {
//     const allTodos = useSelector(selectors.Todo.allTodos);
//     return (
//         <ul className="todo-list">
//             {allTodos.map((todo, i)=> 
//               <TodoItem todo={todo} key={todo.id} />    
//             )}
//         </ul>
//     )
// }


const mapStateToProps = state => ({
    showAll: selectors.Filter.showAll(state), 
    allTodos: selectors.Todo.allTodos(state)
});

class TodoList extends PureComponent {
    static propTypes = {
        // store
        allTodos: PropTypes.array.isRequired,
        showAll: PropTypes.bool.isRequired
    };
    render() {
        return (
            <ul className="todo-list">
                {this.props.allTodos.map((one,index)=> {
                    if(this.props.showAll) {
                        return <TodoItem todo={one} key={index}></TodoItem>
                    } else {
                        if(!one.done) {
                            return <TodoItem todo={one} key={index}></TodoItem>
                        }
                    }
                    
                })}
            </ul>
        );
    }
}


export default connect(
    mapStateToProps,
    null
)(TodoList);