import React from 'react';
import ReactDOM from 'react-dom';
import { ToDoApp } from '@components/ToDoApp';

ReactDOM.render(
    <React.StrictMode>
        <ToDoApp />
    </React.StrictMode>,
    document.getElementById('app')
)

if (module.hot) { module.hot.accept(); }