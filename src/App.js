import React, { Component } from 'react';
import './App.css';
import TimeInput from './components/TimeInput.js';
import NameInput from './components/NameInput.js';
import ListButtons from './components/ListButtons.js';
import Athletes from './components/Athletes.js';
import { data } from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      athleteInfo: data,
      timeInput: '',
      nameInput: ''
    };
  }

  onChangeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('ARRaY', this.state.athleteInfo);
    console.log('ARRaY2', ...this.state.athleteInfo);
    this.setState({
      athleteInfo: [
        ...this.state.athleteInfo,
        { name: this.state.nameInput, time: this.state.timeInput }
      ],
      nameInput: '',
      timeInput: ''
    });
  };

  get athletes() {
    return this.state.athleteInfo.map((athlete, index) =>
      <Athletes key={index} index={index} {...athlete} />
    );
  }

  render() {

    return (
      <div className="App">
        <h1>Fastest Times!</h1>
        <form onSubmit={this.onSubmit} className="Form">
          <div>
            <label className="name">Enter Your Name</label>
            <input
              className="nameInput"
              name="nameInput"
              placeholder="Usain Bolt"
              onChange={this.onChangeValue}
              value={this.state.nameInput}
              required
            />
          </div>
          <div>
            <label className="time">Enter Your Time</label>
            <input
              className="timeInput"
              type="number"
              placeholder="9.58"
              name="timeInput"
              onChange={this.onChangeValue}
              value={this.state.timeInput}
              required
            />
          </div>
          <br />
          <button className="add" onSubmit={this.onSubmit}>
            Add
          </button>
        </form>
        <ListButtons />
        {this.athletes}
      </div>
    );
  }
}

export default App;