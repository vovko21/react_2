import React, { Component } from "react";

import "./add-item.css";

export default class AddItem extends Component {
    state = {
        name: "",
        age: ""
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    onAgeChange = (event) => {
        this.setState({
            age: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state);
        this.setState({
            name: "",
            age: ""
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit} className="form-group mt-4">
                    <input
                        onChange={this.onNameChange}
                        name="name"
                        placeholder="enter name"
                        className="form-control"
                        value={this.state.name} />
                    <input
                        onChange={this.onAgeChange}
                        name="age"
                        placeholder="enter age"
                        className="form-control"
                        value={this.state.age} />
                    <div className="bottom-right">
                        <button type="submit" className="btn btn-success"><i className="fas fa-plus-circle"></i>
                        </button>
                    </div>
                </form>
            </>
        );
    }
}