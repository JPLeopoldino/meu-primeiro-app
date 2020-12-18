import React from 'react';
import Pessoa from './Pessoa';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ul>
        <li><Pessoa nome="Kely" nrsorte="30" /></li>
        <li><Pessoa nome="Nailto" nrsorte="7" /></li>
        <li><Pessoa nome="Diogo" nrsorte="13" /></li>
        <li><Pessoa nome="Daniel" nrsorte="11" /></li>
        <li><Pessoa nome="Gabriel" nrsorte="10" /></li>
      </ul>
    </div>
  );
}

export default App;
