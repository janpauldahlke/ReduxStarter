//foo
console.log('foo');

//imports
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//import from  project files // needs a file reference // so path needs to be relative to index.js
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//


//vars
//try to uppercase const
const API_KEY = 'AIzaSyBlY4ab7gBS_j4iZRYHqgmNLwpvNPG0wSc';


/* clean up and refoactor below with ytAPI data this time in app
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
*/
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      //create selected video
      selectedVideo : null
    };
    //defult value of searchBoard
    this.videoSearch('news');
  }

  //add new method to wire searchfield
  videoSearch(term) {
    //ES6 suggar                    (videos)
    YTSearch({key:API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo : videos[0] //init to prevent null or undefined
    });
    //this.setState({videos:videos}) ES6 sugar still absract it to //works if key_val are identical
    //this.setState({ videos });
    });
  }

  //how does VideoList knows of content?
  //the data is passed via props
  render(){
    return (
      <div>
        <h3>Fancy React-Youtube_API prct</h3>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>

    )
  }

}



//example of using YTSearch
/*
YTSearch({key:API_KEY, term:'iron maiden'}, function(data){
  for(let i = 0;i<=data.length;i++){
    console.log(data[i].snippet.title);
  }
});
*/


//attach some html element to the dom
//RenderDom.render(App); //needs an instance of app to run,so wrap it in jsx tags
ReactDOM.render(<App />, document.querySelector('.container'));
