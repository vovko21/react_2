import Button from 'react-bootstrap/Button';
import React, { Component } from "react"
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

export default class Search extends Component {
    state = {
        query: ""
    }

    onSearchChanged = (event) => {
        this.props.onSearch(event.target.value);
        
        this.setState({
            query: event.target.value
        })
    }

    render() {
        return (
            <InputGroup className="mb-3 mt-3 ">
                <FormControl onChange={this.onSearchChanged}
                    placeholder="Search"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" className="btn">
                        Search
                </Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}