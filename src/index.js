import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const YTUBE_API_KEY = 'AIzaSyArt90VQ81DKQt6sEuTBugVCzE_kQOTEY4';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { videos: [], selected: null };
        
        this.videoSearch('csgo mm');
    }
    
    videoSearch(term) {
        YTSearch({key: YTUBE_API_KEY, term: term}, (videos) => {
           this.setState({ videos: videos, selected: videos[0] });
           //this.setState({ videos: videos });
        });   
    }
    
    render () {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selected} />
                <VideoList onVideoSelect={selected => this.setState({selected})} videos={this.state.videos} />
            </div>
        );
    }
};
//JSX - subset of javascript, lets us write "html" but really its javascript
//webpack and babel will convert our "html" to real "html"

//take this components generated html and put it on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));