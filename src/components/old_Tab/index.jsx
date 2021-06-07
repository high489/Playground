import React from 'react';
import './index.css';

class Tab extends React.Component {
    render() {
        if (this.props.isSelected){
            return (
                <div className="Tab">
                    {this.props.children}
                </div>
            );
        }
        return null;
    }
}

export default Tab;