import { useParams } from "react-router-dom";

import useGetData from '../../../hooks/useGetData';

import Error from "../Error";
import BgNumber from '../BgNumber';
import FieldTitle from "../FieldTitle";

import './styles.scss'

const UserDetailes = () => {
    let params = useParams();
    
    const {data, error} = useGetData(`https://jsonplaceholder.typicode.com/users/${params.userId}`);

    if(error || Object.keys(data).length === 0) {
        return (
          <Error />
        )
    }

    const {
        name, id, username, email, phone, website, 
        company: {name:companyName}, 
        address: {street, suite, city, zipcode}} = data;

    return (
         <main>
            <div className="d-flex">
            <h2 key={id}>{name}</h2>
                <div className='detailes'>
                    <BgNumber id = {data.id}/>
                    <p><FieldTitle title="Username" />{username}</p> 
                    <p><FieldTitle title="Email" />{email}</p>
                    <p><FieldTitle title="Phone" />{phone}</p> 
                    <p><FieldTitle title="Website" />{website}</p> 
                    <p><FieldTitle title="Company" />{companyName}</p> 
                    <p><FieldTitle title="Address" />{street}, {suite}, {city}, {zipcode}</p> 
            </div>
            </div>
    </main>
)}

export default UserDetailes;