export interface INote {
  id: string;
  title: string;
  body: string;
}

export class Note {
  static createNewEmpty(id: string) {
    return new Note({ id, title: "", body: "" });
  }

  id: string;
  title: string;
  body: string;
  constructor(args: INote) {
    this.id = args.id;
    this.title = args.title;
    this.body = args.body;
  }
}
