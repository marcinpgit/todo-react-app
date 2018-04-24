import React from 'react';

import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(event) {
        if (this._inputElement !== '') {
            const newItem = {
                text: this._inputElement.value,
                key: Date.now().toString(32)
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = '';
        }

        console.log(this.state.items);

        event.preventDefault();
    };

    removeItem(key) {

    };

    render() {
        return (
            <div className='todoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input
                            ref={ (a) => this._inputElement = a }
                            placeholder='enter task'
                        />
                        <button type='submit'>add</button>
                    </form>
                </div>
                <TodoItems
                    entries={this.state.items}
                    remove={this.removeItem}
                />
            </div>
        );
    }
}

export default TodoList;