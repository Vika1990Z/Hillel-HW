import '../shared/styles.scss'
import { Link } from 'react-router-dom';

const Error = () => (
    <div className="detailes notFound">
        <h2>Sorry...</h2>
        <p>This page is still loading or cannot be found</p>
        <Link to="/">
            <button>Back to the homepage.</button>
        </Link>
    </div>
);


export default Error;