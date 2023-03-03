import React from 'react';
import './App.css';
class App extends React.Component {

  state = {
    btn1: 0,
    btn2: 0,
    btn3: 0,
  }

  handleClickOne = () => {    
    this.setState((pState) => ({
      btn1: pState.btn1 + 1,         
    }))
  }

  handleClickTwo = () => {    
    this.setState((pState) => ({
      btn2: pState.btn2 + 1,         
    }))
  }

  handleClickThree = () => {    
    this.setState((pState) => ({
      btn3: pState.btn3 + 1,         
    }))
  }

  getButtonColor = (num) => num % 2 === 0 ? 'green' : 'white';

  render() {    
  const {btn1, btn2, btn3} = this.state;
    return (
      <div className="App">
        <button
        type="button"
          onClick={this.handleClickOne}
          style= { { backgroundColor: this.getButtonColor(btn1) } }
        >
          {btn1}
        </button>

        <button
        type="button"
          onClick={this.handleClickTwo}
          style= { { backgroundColor: this.getButtonColor(btn2) } }
        >
          {btn2}
        </button>

        <button
        type="button"
          onClick={this.handleClickThree}
          style= { { backgroundColor: this.getButtonColor(btn3) } }
        >
          {btn3}
        </button>        
      </div>      
    );
  }
}


export default App;
