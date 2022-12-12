import '../shared/styles.scss'

import { useEffect } from "react";
import {connect} from "react-redux";

import { setMovies } from '../../store/movies/actions'

import { generateMoviesURL } from '../shared/utils';
import Movie from '../Movie';

const Movies = ({movies, setMovies}) => {
    useEffect(() => {
        fetch(generateMoviesURL('popular'))
        .then (res => res.json())
        .then (data => {
            setMovies(data.results)})
    },[]);
 
    return (
    <main>
         <section>
            <h2 className="section-title">Today is Popular...</h2>
            <div className="popular d-flex movies">
            { movies.map(movie => {
                    return (
                    <Movie key={movie.id} {...movie}/>
                )}) }
      </div>
        </section>
    </main>
)}


const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = {
    setMovies,
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);


