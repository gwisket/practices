import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './Posts';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
