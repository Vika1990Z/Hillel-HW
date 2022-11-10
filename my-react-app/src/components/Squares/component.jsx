import Square from './Square';

import './styles.scss'


const Squares = () => {
    return (
       <main className="container-main d-flex">
        <Square id='square-1'/>
        <Square id='square-2'/>
        <Square id='square-3'/>
       </main>
    )
}

export default Squares;

