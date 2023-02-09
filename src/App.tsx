import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MoviesList} from './components/MoviesList';
import {Categories} from './components/Categories';

function App() {
  return (
    <div className="App">
      <Categories title='Catégories'/>
      <MoviesList/>
    
    </div>
  );
}

export default App;
