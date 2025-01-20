import { useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  return (
    <>
      <h1>CV Generator</h1>
      <Card title={'Sections'}>
        <p>Enter CV fields</p>
      </Card>
    </>
  );
}

export default App;
