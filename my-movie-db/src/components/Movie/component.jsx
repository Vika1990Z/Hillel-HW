import '../shared/styles.scss';
import { Link } from "react-router-dom";
import { generateImgTag } from '../shared/utils';

const Movie = (movie) => (
    <div className='card'>
        <Link
            style={{textDecoration: 'none'}}
            to={`/details/${movie.id}`}
            key={movie.id}
        >
            <img src={generateImgTag(movie.poster_path, '200')} alt={`${movie.original_title}`} />
        </Link>

        <div className="movie_title">{movie.original_title}</div>
        <div className="bage">{Math.round(movie.vote_average * 10)}</div>
    </div>
)

export default Movie;