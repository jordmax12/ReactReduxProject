import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: 'csgo mm' };
    }
    
    render() { 
        return (
        <div className="search-bar"> 
            <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
            <button className="btn btn-danger" >SEARCH</button>
        </div>
        );
    }
    
    onInputChange(term) {
        
    }

    search(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

//const SearchBar = () => {
//    return <input />;
//};

export default SearchBar;