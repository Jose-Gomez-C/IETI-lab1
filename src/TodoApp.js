import React from 'react';
import { TodoList } from './TodoList';
export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: null, dueDate: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { text, priority, dueDate, items } = this.state;
        return (
            <div>
                <h3>TODO</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
            </label>
                    <input
                        name="text"
                        type="text"
                        id="new-todo"
                        onChange={this.handleChange}
                        value={text}
                    />
                    <label htmlFor="new-todo">
                        <br/>
                        priority
            </label>
                    <input
                        name="priority"
                        type="number"
                        id="new-todo"
                        onChange={this.handleChange}
                        value={priority}
                    />
                    <label htmlFor="new-todo">
                    <br/>
                        date
            </label>
                    <input
                        name="dueDate"
                        type="date"
                        id="new-todo"
                        onChange={this.handleChange}
                        value={dueDate}
                    />
                    <br/>
                    <button 
                        type='submit'
                        onClick={this.handleSubmit}>
                        Add #{items.length + 1}
                    </button>
                </form>
                <TodoList items={items} />
            </div>
            
        );
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        const { text, priority,dueDate} = this.state;
        if (!text.length || priority === null || dueDate === null) {
            return;
        }
        const newItem = {
            text,
            priority,
            dueDate,
        };
        this.setState(prevState => ({
            items: [...prevState.items, newItem],
            text: '',
            priority: null,
            dueDate: null
        }));
    }
}