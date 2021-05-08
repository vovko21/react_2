import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Card from "./components/Card";
import AddItem from "./components/AddItem/add-item"
import MainHeader from "./components/MainHeader/main-header"

let Id = 4;

export default class App extends Component {
  state = {
    searchByFavourite: false,
    query: "",
    data: [
      {
        id: 1,
        name: "Ivan",
        age: 18,
        favourite: true,
        selected: false,
        social: {
          fb: "https://fb.com/#",
          insta: "https://instagram.com",
        },
      },
      {
        id: 2,
        name: "Ivanka",
        age: 20,
        favourite: false,
        selected: false,
        social: {
          insta: "https://instagram.com",
        },
      },
      {
        id: 3,
        name: "Ivanko",
        age: 23,
        favourite: false,
        selected: false,
        social: {
          fb: "https://fb.com/#",
        },
      },
    ],
  };

  onSelect = (id) => {
    let i = this.findElementByIndex(id);

    this.setState(({ data }) => {
      let newEl = this.state.data[i];
      newEl.selected = !newEl.selected;

      return {
        data
      };
    });

    return this.state.data[i].selected;
  }


  onDelete = (id) => {
    let index = this.findElementByIndex(id);

    this.setState(({ data }) => {
      return {
        data: [...data.slice(0, index), ...data.slice(index + 1)],
      };
    });
  };

  onAdd = (item) => {
    let newEl =
    {
      id: Id++,
      name: item.name,
      age: item.age,
      favourite: true,
      social: {
        fb: "https://fb.com/#",
        insta: "https://instagram.com",
      },
    }

    this.setState(({ data }) => {
      return {
        data: [...data, newEl]
      }
    });
  };

  findElementByIndex = (id) => {
    return this.state.data.findIndex((x) => x.id == id);
  };

  onFavouriteChange = (id) => {
    var index = this.findElementByIndex(id);
    this.setState(({ data }) => {
      let newEl = data[index];
      newEl.favourite = !newEl.favourite;

      let before = data.slice(0, index);
      let after = data.slice(index + 1);

      return {
        data: [...before, newEl, ...after],
      };
    });
  };

  onQueryChanged = (newQuery) => {
    this.setState({
      query: newQuery
    });
  }

  onFilter = (arr) => {
    let users = this.state.data;

    if (this.state.searchByFavourite === true) {
      return this.getUsers(users.filter((x) => {
        return (x.favourite == true);
      }));
    }

    if (this.state.query === "") {
      return this.getUsers(users);
    }

    return this.getUsers(users.filter((x) => {
      return (x.name.toLowerCase().includes(this.state.query.toLowerCase()));
    }));
  }

  onFilterByFavourite = () => {
    this.setState({
      searchByFavourite: !this.state.searchByFavourite
    });
    
    console.log("Filter by fav " + this.state.searchByFavourite);

    this.onFilter(this.state.data);
  }

  getUsers = (data) => {
    return data.map((el) => {
      return (
        <Card
          onDelete={() => this.onDelete(el.id)}
          onFavouriteChange={() => this.onFavouriteChange(el.id)}
          onSelect={() => this.onSelect(el.id)}
          key={el.id}
          id={el.id}
          name={el.name}
          age={el.age}
          favourite={el.favourite}
          social={el.social}
          selected={el.selected}
        />
      );
    });
  };

  render() {
    return (
      <>
        <MainHeader onSearch={this.onQueryChanged} onFilterByFavourite={this.onFilterByFavourite} />
        <div className="container mt-3">
          <div className="row">{this.onFilter()}</div>
          <AddItem onAdd={this.onAdd} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
