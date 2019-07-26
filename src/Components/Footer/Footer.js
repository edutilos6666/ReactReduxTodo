import React from 'react';
import FilterContainer from '../../Containers/FilterContainer/FilterContainer';
import FilterContainerWithHooks from '../../Containers/FilterContainerWithHooks/FilterContainerWithHooks';

export default class Footer extends React.PureComponent {
    static propTypes = {

    };

    render() {
        return (
            <footer className="footer">
            <span className="todo-count">
                <strong>2</strong> items total
            </span>
                <FilterContainerWithHooks />
            </footer>
        );
    }
}