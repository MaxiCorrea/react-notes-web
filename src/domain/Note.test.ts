import { Note } from "./Note";

describe("Unit Test for The Note Class", () => {
  test("should create a note object with its fields empty.", () => {
    let empty = Note.createNewEmpty("id");
    let expected = new Note({ id: "id", title: "", body: "" });
    expect(empty).toEqual(expected);
  });
});
