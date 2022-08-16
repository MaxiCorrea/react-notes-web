import { Reducer } from "redux";
import { Note } from "../../domain/Note";
import { NotesActions, NotesTypes } from "./NotesTypes";
import { v4 as uuidv4 } from "uuid";

export interface INotesState {
  readonly loading: boolean;
  readonly notes: Note[];
}

const initialState: INotesState = {
  loading: false,
  notes: [],
};

const replaceAndGet = (notes: Note[], note: Note) => {
  for (let i = 0; i < notes.length; ++i)
    if (notes[i].id === note.id) notes[i] = note;
  return notes;
};

export const NotesReducer: Reducer<INotesState, NotesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case NotesTypes.LOADING: {
      return { ...initialState };
    }
    case NotesTypes.SUCCESS: {
      return { loading: false, notes: action.payload };
    }
    case NotesTypes.DELETE: {
      return {
        ...state,
        notes: state.notes.filter((n) => n.id !== action.payload.id),
      };
    }
    case NotesTypes.ADD: {
      return {
        ...state,
        notes: [Note.createNewEmpty(uuidv4())].concat(...state.notes),
      };
    }
    case NotesTypes.UPDATE: {
      return {
        ...state,
        notes: replaceAndGet(state.notes, action.payload),
      };
    }
    default: {
      return state || initialState;
    }
  }
};
