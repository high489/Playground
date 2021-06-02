import React from 'react';
import './index.css'
import TabNav from '@components/TabNav'

class ToDoApp extends React.Component {
    render() {
        return (
            <div className="ToDoApp">
                <h1>ToDoApp</h1>
                <hr />
                <TabNav></TabNav>
            </div>
        )
    }
}

export default ToDoApp;