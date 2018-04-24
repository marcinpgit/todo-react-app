import React from 'react';

class TodoItems extends React.Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    remove(key) {
        this.props.remove(key);
    }

    createTasks(item) {
        return <li onClick={ () => this.remove(item.key) }
                   key={item.key}>{item.text}</li>
    };

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);

        return (
            <ul className='theList'>
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;