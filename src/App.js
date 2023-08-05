import React from 'react';
import Home from './Component/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Detail from './Component/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
