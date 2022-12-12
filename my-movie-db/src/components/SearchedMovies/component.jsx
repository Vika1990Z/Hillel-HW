import '../shared/styles.scss'

import {connect} from "react-redux";
import { useParams } from 'react-router-dom';

import Movie from '../Movie';
import Error from '../Error/';

const SearchedMovies = ({searchedMovies}) => {
    let params = useParams();
    if (searchedMovies.length === 0) {
        return  <Error />
    }
 
    return (
    <main>
        <section>
            <h2 className="section-title">Search results for - "{params.query}"</h2>
            <div className="popular d-flex movies">
                { searchedMovies.map(movie => <Movie key={movie.id} {...movie}/>) }
            </div>
        </section>
    </main>
)}


const mapStateToProps = state => ({
    searchedMovies: state.searchedMovies
  })
  
  
export default connect(mapStateToProps, null)(SearchedMovies);


