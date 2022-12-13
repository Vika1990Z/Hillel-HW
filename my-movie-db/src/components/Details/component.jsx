import '../shared/styles.scss'

import { connect } from 'react-redux';
import { useParams, Link} from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import { convertDate, generateImgTag, generateMovieURL } from '../shared/utils';

import { setMovie } from '../../store/myMovies/actions';
import Error from '../Error/';

const Details = ({movie, setMovie}) => {
    let params = useParams();
    let url = generateMovieURL(params.movieId);
    useFetch(url, setMovie);

    if (Object.keys(movie).length === 0) {
        console.log(Object.keys(movie).length)
        return  <Error />
    }

    return (
    <section className="movie">
        <div className='grid'>
        <img src={generateImgTag(movie.poster_path, '500')} alt={`${movie.original_title}`} />
            <div className='movie-detailes'>
                <h1 className="movie-title">{movie.original_title}</h1>
                <h3>Release date: <span>{convertDate(movie.release_date) }</span></h3>
                <h3>Rate: <span>{ String(Math.round(movie.vote_average)) }</span> </h3>            
                <h3>Duration: <span>{ movie.runtime } min</span> </h3>
                <h3>Overview:</h3>
                <p>{ movie.overview }</p> 
                <Link to={`/`} style={{textDecoration:'none'}}>
                    <button className='back_home'>Back Home</button>
                </Link>
            </div>
        </div>
    </section>
)
}
const mapStateToProps = state => ({
  movie: state.myMovies.movie
})

const mapDispatchToProps = {
    setMovie,
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);
