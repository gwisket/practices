import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from "../constants/notesConstants";

const initialState = {
  notes: []
};

export const notesReducer = (state = initialState, action) => {
  let newNotes;

  switch (action.type) {
    case ADD_NOTE:
      newNotes = [
          ...state.notes,
          {
            id: action.payload.id,
            title: action.payload.title,
            content: action.payload.content
          }
        ];

      localStorage.setItem('notes', JSON.stringify(newNotes));

      return { notes: newNotes };

    case DELETE_NOTE:
      newNotes = state.notes.filter(i => i.id !== action.payload);

      localStorage.setItem('notes', JSON.stringify(newNotes));

      return { notes: newNotes }

    case FETCH_NOTES:
      return {
        notes: JSON.parse(localStorage.getItem('notes')) ?? []
      }

    default:
      return state;
  }
}

