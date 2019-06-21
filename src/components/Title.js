import React from 'react';

class Title extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="title">
                <p>Aplikacja toDo:</p>
                <p>Number of tasks: { this.props.data }</p>
            </div>
        );
    }
}

export default Title;