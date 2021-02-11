import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component{

    render(){
        const list = this.props.items;
        console.log(list);
        const listItems = list.map((item,index) => 
            <li key={index}> 
                <Todo text={item.text}
                priority={item.priority}
                dueDate={item.dueDate}/>
            </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }


};