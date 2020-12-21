import React from 'react';
import Pessoa from './Pessoa';
import Dados from "./pessoas.json";

// stateless => componente funcional
// stateful => componente baseado em classe

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ul>
        {
          Dados.pessoas.map((p) => {
            return(
              <li>
                <Pessoa dados={p} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
