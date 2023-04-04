class Book {
  name: string;
  creationDate: string;
  createdBy: string | undefined;
  id?: string;
  category: string;
  author: string;
  isbn: number;
  price: number;
  picture: string;

  constructor(
    name: string,
    createdBy: string | undefined,
    category: string,
    author: string,
    isbn: number,
    price: number,
    picture: string
  ) {
    this.name = name;
    this.creationDate =
      new Date().toLocaleDateString("es") +
      " " +
      new Date().toLocaleTimeString("es");
    this.createdBy = createdBy;
    this.category = category;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.picture = picture;
  }

  setId(id: string | undefined) {
    this.id = id;
  }

  setCreationDate(date: string) {
    this.creationDate = date;
  }
}

export default Book;
