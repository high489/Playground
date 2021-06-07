import React from 'react';
import './index.css';
import TabNav from '@components/old_TabNav';
import Tab from '@components/old_Tab'

class ToDoApp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            selected: this.props.tabsData[0].tab_label,
        }
    }

    setSelected = (tabLabel) => {
        this.setState({ selected: tabLabel });
    }

    render(){
        let tabLabels = this.props.tabsData.map((tab, i) => {
            return tab.tab_label
        })
        let tabContents = this.props.tabsData.map((tab, i) => {
            return (
                <Tab key={tab.tab_id} 
                     isSelected={this.state.selected == tab.tab_label}>
                    <p>{tab.tab_content}</p>
                </Tab>
            )
        })

        return (
            <div className="ToDoApp">
                <TabNav tabs={tabLabels} 
                        selected={this.state.selected}
                        setSelected={this.setSelected}>
                            {tabContents}
                </TabNav>
            </div>
        );
    }
}

export default ToDoApp;