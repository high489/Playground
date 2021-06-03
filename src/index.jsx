import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from '@components/ToDoApp';

ReactDOM.render(
    <ToDoApp tabsData={getData()} />,
    document.getElementById('app')
)

// заглушка вместо апи
function getData(){
    return [
        {
            tab_id: "0",
            tab_label: "Tab 1",
            tab_content: "This is content for Tab 1",
        },
        {
            tab_id: "1",
            tab_label:"Tab 2",
            tab_content:"This is content for Tab 2",
        },
        {
            tab_id: "2",
            tab_label:"Tab 3",
            tab_content:"This is content for Tab 3",
        }
     ];
}