import "./App.css";

import NotesList from "./components/PostsList";

import store from "./store/configureStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <NotesList />
    </Provider>
  );
}

export default App;
