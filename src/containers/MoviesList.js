import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';
import { bindActionCreators } from 'redux';

class MoviesList extends Component {

  renderMovies() {
    return this.props.movies.map((movie, i) => {
      return (
        <li
          onClick={() => this.props.selectMovie(movie)}
          key={i}>
          {movie.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderMovies()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => { //methods on the returned object will be a prop
  // When we call selectMovie we should pass the action to all reducers
  return bindActionCreators({ selectMovie: selectMovie }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
