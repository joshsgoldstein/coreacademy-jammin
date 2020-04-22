import React from '../../../node_modules/react';
import './Track.css';
// import Track from ../Track/Track

class Track extends React.Component {
    renderAction() {

    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">
                {/* <!-- + or - will go here --> */}
                </button>
            </div>
        )
    }
}

export default Track;