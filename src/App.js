import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list.component';
import {Search} from './components/search/search.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
      ],
      searchField: "",
      placeholder: "Search monster"
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").
    then(response => response.json()).
    then(users => this.setState({monsters: users}))
  }
  handleQuery = (e) => {
    this.setState({searchField: e.target.value});
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1>Monsters rolodex</h1>
        <Search placeholder={this.state.placeholder} handler={this.handleQuery}/>
        <CardList monsters={filteredMonsters}/>
    </div>
    )
  }
}

export default App;
