import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import ListBox from './components/ListBox.js';

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
}


findContent(index){

  var athleteInfo;

}

render() {

  // const athletes = this.state.athleteInfo.map((athleteInfo, index) =>
  //           <ListBox key={index} index={index} {...athleteInfo} />
  //       );

  return (
    <div className="App">

      <h1>Fastest Times!</h1>

      <Form />
      {athletes}
      <ListBox key={index} index={index} {...athleteInfo}/>

    </div>
  );
}
}

export default App;
