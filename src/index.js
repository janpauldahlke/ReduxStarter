//foo
console.log('foo');

//imports
import React from 'react';
import ReactDOM from 'react-dom';

//create some html element
//declare app as function

const App = () => {
  return <div>foo<h2>hello</h2></div>;
}


//attach some html element to the dom
//RenderDom.render(App); //needs an instance of app to run,so wrap it in jsx tags
ReactDOM.render(<App />, document.querySelector('.container'));
