import { useDispatch, useSelector } from "react-redux";
import { deleteNote, fetchNotes } from "../actions/notesActions";
import { useEffect } from "react";

const NotesList = () => {
  const notes = useSelector(store => store.notes);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(deleteNote(event.target.id.value));
  }

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  return (
    <div>
      {notes.map(i => (
        <form onSubmit={handleSubmit} key={i.id}>
          <input type="hidden" name="id" value={i.id}/>
          <b>{i.title}</b>
          <span>{i.content}</span>
          <button>-</button>
        </form>
      ))}
    </div>
  );
}

export default NotesList;

