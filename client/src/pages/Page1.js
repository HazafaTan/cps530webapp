import React from "react";
import logo from './../logo.svg';
import BackDemo from "./../components/BackDemo"
import './../App.css';

function Page1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          CPS530 React and Express WebApp! {"\n"}
        </h1>
      <BackDemo/>
      </header>
    </div>
  );
}

export default Page1