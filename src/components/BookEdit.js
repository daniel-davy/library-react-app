import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
