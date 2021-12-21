import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [state, setstate] = useState({
    name: "",
    email: "",
    mobile: 0,
    age: 0,
    dateOfBirth: 0,
    password: ""
  });
  const [value, setvalue] = useState("");
  const updateState = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "name") {
      setstate((prev) => {
        return {
          name: value,
          email: prev.email,
          mobile: prev.mobile,
          age: prev.age,
          dateOfBirth: prev.dateOfBirth,
          password: prev.password
        };
      });
    } else if (name === "email") {
      setstate((prev) => {
        return {
          name: prev.name,
          email: value,
          mobile: prev.mobile,
          age: prev.age,
          dateOfBirth: prev.dateOfBirth,
          password: prev.password
        };
      });
    } else if (name === "mobile") {
      setstate((prev) => {
        return {
          name: prev.name,
          email: prev.email,
          mobile: value,
          age: prev.age,
          dateOfBirth: prev.dateOfBirth,
          password: prev.password
        };
      });
    } else if (name === "age") {
      setstate((prev) => {
        return {
          name: prev.name,
          email: prev.email,
          mobile: prev.mobile,
          age: value,
          dateOfBirth: prev.dateOfBirth,
          password: prev.password
        };
      });
    } else if (name === "dateOfBirth") {
      setstate((prev) => {
        return {
          name: prev.name,
          email: prev.email,
          mobile: prev.mobile,
          age: prev.age,
          dateOfBirth: value,
          password: prev.password
        };
      });
    }else if (name === "password") {
      setstate((prev) => {
        return {
          name: prev.name,
          email: prev.email,
          mobile: prev.mobile,
          age: prev.age,
          dateOfBirth: prev.dateOfBirth,
          password: value
        };
      });
    }
  };
  const handlerSignup = async (e) => {
    e.preventDefault();
    const { name, email, mobile, age, dateOfBirth } = state;
    if (name && email && mobile && age && dateOfBirth) {
      await axios
        .post("http://localhost:4000/signup", state)
        .then((res) => {
          if (res.data === "created") {
            setvalue(() => "Account successfully created");
          } else {
            setvalue(() => "Account already exist refresh to login");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h1>Please provide detailes to SignIn.</h1>
      <form className="credentials">
        <lable>Name:</lable>
        <input name="name" onChange={updateState} type="text"></input>
        <lable>Email:</lable>
        <input name="email" onChange={updateState} type="email"></input>
        <lable>Mobile:</lable>
        <input name="mobile" onChange={updateState} type="tel"></input>
        <lable>Age:</lable>
        <input name="age" onChange={updateState} type="number"></input>
        <lable>Date of Birth:</lable>
        <input name="dateOfBirth" onChange={updateState} type="date"></input>
        <lable>Password:</lable>
        <input name="password" onChange={updateState} type="password"></input>
        <button onClick={handlerSignup}>submit</button>
      </form>
      <p
        style={
          value === "Account already exist refresh to login"
            ? { color: "red", paddingBottom:"1em" }
            : { color: "green", paddingBottom:"1em" }
        }
      >
        {value}
      </p>
    </div>
  );
};

export default Signup;
