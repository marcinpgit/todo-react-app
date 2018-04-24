import React from 'react';
import reactDOM from 'react-dom';

import './index.css';
import TodoList from './TodoList';

const destination = document.getElementById('#container');

ReactDOM.render(
    <React.Fragment>
        <TodoList/>
    </React.Fragment>,
    destination
);