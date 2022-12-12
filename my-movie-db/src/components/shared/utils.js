import {API_KEY, API, IMG_API} from './constants';

export const generateMoviesURL = section => `${ API }movie/${ section }?api_key=${ API_KEY }`;
export const generateMovieURL = movieId => `${ API }movie/${ movieId }?api_key=${ API_KEY }`;
export const generateSearchMovieURL = query => `${ API }search/movie/?api_key=${ API_KEY }&query=${ query }`;
export const generateImgTag = (path, width) => `${IMG_API}/w${width}${path}`;
export const convertDate = date => new Date(date).toDateString();
