import React from 'react';

class TodoForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = this.props.todo || {
            task: props.todo ? props.todo.task : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState( {task:e.target.value} );
    }

    handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
        this.props.handler( Object.assign({}, this.state) );
        if ( this.props.toggle ) {
            this.props.toggle();
        }
    }

    render() {

        return (

            <form onSubmit={this.handleSubmit}>

                <input
                    name='task'
                    type='text'
                    value={this.state.task}
                    placeholder='Enter To Do Item'
                    onChange={this.handleChange}
                />

                <button type="submit">Save Item</button>

            </form>
        )

    }

}

export default TodoForm;