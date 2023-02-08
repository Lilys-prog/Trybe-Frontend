import React from 'react';
import './App.css';

function handleClick() {
  if (button.id === 'btn1')
    console.log('Clicou');
}
class App extends React.Components() {
  render() {
    return (
      <main>
        <button id="btn1">Botão 1</button>;
        <button id="btn2">Botão 2</button>;
        <button id="btn3">Botão 3</button>;
      </main>
    )
  }
};

export default App;
