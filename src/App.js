import React from 'react';
import firebase from './utils/Firebase';
import "firebase/auth";

function App() {

  firebase.auth().onAuthStateChanged(currentUser => console.log(currentUser ? "estamos loggeados":"no estamos loggeados"));

  return (
    <div className="App">

     <h1>HOLa</h1>

   
    </div>
  );
}

export default App;
