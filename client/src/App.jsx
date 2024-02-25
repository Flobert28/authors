import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Main from './views/Main';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Favorite authors</h1>
        <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<Create/>} path="/person/new" />
            <Route element={<Update/>} path="/person/edit/:id"/>
        </Routes>
      </BrowserRouter>                           
    </div>
  );
}
export default App;


