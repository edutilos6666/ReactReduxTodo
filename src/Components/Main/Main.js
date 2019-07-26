import React, {PureComponent} from 'react';
import './Main.css';
import TodoList from '../TodoList/TodoList';

export default class Main extends PureComponent {
    render() {
        return (
            <section className="main">
                <TodoList />
            </section>
        );
    }
}