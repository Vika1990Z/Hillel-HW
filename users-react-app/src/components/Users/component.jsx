
import { Link, Outlet } from "react-router-dom";

import Error from "./Error";
import User from './User';

import './styles.scss'
import useGetData from '../../hooks/useGetData';

const Users = () => {
    const {data, error} = useGetData('https://jsonplaceholder.typicode.com/users')

    if(error != null) {
        return (
          <Error />
        )
    }

    return (
    <main>
        <div className="users">
        <h2>Our Active Users</h2>
            <section className="d-flex">
                
                { data.map(user => (
                <Link
                    style={{textDecoration: 'none'}}
                    to={`/users/${user.id}`}
                    key={user.id}
                >
                    <User key={user.id} {...user}/>
                </Link>
                )) }
            </section>
        </div>
    </main>
)}

export default Users;