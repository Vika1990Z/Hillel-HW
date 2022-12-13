import '../shared/styles.scss'

import {connect} from "react-redux";
import { useParams, Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { generateSearchMovieURL } from '../shared/utils';

import { setSearchedMovies } from '../../store/myMovies/actions'
import Movie from '../Movie';
import Error from '../Error/';

const SearchedMovies = ({searchedMovies, setSearchedMovies}) => {
    let params = useParams();
    let url = generateSearchMovieURL(params.query);
    useFetch(url, setSearchedMovies);

    if (searchedMovies.length === 0) {
        return  <Error />
    }
 
    return (
    <main>
        <section>
            <h2 className="section-title">
                Search results for - "{params.query}"        
            </h2>
            <Link to="/">
                <button className='search'>Back to the homepage</button>
            </Link>
            <div className="popular d-flex movies">
                { searchedMovies.map(movie => <Movie key={movie.id} {...movie}/>) }
            </div>
        </section>
    </main>
)}


const mapStateToProps = state => ({
    searchedMovies: state.myMovies.searched
  })
  
  const mapDispatchToProps = {
    setSearchedMovies,
}  
export default connect(mapStateToProps, mapDispatchToProps)(SearchedMovies);


