import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from "../constants/notesConstants";
import { v4 as uuidv4 } from 'uuid';

export const addNote = (title, content) => ({
  type: ADD_NOTE,
  payload: {
    id: uuidv4(),
    title,
    content
  }
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id
});

export const fetchNotes = () => ({
  type: FETCH_NOTES
});

