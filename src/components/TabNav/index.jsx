import React from 'react';
import './index.css'
import Tab from '@components/Tab'

class TabNav extends React.Component {
    render() {
        return (
            <div className="TabNav">
                <h2>TabNav</h2>
                <hr />
                <Tab></Tab>
            </div>
        )
    }
}

export default TabNav;