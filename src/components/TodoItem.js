import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title,handleEdit,handleDelete} = this.props;

        return (
            <li className="border mb-3 p-2 d-flex justify-content-between">
                <h5 className="m-0 text-capitalize">{title}</h5>
                <div className="icon">
                    <span className="fas fa-pen text-success" onClick={handleEdit}></span>
                    <span className="fas fa-times-circle text-danger mx-2" onClick={handleDelete}></span>
                </div>
            </li>
        )
    }
}
