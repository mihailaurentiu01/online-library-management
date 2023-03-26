import Status from "./types/CategoryType";

class Category {
  name: string;
  creationDate: string;
  createdBy: string | undefined;
  id?: string;
  status: Status;

  constructor(name: string, status: Status, createdBy: string | undefined) {
    this.name = name;
    this.creationDate =
      new Date().toLocaleDateString("es") +
      " " +
      new Date().toLocaleTimeString("es");
    this.createdBy = createdBy;
    this.status = status;
  }

  setId(id: string | undefined) {
    this.id = id;
  }

  setCreationDate(date: string) {
    this.creationDate = date;
  }
}

export default Category;
