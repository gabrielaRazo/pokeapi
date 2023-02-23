import React, { useEffect } from "react";
import logo from "../../logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.dasboardReducer.test);
  useEffect(() => {
    dispatch({
      type: "CHANGE_TEST_VALUE",
      test: "Hi!",
    });
  }, [dispatch, test]);
  console.log("test", test);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Test value redux: {test}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Dashboard;
