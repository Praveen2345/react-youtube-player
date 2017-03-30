import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: 'Beautiful day'
        }
    }
    render() {
        // return some jsx inside this method
        return (
            <div className="search-bar">
                <input value={this.state.term}
                       onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term: term});
        this.props.onSearchTermChange(term);
    }

}

// we have used class based component instead of functional component
// we need SearchBar to interact with the other components.