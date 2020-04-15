import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import firebase from "./utils/Firebase";
import "firebase/auth";
import Auth from "./pages/Auth";

function App() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(currentUser => {
    if(!currentUser){
      setUser(null);
    }else {
      setUser(currentUser);
    }
    setIsLoading(false);
  });

  if(isLoading) {
    return null;
  }

  return (
    <div>
      {!user ? <Auth/> : <UserLogged /> }
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

const UserLogged = () => {
  const logout = () => {
    firebase.auth().signOut();
  }
  return(
    <div style={{
       display: "flex", 
       alignItems: "center", 
       justifyContent:"center",
       flexDirection: "column",
       height: "100vh",
    }}>

      <h1>Usuario loggeado</h1>
      <button onClick={logout}>Cerrar Sesión</button>

    </div>
  )
}

export default App;
