import React, { Component } from 'react';
import MoviesList from './containers/MoviesList';
import MovieDetail from './containers/MovieDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MoviesList />
        <MovieDetail />
      </div>
    );
  }
}

export default App;
