import React, { Component } from 'react';
import './App.css';
import TimeInput from './components/TimeInput.js';
import NameInput from './components/NameInput.js';
import ListButtons from './components/ListButtons.js';
import Athletes from './components/Athletes.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athleteInfo: [
        {
          name: "Usain Bolt",
          time: 9.58
        },
        {
          name: "Tyson Gay",
          time: 9.69
        },
        {
          name: "Asafa Powell",
          time: 9.72
        },
        {
          name: "Maurice Greene",
          time: 9.79
        },
        {
          name: "Donovan Bailey",
          time: 9.84
        }
      ]
    }
  }


addName(name) {
  console.log(name, 'test');
   this.setState({Name: this.state.athleteInfo.concat([name])});
  // this.setState({time})
}

addTime(time) {
  
  console.log(time);
 this.setState({Time: this.state.athleteInfo.concat([time])});
}

addCustom(e) {
  e.preventDefault();
 
}

render() {

  const athletes = this.state.athleteInfo.map((athlete, index) =>
            <Athletes key={index} index={index} {...athlete} />
        );

  // const custom = this.state..map((customized, index) =>
  //           <Athletes key={index} index={index} {...customized} />
  //       );

  return (
    <div className="App">

    <h1>Fastest Times!</h1>
    <form onSubmit={(e) => this.addCustom(e)}  className="Form" >
      <NameInput value={this.state.name} onChange={value =>this.addName(value)} />
      <TimeInput value={this.state.time} onChange={value =>this.addTime(value)} />
      <br/>
    <button className="add" onSubmit={this.onSubmit}>Add</button>
    </form>
    <ListButtons />
    {athletes}
    <Athletes value={this.state.name} name={this.state.name} time={this.state.time} />

    </div>
  );
}
}

export default App;
