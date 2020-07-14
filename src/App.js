// import logo from './logo.svg';
// import './App.css';

import React, { Component } from "react";
// import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <TodoInput />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
