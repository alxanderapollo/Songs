
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

//this syntax calls on the react component lib
//couldve been written as songList Extends Component but if you do it this way you need to import {Component}
class SongList extends React.Component {
    render(){
        return <div>SongList</div>
    }
}
//gets called with all of the state inside of our redux store 
//which will be our entire list of songs from the song reducer
//and currently selected songs from the song reducer

//songs will passed up as props to the connect component
//which will then be passed to SongsList
const mapStateToProps = (state) => {
    console.log(this.props)
   return{songs: state.songs}
}
//syntax: the first set connect() returns a function
//the second set connect(SongList) invokes the function
//mapStateToProps gets passed as the first argument down here
//which then SongList recives as props
export default connect(mapStateToProps)(SongList);