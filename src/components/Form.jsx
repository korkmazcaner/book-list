import { useState } from "react";

//books,setBooks app'ten props olarak alındı.
function Form({ books, setBooks }) {
  // Kitap listesine eklenecek yeni elemanın state.
  const [newItem, setNewItem] = useState({
    id: "",
    title: "",
    date: "",
    isRead: false, //okundu ve ya okunmadı bilgisini tutan değer.
  });

  //addBook butona basıldığında yeni kitabı ekliyor
  function addBook(e) {
    e.preventDefault();
    setBooks([...books, newItem]);
    //ekledikten sonra yeni kitap bilgilerini yeni kitap bilgilerini inputtan sıfırlanıyor.
    setNewItem({
      id: "",
      title: "",
      date: "",
      isRead: false,
    });
  }

  function updateBook(e) {
    // inputa girildiğinde yeni oluşturulan elamanın id,title ve tarihi oluşturuldu.
    const newId = books.length + 1;
    const newTitle = e.target.value;
    const newDate = new Date();

    //updateBook functionun çalıştırıldığında newBook objesi güncel bilgilerle oluşturuluyor.
    const newBook = {
      id: newId,
      title: newTitle,
      date: newDate,
      isRead: false,
    };

    //...spread operatörü ile ...newBok kopyalanıp çalıştırılmıştır.
    setNewItem({ ...newBook });
  }

  return (
    <form
      onSubmit={addBook}
      className="border shadow rounded p-3 mx-auto my-3"
      style={{ maxWidth: "850px" }}
    >
      <h5 className="mb-3">Book Name</h5>
      <div className="d-flex gap-3">
        <div className="flex-grow-1">
          <input
            required
            type="text"
            className="form-control"
            placeholder="Add a book to list.."
            onChange={updateBook}
            value={newItem.title}
          />
        </div>
        <div className="">
          <button type="submit" className="btn btn-warning mb-3 fw-bold">
            Add Book
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
