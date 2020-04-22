import React from '../../../node_modules/react';
// import logo from './logo.svg';
import './App.css';


//Import app componenets
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "Corona Loss",
      playlistTracks: [{
        name: "joshshmo",
        artist: "adslkfjs",
        album: "talking to much"
      },{
        name: "seth",
        artist: "lalala",
        album: "talking to much"
      }]
    };
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

  }
  render() {
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
            {/* <!-- Add a SearchBar component --> */}
            <SearchBar />
              <div className="App-playlist">
              {/* <!-- Add a SearchResults component -->
              <!-- Add a Playlist component --> */}
              <SearchResults searchResults={this.state.searchResults} />
              <Playlist playListName={this.state.playlistName} playListTracks={this.state.playlistTracks} />
            </div>
          </div>
        </div>
      );
  }
      
  
}

export default App;
