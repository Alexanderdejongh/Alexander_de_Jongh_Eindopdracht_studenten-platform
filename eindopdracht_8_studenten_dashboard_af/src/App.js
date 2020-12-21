import './App.css';
import React from 'react';
import {DataProvider} from './Data/Data';
import Container from './Componenten/Container';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Container />
      </DataProvider>
    </div>
  );
}

export default App;
