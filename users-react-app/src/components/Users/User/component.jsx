import FieldTitle from '../FieldTitle';
import BgNumber from '../BgNumber/component';

import './styles.scss'

const User = ({name, id, phone}) => (

        <div className='card'>
            <BgNumber id = {id}/>
            <h3 key={id}>{name}</h3>
            <p><FieldTitle title="Phone" />{phone}</p> 
            </div>
)

export default User;