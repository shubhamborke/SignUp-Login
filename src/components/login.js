import React, { useState } from "react";
import axios from "axios";
import Welcome from "./welcome";

const Login = () => {
  const [state, setstate] = useState({
    username: "",
    password: "",
  });
  const [value, setvalue] = useState({});
  const handler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "username") {
      setstate((prev) => {
        return {
          username: value,
          password: prev.password,
        };
      });
    } else {
      setstate((prev) => {
        return {
          username: prev.username,
          password: value,
        };
      });
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    const { username, password } = state;
    if (username && password) {
      await axios
        .post("http://localhost:4000/login", state)
        .then((res) => {
          if (res.data.name === username && res.data.password === password) {
            setvalue(() => res.data);
          } else {
            setvalue(() => res.data);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      {value.name === state.username ? (
          <Welcome value={value}/>
      ) : value === "wrong" ? (
        <>
          <h1>Please provide detailes to LogIn</h1>
          <form className="credentials">
            <lable>User Name:</lable>
            <input onChange={handler} name="username" type="text"></input>
            <lable>Password::</lable>
            <input onChange={handler} name="password" type="password"></input>
            <button onClick={submit}>submit</button>
          </form>
          <p style={{color: "red",paddingBottom:"1em"}}> Please check your username and password <span style={{color: "green"}}>or refresh to SignUp</span></p>
        </>
      ) : (
        <>
          <h1>Please provide detailes to LogIn</h1>
          <form className="credentials">
            <lable>User Name:</lable>
            <input onChange={handler} name="username" type="text"></input>
            <lable>Password::</lable>
            <input onChange={handler} name="password" type="password"></input>
            <button onClick={submit}>submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
