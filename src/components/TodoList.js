import React, { Component } from 'react'
import TodoItem from "./TodoItem";


export default class TodoList extends Component {
    render() {
        const {items,clearList,handleEdit,handleDelete} = this.props;
        return (
            <div className="item_list card card-body mt-5">
                
                <h3 className="text-center text-capitalize">todo list</h3>
                <ul className="list-group border-0">
                {items.map(item => {
                    return(
                        <TodoItem 
                        key={item.id}
                        title={item.title}
                        handleEdit={() => handleEdit(item.id)}
                        handleDelete={() => handleDelete(item.id)}
                        />
                    );
                })}
                <button className="btn btn-danger btn-block mt-3" onClick={clearList}>Clear List</button>

                </ul>
               
            </div>
        )
    }
}
