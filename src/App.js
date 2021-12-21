import "./App.css";
import React, { useState } from "react";
import Signup from "./components/signup";
import Login from "./components/login";

function App() {
  const [state, setstate] = useState({
    login: false,
    signup: false,
  });
  const handleClick = (e) => {
      let name = e.target.name;
      if(name === "signup"){
        setstate(() => {
          return {
            login: false,
            signup: true
          }
        })
      }else if(name === "login"){
        setstate((prev) => {
          return {
            login: true,
            signup: false
          }
        })
      }
  };
  let buttonVisible = false;
  if(state.login === false && state.signup === false){
      buttonVisible = true;
  }else{
    buttonVisible = false;
  }
  return (
    <div className="App">
      {state.signup === true ? <Signup /> : state.login ? <Login/> : null}
      {buttonVisible ? <><button onClick={handleClick} name="login">
        Login
      </button>
      <button onClick={handleClick} name="signup">
        SignUp
      </button></> : null}
    </div>
  );
}

export default App;
