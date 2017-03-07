
import React, { Component } from 'react';

//functional component style = is a function not a class
//const SearchBar = () => {
//  return <input />  //React.createElement //do imports!
//};

//class components
// give searchbar access to all functionality react.component has
// class SearchBar extends React.Component //if component is not defined in import
class SearchBar extends Component {

  //constructor
  constructor (props) {
    super(props);  //make react.component accessible
    //here i define the object in which states are saved in
    this.state = { term : '' };
  }



  //defines function in classes, see syntax is different from vanilla js
  render() {

    //renders needs to return jsx so here we go
    //return <input onChange={ event => console.log(event.target.value)}/>;
    //return <input onChange={this.onInputChange} /> // ES6 less syntax If we write like this, we need the onInputChange Function in class
    return (
      <div>
        <input onChange={ event => this.setState({ term : event.target.value }) } />
        value of input : { this.state.term}
      </div>

    );
  }

  //event
  onInputChange (event) {
    //console.log('changed');
    console.log(event.target.value);
  }

}
//generell:
//use functional components first and if you realize,. that your class needs more capabilities reforge it into a class


//make visible in export
export default SearchBar;
