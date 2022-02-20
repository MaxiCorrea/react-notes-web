import { ThunkAction } from "redux-thunk";
import { ActionCreator, Dispatch } from "redux";
import { INotesState } from "../reducers/NotesReducer";
import { NotesActions, NotesTypes } from "../types/NotesTypes";
import { Note } from "../../domain/Note";

export const addNewCardAction: ActionCreator<
  ThunkAction<Promise<void>, INotesState, null, NotesActions>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: NotesTypes.ADD });
  };
};

export const deleteCardAction: ActionCreator<
  ThunkAction<Promise<void>, INotesState, null, NotesActions>
> = (note: Note) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: NotesTypes.DELETE, payload: note });
  };
};

export const updateCardAction: ActionCreator<
  ThunkAction<Promise<void>, INotesState, null, NotesActions>
> = (note: Note) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: NotesTypes.UPDATE, payload: note });
  };
};

