import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { Note } from "../../domain/Note";
import { addNewCardAction, deleteCardAction, updateCardAction } from "./NotesActions";
import { NotesTypes } from "./NotesTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Notes Actions Creators Unit Test", () => {

  test("Should add new Card Action.", async () => {
    const expectedActions = [{ type: NotesTypes.ADD }];
    const store = mockStore();
    await store.dispatch<any>(addNewCardAction());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Should delete Card Action.", async () => {
    const note = new Note({ id: "1", body: "2", title: "3" });
    const expectedActions = [{ type: NotesTypes.DELETE, payload: note }];
    const store = mockStore();
    await store.dispatch<any>(deleteCardAction(note));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Should update Card Action.", async () => {
    const note = new Note({ id: "1", body: "2", title: "3" });
    const expectedActions = [{ type: NotesTypes.UPDATE, payload: note }];
    const store = mockStore();
    await store.dispatch<any>(updateCardAction(note));
    expect(store.getActions()).toEqual(expectedActions);
  });

});
