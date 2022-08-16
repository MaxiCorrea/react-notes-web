export interface INote {
  readonly id: string;
  readonly title: string;
  readonly body: string;
}

export class Note {
  
  static createNewEmpty(id: string) {
    return new Note({ id, title: "", body: "" });
  }

  readonly id: string;
  readonly title: string;
  readonly body: string;

  constructor(args: INote) {
    this.id = args.id;
    this.title = args.title;
    this.body = args.body;
  }
}
