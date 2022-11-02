import FieldTitle from './FieldTitle';
import BgNumber from './BgNumber/component';

import './styles.scss'

const User = ({
    name, id, username, email, phone, website, 
    company: {name: companyName}, 
    address: {street, suite, city, zipcode}}) => (
        
        <div className='card'>
            <BgNumber id = {id}/>
            <h3 key={id}>{name}</h3>
            <p><FieldTitle title="Username" />{username}</p> 
            <p><FieldTitle title="Email" />{email}</p> 
            <p><FieldTitle title="Phone" />{phone}</p> 
            <p><FieldTitle title="Website" />{website}</p> 
            <p><FieldTitle title="Company" />{companyName}</p> 
            <p><FieldTitle title="Address" />{street}, {suite}, {city}, {zipcode}</p> 
            </div>
)

export default User;