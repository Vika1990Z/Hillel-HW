import {REACT_APP_API_KEY, REACT_APP_API, REACT_APP_IMG_API} from './constants';

export const generateMoviesURL = section => `${ REACT_APP_API }movie/${ section }?api_key=${ REACT_APP_API_KEY }`; 

export const generateMovieURL = movieId => `${ REACT_APP_API }movie/${ movieId }?api_key=${ REACT_APP_API_KEY }`;

export const generateSearchMovieURL = query => `${ REACT_APP_API }search/movie/?api_key=${ REACT_APP_API_KEY }&query=${ query }`;

export const generateImgTag = (path, width) => `${ REACT_APP_IMG_API }/w${width}${path}`;

export const convertDate = date => new Date(date).toDateString();
