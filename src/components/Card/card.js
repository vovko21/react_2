import React, { Component } from "react";

import Info from "../Info";
import Header from "../Header";
import Controls from "../Controls";

import "./card.css";

export default class Card extends Component {
  state = {
    selectedClass: "card col-4"
  }

  onSelectCard = () => {
    let selected = this.props.onSelect();

    if (selected == true) this.state.selectedClass = "card col-4 selected";
    else this.state.selectedClass = "card col-4";
  }

  render() {
    const { id } = this.props;
    
    return (
      <div className={this.state.selectedClass} onClick={this.onSelectCard}>
        <Header name={this.props.name} />
        <h2>Age: {this.props.age}</h2>
        <Info name={this.props.name} />
        <Controls
          id={id}
          onDelete={this.props.onDelete}
          onFavouriteChange={this.props.onFavouriteChange}
          favourite={this.props.favourite}
        />
      </div>
    );
  }
}
