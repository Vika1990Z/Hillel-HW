import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header text='My Todo List' />
      <Todos />

    </div>
  );
}

export default App;
