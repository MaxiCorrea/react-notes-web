import thunk from "redux-thunk";
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  compose,
} from "redux";

import { INotesState, NotesReducer } from "../notes/NotesReducer";


export interface IApplicationState {
  notesState : INotesState
}

const rootReducer = combineReducers<IApplicationState>({
  notesState : NotesReducer
});

export default function configureStore(): Store<IApplicationState> {
  return createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : compose
    )
  );
}
