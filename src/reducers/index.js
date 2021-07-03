//this is our reducers file
import{combineReducers} from 'redux'

//static list of songs
const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Start', duration: '3:15'},
        {title: 'I Want It That Way', duration: '1:45'},
    ]
}
// has a default val of null
const selectedSongReducer = (selectedSong = null, action) => {
    //wrote this with the assumption that we may have other action creators,
    if (action.type == 'SONG_SELECTED') return action.payload;

    return selectedSong;
};

// exported so any file in our project can now get access to our combined reducers
//the keys of this object are the keys that show up in the state object
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});