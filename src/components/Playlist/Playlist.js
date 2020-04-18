import React from './node_modules/react';
import './Playlist.css';
// import TrackList from ../TrackList/Tracklist

export class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"}/>
                {/* <!-- Add a TrackList component --> */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}