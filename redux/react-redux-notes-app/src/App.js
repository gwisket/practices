import { Provider } from "react-redux";
import { createStore } from "redux";
import { notesReducer } from "./reducers/notesReducer";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

const store = createStore(notesReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NoteForm />
        <NotesList />
      </div>
    </Provider>
  );
}

export default App;
