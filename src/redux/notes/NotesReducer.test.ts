import { Note } from "../../domain/Note";
import { INotesState, NotesReducer as reducer } from "./NotesReducer";
import { NotesTypes } from "./NotesTypes";

describe("Notes Reducer Unit Test", () => {
  test("headle loading action", () => {
    const initial: INotesState = {
      loading: false,
      notes: [],
    };
    expect(reducer(initial, { type: NotesTypes.LOADING })).toEqual({
      loading: true,
      notes: [],
    });
  });

  test("headle success action", () => {
    const initial: INotesState = {
      loading: false,
      notes: [],
    };
    const notesPayload = [
      new Note({ id: "1", body: "1", title: "1" }),
      new Note({ id: "2", body: "2", title: "2" }),
      new Note({ id: "3", body: "3", title: "3" }),
    ];
    expect(
      reducer(initial, { type: NotesTypes.SUCCESS, payload: notesPayload })
    ).toEqual({
      loading: false,
      notes: notesPayload,
    });
  });

  test("handle add new card action", () => {
    let prevState: INotesState = { loading: false, notes: [] };
    let newState = reducer(prevState, { type: NotesTypes.ADD });
    expect(newState.notes.length).toBe(1);
    let nextState = reducer(newState, { type: NotesTypes.ADD });
    expect(nextState.notes.length).toBe(2);
  });

  test("headle delete action", () => {
    let prevState: INotesState = { loading: false, notes: [
        new Note({ id: "1", body: "1", title: "1" }),
        new Note({ id: "2", body: "2", title: "2" }),
      ]
    };

    prevState = reducer(prevState, {
      type: NotesTypes.DELETE,
      payload: new Note({ id: "2", body: "2", title: "2" }),
    });

    expect(prevState).toEqual({
      loading: false,
      notes: [new Note({ id: "1", body: "1", title: "1" })],
    });

    prevState = reducer(prevState, {
      type: NotesTypes.DELETE,
      payload: new Note({ id: "1", body: "1", title: "1" }),
    });

    expect(prevState).toEqual({
      loading: false,
      notes: [],
    });
  });

  test("handle update action", () => {
    let prevState: INotesState = {
      loading: false,
      notes: [
        new Note({ id: "1", body: "1", title: "1" }),
        new Note({ id: "2", body: "2", title: "2" }),
      ],
    };
    expect(
      reducer(prevState, {
        type: NotesTypes.UPDATE,
        payload: new Note({ id: "1", body: "Changed Body", title: "1" }),
      })
    ).toEqual({
      loading: false,
      notes: [
        new Note({ id: "1", body: "Changed Body", title: "1" }),
        new Note({ id: "2", body: "2", title: "2" }),
      ],
    });
  });
});
