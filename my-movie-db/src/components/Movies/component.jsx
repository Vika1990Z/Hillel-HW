import '../shared/styles.scss'

import {connect} from "react-redux";

import useFetch from '../../hooks/useFetch';
import { setPopularMovies } from '../../store/myMovies/actions'

import { generateMoviesURL } from '../shared/utils';
import Movie from '../Movie';
import Error from '../Error/';

const Movies = ({poopularMovies, setPopularMovies}) => {
    let url = generateMoviesURL('popular');
    useFetch(url, setPopularMovies)
 
    if (poopularMovies.length === 0) {
        return  <Error />
    }

    return (
    <main>
         <section>
            <h2 className="section-title">Today is Popular...</h2>
            <div className="popular d-flex movies">
            { poopularMovies.map(movie => {
                    return (
                        <Movie key={movie.id} {...movie}/>
                )}) }
      </div>
        </section>
    </main>
)}

const mapStateToProps = state => ({
    poopularMovies: state.myMovies.popular
})

const mapDispatchToProps = {
    setPopularMovies,
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);


