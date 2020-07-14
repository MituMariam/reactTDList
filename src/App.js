// import logo from './logo.svg';
// import './App.css';

import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
class App extends Component {
  state = {
    items: [
      { id: "1", title: "Wake up" },
      { id: "2", title: "Have Breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("handle chane");
  };
  handleSubmit = (e) => {
    console.log("handle Submit");
  };
  ClearList = (e) => {
    console.log("Clear list");
  };
  handleEdit = (id) => {
    console.log(`handle edit from ${id}`);
  };
  handleDelete = (id) => {
    console.log(`handle delete from ${id}`);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <TodoInput 
                  item={this.state.item}
                  handleChange={this.state.handleChange}
                  handleSubmit={this.state.handleSubmit}
                  editItem={this.state.editItem}            
                  />
              <TodoList 
                  items={this.state.items}
                  ClearList={this.state.ClearList}
                  handleEdit={this.state.handleEdit}
                  handleDelete={this.state.handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
// export  uuid;
