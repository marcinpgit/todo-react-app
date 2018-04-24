import React from 'react';

class TodoItems extends React.Component {

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map( items => <li key={items.key}>{items.text}</li>);

        return (
            <ul className='theList'>
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;