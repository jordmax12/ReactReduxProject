import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    }
    
    render() { 
        return (
        <div> 
            <input 
            value={this.state.term}
            onChange={event => this.setState({term: event.target.value})} />
        </div>
        );
    }
}

//const SearchBar = () => {
//    return <input />;
//};

export default SearchBar;