//this is a default export so we dont need curley braces
import React from 'react';
//this is a named export so we need the curley braces
//curly braces means we want to export a named export from the file extension
 import SongList from './SongList'
function App() {
  return (
    <div className="ui container grid">
       <div className="ui row">
         <div className="column eight wide">
        <SongList />
      </div>
    </div>
    </div>

  );
}

export default App;
