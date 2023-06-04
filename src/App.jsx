import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import BookList from "./components/BookList";

function App() {
  //useState hookun altındaki tüm componentslarda kullanmak için yazdık.
  const [books, setBooks] = useState([]);

  return (
    <>
      {/* books={books} ve setBooks={setBooks} propslarını yaparak forma gönderildi. */}
      <Form books={books} setBooks={setBooks} />
      {/*Proplar bu şekilde gönderiliyor */}
      <BookList books={books} setBooks={setBooks} />
    </>
  );
}

export default App;
