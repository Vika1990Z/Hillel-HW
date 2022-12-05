import Header from './components/Header';
import Todos from './components/Todos/container';


import {Provider} from "react-redux"; 
import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header text='My Todo List' />
        <Todos />

      </div>
    </Provider>
  );
}

export default App;
