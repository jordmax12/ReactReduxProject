import React from 'react';
import ReactDOM from 'react-dom';
//Create new component and it should produce html

"use strict";

import SearchBar from './components/search_bar.js';

const App = () => {
    //JSX - subset of javascript, lets us write "html" but really its javascript
    //webpack and babel will convert our "html" to real "html"
    return (
        <div>
        <SearchBar/>
        </div>
    );
}

const YTUBE_API_KEY = 'AIzaSyArt90VQ81DKQt6sEuTBugVCzE_kQOTEY4';
//take this components generated html and put it on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));