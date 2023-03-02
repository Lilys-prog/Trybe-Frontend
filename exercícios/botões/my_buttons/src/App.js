import React from 'react';
import './App.css';

function handleClick(phrase) {
  console.log(phrase);
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => {handleClick('1')}}>Botão 1</button>
        <button onClick={() => {handleClick('2')}}>Botão 2</button>
        <button onClick={() => {handleClick('3')}}>Botão 3</button>        
      </div>      
    );
  }
}


export default App;
