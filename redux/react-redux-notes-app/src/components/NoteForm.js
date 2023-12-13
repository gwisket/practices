import { useDispatch } from "react-redux";
import { addNote } from "../actions/notesActions";

const NoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addNote(event.target.title.value, event.target.content.value));

    event.target.title.value = '';
    event.target.content.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title"/>
      <input name="content"/>
      <button>+</button>
    </form>
  );
}

export default NoteForm;

