//wont need an action creator because it wont be chaning the state of anything
import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
    console.log(props)
    return <div>Song Detail</div>;
};

//want to connect this function to the provider 
//called with out state object
const mapsStateToProp = (state) => {
    return{song: state.selectedSong}

}
//wires up the function to our connector
export default connect(mapsStateToProp)(SongDetail);