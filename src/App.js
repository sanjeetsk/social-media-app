import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Detail from './Component/Detail';

function App() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/item/:id" component={Detail} />
    </Routes>
  );
}

export default App;
