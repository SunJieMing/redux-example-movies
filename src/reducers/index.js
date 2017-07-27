import { combineReducers } from 'redux';
import MoviesReducer from './movies';
import ActiveMovie from './active-movie';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  activeMovie: ActiveMovie,
});

export default rootReducer;
