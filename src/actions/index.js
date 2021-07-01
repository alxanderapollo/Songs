//We already have an index.js file, however the reason why we create one in a new folder, given that we already have one
//is so that when its imported out into our app instead of doing something like import actions from '../actions/index, we can do
//import actions from '../actions'

export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  }; 
};
//named export allows us to export many functions from diffrent files 