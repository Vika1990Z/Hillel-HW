import { NavLink, Outlet } from 'react-router-dom'

import Header from './components/Header';

import { styleLink } from './helpers/utilities';

function App() {
  return (
    <div className="App">
      <Header text='Home Work 49' />

      <nav style={{textAlign: "center"}}>

        <NavLink
          style={({isActive}) => styleLink(isActive)}
          to="/">Home</NavLink> |{" "}
        <NavLink 
          style={({isActive}) => styleLink(isActive)}
          to="/users">Our Active Users</NavLink> |{" "}
        <NavLink 
          style={({isActive}) => styleLink(isActive)}
          to="/posts">Posts</NavLink>  |{" "}
        <NavLink 
            style={({isActive}) => styleLink(isActive)}
            to="/invoices">Invoices</NavLink> 
       
      </nav>

      <Outlet />

    </div>
  );
}

export default App;
