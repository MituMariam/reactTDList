import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem} = this.props;

        return (
            <div className="card card-body">

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                        type="text" 
                        className="form-control text-capitalize" 
                        placeholder="Add todo items"
                        value={item}
                        onChange={handleChange}/>
                    </div>
                    <button type="submit" 
                    disabled={item?false:true}
                    className={editItem?"btn btn-warning btn-block mt-3":"btn btn-primary btn-block mt-3"}>
                    {editItem?'Edit Item':' Add Item'}</button>

                </form>
             
            </div>
        )
    }
}
