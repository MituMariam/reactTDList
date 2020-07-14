// import logo from './logo.svg';
// import './App.css';

import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = e => {
    // console.log("handle chane");
    this.setState({
      item:e.target.value
    })
  };
  handleSubmit = e => {
   e.preventDefault();
   const newItem = {
     id:this.state.id,
     title:this.state.item
   }
   const updateItems = [...this.state.items,newItem]

   this.setState({
    items:updateItems,
    item:"",
    id:uuidv4(),
    editItem: false
  });
  };


  clearList = () => {
    this.setState({
      items: []
    });
    console.log(`clear`);
  };

  handleDelete = id => {
    console.log(`handle delete from ${id}`);
    const filterItems = this.state.items.filter(item => 
      item.id !== id)
    this.setState({
      items:filterItems
    })

  };
  handleEdit = id => {
    console.log(`handle edit from ${id}`);
    const filterItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items:filterItems,
      item:selectedItem.title,
      id:id,
    editItem: true

    })

  };
  render() {
    // console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto col-10 mt-5">
              <TodoInput 
                  item={this.state.item}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  editItem={this.state.editItem}            
                  />
              <TodoList 
                  items={this.state.items}
                  clearList={this.clearList}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
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
