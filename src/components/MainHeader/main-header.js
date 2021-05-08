import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import "./main-header.css";

import Search from "../Search/search"

export default class MainHeader extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Form inline>
          <Search onSearch={this.props.onSearch} />
        </Form>
        <Form inline>
          <Button onClick={this.props.onFilterByFavourite}><i className="far fa-star"></i></Button>
        </Form>
      </Navbar>
    );
  }
}
