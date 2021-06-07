import React from 'react';
import './index.css';

class TabNav extends React.Component {
    render() {
        let tabs = this.props.tabs.map(tab => {
            const active = (tab == this.props.selected ? ' current-tab active' : '');
            return (
                <div key={tab}>
                    <a className={"TabLabel" + active} 
                       onClick={() => this.props.setSelected(tab)}>
                           {tab}
                    </a>
                </div>
            )
        })
        return (
            <div className="TabNav">
                {tabs}
                {this.props.children}
            </div>
        )
    }
}

export default TabNav;