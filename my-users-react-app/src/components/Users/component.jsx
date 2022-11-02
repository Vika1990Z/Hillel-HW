

import data from './mockData'

import User from './User';

import './styles.scss'

const Users = () => (
    <main>
        <div className="container-main">
            <section className="d-flex">
                { data.map(user => (
                    <User key={user.id} {...user}/>
                )
                ) }
            </section>
        </div>
    </main>
)

export default Users;