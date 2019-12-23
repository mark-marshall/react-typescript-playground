import React from 'react';
import Form from './components/Form';
import './App.css';

const App: React.FC = () => {
  const message = 'beep bop'

  return (
    <div>
      Hello Typescript World
      <Form message={message} speedboat={false}/>
    </div>
  );
}

export default App;
