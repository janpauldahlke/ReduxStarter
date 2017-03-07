//foo
console.log('foo');

//imports
import React from 'react';
import ReactDOM from 'react-dom';

//import from  project files // needs a file reference // so path needs to be relative to index.js
import SearchBar from './components/searchbar';
//


//vars
//try to uppercase const
const API_KEY = 'AIzaSyBlY4ab7gBS_j4iZRYHqgmNLwpvNPG0wSc';

//create some html element
//declare app as function

const App = () => {
  return(
    <div>
      <h3>my own youtube</h3>
      <SearchBar />
    </div>
  )
}


//attach some html element to the dom
//RenderDom.render(App); //needs an instance of app to run,so wrap it in jsx tags
ReactDOM.render(<App />, document.querySelector('.container'));
