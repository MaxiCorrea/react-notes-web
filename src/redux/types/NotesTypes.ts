import { Note } from "../../domain/Note";

export enum NotesTypes {
  LOADING = "NOTES/LOADING",
  SUCCESS = "NOTES/SUCCESS",
  DELETE = "NOTES/DELETE",
  UPDATE = "NOTES/UPDATE",
  ADD = "NOTES/ADD",
}

interface INotesTypesLoadingAction {
  type: NotesTypes.LOADING;
  payload?: boolean;
}

interface INotesTypesSuccessAction {
  type: NotesTypes.SUCCESS;
  payload: Note[];
}

interface INotesTypesDeleteAction {
  type: NotesTypes.DELETE;
  payload: Note;
}

interface INotesTypesUpdateAction {
  type: NotesTypes.UPDATE;
  payload: Note;
}

interface INotesTypesAddAction {
  type: NotesTypes.ADD;
}

export type NotesActions =
  | INotesTypesLoadingAction
  | INotesTypesSuccessAction
  | INotesTypesDeleteAction
  | INotesTypesUpdateAction
  | INotesTypesAddAction;
