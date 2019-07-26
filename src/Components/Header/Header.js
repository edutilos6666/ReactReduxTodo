import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import {actions} from '../../Redux/index';
import {connect} from 'react-redux';

// var title  = "";
// export default function Header(props) {
//     const dispatch = useDispatch();
//     const onAddTodoActivated = (title)=> dispatch(actions.Todo.addTodo(title));
//     const handleSubmit = (e)=> {
//         e.preventDefault();
//         title = e.target.value;
//         onAddTodoActivated(title);
//     }
//     return (
//         <header className="header">
//             <h1>{props.title}</h1>
//             <form onSubmit={handleSubmit}>
//                 <input className="new-todo"
//                 placeholder={props.placeholder} 
//                 value={title}
//                 />
//             </form>
//         </header>
//     );
// }

const mapDispatchToProps = dispatch => ({
    onAddTodoActivated: (title) => dispatch(actions.Todo.addTodo(title))
});


class Header extends PureComponent {
    state = {
        title: ""
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        // dispatch
        onAddTodoActivated: PropTypes.func.isRequired,
    };

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.onAddTodoActivated(this.state.title);
        this.setState({
            title: ""
        });
    }
    handleChange = (e)=> {
        this.setState({
            title: e.target.value
        });
    }

    render() {
        return (
            <header className="header">
                <h1>{this.props.title}</h1>
                   <form onSubmit={this.handleSubmit}>
                       <input className="new-todo"
                         placeholder={this.props.placeholder} 
                        value={this.state.title}
                        onChange={this.handleChange}
                       />
                    </form>
            </header>
        );
    }
}


export default connect(
    null,
    mapDispatchToProps
)(Header);