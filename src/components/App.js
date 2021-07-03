//if you notice before redux, all of the props and items were being passed down through 
//the app into our components, with redux, thats being taken care of with our store/reducers and action creators


//this is a default export so we dont need curley braces
import React from 'react';
//this is a named export so we need the curley braces
//curly braces means we want to export a named export from the file extension
 import SongList from './SongList'
 //want this to show up along side of our app
 import SongDetail from './SongDetail';
function App() {
  return (
    <div className="ui container grid">
       <div className="ui row">
         <div className="column eight wide">
        <SongList />
      </div>
      <div className="column eight wide">
          <SongDetail/>
      </div>
    </div>
    </div>

  );
}

export default App;
