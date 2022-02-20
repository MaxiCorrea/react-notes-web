import type { Note } from "../domain/Note";

export class NotesService {
  static async getNotes(): Promise<Note[]> {
    let notes: Note[] = [];
    return notes;
  }
}
