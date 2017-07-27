import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  render() {
    if (!this.props.movie) {
      return (
        <div>Select a movie</div>
      );
    }
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.activeMovie,
  };
};

export default connect(mapStateToProps)(MovieDetail);
