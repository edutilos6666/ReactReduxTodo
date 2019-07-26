import React, {PureComponent} from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

export default class App extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Header title="Todos" placeholder="What needs to be done?" />
                <Main />
                <Footer />
            </React.Fragment>
        );
    }
}
