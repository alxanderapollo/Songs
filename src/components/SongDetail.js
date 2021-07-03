//wont need an action creator because it wont be chaning the state of anything
import React from 'react';
import {connect} from 'react-redux';

//instead of sending the whole props we can destructure the props
const SongDetail = ({song}) => {
    //if the user hasent chosen a song yet prompt the user to do choose a song
    if(!song) return <div>Select a Song</div>
    // returns the song title onto the screen
    return( <div>
        <h2>Details for:</h2>
        <p>
            <b>Title: {song.title}</b>
            <br/>
            duration: {song.duration}
        </p>
        </div>
    );
};

//want to connect this function to the provider 
//called with out state object
//the key that shows up on the props object can be changed here 
const mapsStateToProp = (state) => {
    return{song: state.selectedSong}

}
//wires up the function to our connector
export default connect(mapsStateToProp)(SongDetail);