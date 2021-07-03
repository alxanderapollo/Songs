import React from 'react';
//we want to create an instance of the connect component 
//so that we can pass the song list down from the provider and
//print it out
import {connect} from 'react-redux';

//this syntax calls on the react component lib
//couldve been written as songList Extends Component but if you do it this way you need to import {Component}
class SongList extends React.Component {
    render(){
        return <div>SongList</div>
    }

}
//syntax: the first set connect() returns a function
//the second set connect(SongList) invokes the function
export default connect()(SongList);