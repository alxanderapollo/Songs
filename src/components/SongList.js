
//1. impory connect
//2. then the component from react
//3.map state to props will hold the kind of object we want to pass into this component
//4. impory connect and pass map state 
import React from 'react';
//we want to create an instance of the connect component 
//so that we can pass the song list down from the provider and
//print it out
//this always the same number of steps 
//call connect
//create map state to props
//pass it in the two functions
import {connect} from 'react-redux';

//action -index js file 
import {selectSong} from '../actions'

//this syntax calls on the react component lib
//couldve been written as songList Extends Component but if you do it this way you need to import {Component}
class SongList extends React.Component {
    renderList(){
        //inner fucntio that called with each song object inside of this array
        //will reaturn some jsx that use some of the properties inside
        //the map will create a brand new array of jsx elements, the array will be returned from the render list elements
        return this.props.songs.map((song) =>{
            // the inner returns jsx for the map function 
            return (
                // key is optional, recomended for when building out a list of elts
                <div className="item" key={song.title}>
                    {/* everything that will go to the right */}
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        // calls the song that was selected
                        //goes into the function and returns inforatmion about the song through the console log in mapsStateToProp
                        onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    {/* button */}
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );

        });
    }
    render(){
        console.log(this.props)
        return <div className="ui divided list">
            {this.renderList()}
        </div>
    }
}
//gets called with all of the state inside of our redux store 
//which will be our entire list of songs from the song reducer
//and currently selected songs from the song reducer

//songs will passed up as props to the connect component
//which will then be passed to SongsList
const mapStateToProps = (state) => {
    console.log(state)
   return{songs: state.songs}
}
//syntax: the first set connect() returns a function
//the second set connect(SongList) invokes the function
//mapStateToProps gets passed as the first argument down here
//which then SongList recives as props
//select song is our action
export default connect(mapStateToProps,{selectSong:selectSong})(SongList);