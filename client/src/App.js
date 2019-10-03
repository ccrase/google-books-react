import React from 'react';
import { Nav } from './components/Nav';
import { Container } from './components/Container';
import { Card } from './components/Card';
// import { thisExpression } from '@babel/types';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Container>
        <button
        className="btn btn-primary"
        onClick={() => {
          return fetch('/sample_route')
            .then(res => res.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));
          }}
        >Server hit</button>
        <Card />
      </Container>
    </div>
  );
}

export default App;
