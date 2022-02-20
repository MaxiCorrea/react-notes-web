import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card/Card";
import { CardBody } from "../components/CardBody/CardBody";
import { CardHeader } from "../components/CardHeader/CardHeader";
import { Cards } from "../components/Cards/Cards";
import { CardTitle } from "../components/CardTitle/CardTitle";
import { NewCard } from "../components/NewCard/NewCard";
import { INotesState } from "../redux/reducers/NotesReducer";
import { IApplicationState } from "../redux/store/Store";
import {
  addNewCardAction,
  deleteCardAction,
  updateCardAction,
} from "../redux/actions/NotesActions";
import { Note } from "../domain/Note";

export const UI: React.FC = () => {
  const dispatch = useDispatch();
  const notesState = useSelector<IApplicationState, INotesState>(
    (state) => state.notesState
  );

  return (
    <div style={{ padding: "50px" }}>
      <NewCard
        onNewNote={() => {
          dispatch(addNewCardAction());
        }}
      />
      <Cards>
        {notesState.notes.map((note) => (
          <Card key={note.id}>
            <CardHeader
              onDelete={() => {
                dispatch(deleteCardAction(new Note(note)));
              }}
            />
            <CardTitle
              id={note.id}
              text={note.title}
              onUpdate={(id: string, text: string) => {
                dispatch(updateCardAction(new Note({ ...note, title: text })));
              }}
            />
            <CardBody
              id={note.id}
              text={note.body}
              onUpdate={(id: string, text: string) => {
                dispatch(updateCardAction(new Note({ ...note, body: text })));
              }}
            />
          </Card>
        ))}
      </Cards>
    </div>
  );
};
