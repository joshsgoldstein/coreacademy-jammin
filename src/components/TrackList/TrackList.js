import React from '../../../node_modules/react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        console.log("TrackList Render has been called");
        return (
            <div className="TrackList">
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
                {console.log(this.props.tracks)}
               { this.props.tracks.map(track => {
                   console.log("This is a track being processed");
                    return <Track track={track} key={track.id} />
                }) }
            </div>
        )
    }
}

export default TrackList;