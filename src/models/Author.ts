class Author {
  name: string;
  creationDate: string;
  createdBy: string | undefined;
  id?: string;

  constructor(name: string, createdBy: string | undefined) {
    this.name = name;
    this.creationDate =
      new Date().toLocaleDateString("es") +
      " " +
      new Date().toLocaleTimeString("es");
    this.createdBy = createdBy;
  }

  setId(id: string | undefined) {
    this.id = id;
  }

  setCreationDate(date: string) {
    this.creationDate = date;
  }
}

export default Author;
