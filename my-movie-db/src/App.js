import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Header from "./components/Header";
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Header text='Movies App' />
          <Outlet />
          <Footer />
        </div>
    </Provider>
  );
}

export default App;
