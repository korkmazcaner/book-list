import EditModal from "./EditModal";
import { useState } from "react";

function BookCard({ item, books, setBooks }) {
  const [modalVisible, setModalVisible] = useState(false);

  const title = item.title;
  const date = item.date.toLocaleString();

  // Sil butonuna tıklandığında aşağıdaki fonction çalışacak.
  function deleteItem(e) {
    const removedList = books.filter((item) => {
      return item.id !== +e.target.dataset.id;
    });
    //Silme işlemi gerçekleştikten sonra setBooks([...removedList]) yazar silinen itemı çıkartmaya yarıyor.
    setBooks([...removedList]);
  }

  // ------------- Okundu Bilgisi

  // okundu butonuna basınca çalışır
  function toggleIsRead(e) {
    //findIndex hangi kitabın okundu botonuna basıldığını bulur.
    const index = books.findIndex((item) => {
      return item.id === +e.target.dataset.id;
    });
    // oldBook okudunda tuşuna basılan kitap
    const oldBook = books[index];

    // newBook okudun bilgisinin güncellenmiş hali
    const newBook = { ...oldBook, isRead: !oldBook.isRead };

    // books listesinin kopyası
    const cloneBooks = [...books];
    // Splice arrayde değişiklik yapmaya yarar. Birinci değer arrayın hangi sırasında değişiklik yapmak istediğini gösterir. İkincisi o sıradan itibaren kaç elamanın çıkarılacağını belirtir. Üçüncüsü o sıraya hangi elamnın konulacağını.
    cloneBooks.splice(index, 1, newBook);
    setBooks([...cloneBooks]);
  }

  return (
    <>
      <div
        className="book-card border shadow rounded p-3 mx-auto my-3"
        style={{ width: "850px" }}
      >
        <div>
          <h6
            style={
              item.isRead
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {title}
          </h6>

          <span>{date}</span>
        </div>
        <div className="btn btn-group">
          <button
            className="btn btn-danger"
            data-id={item.id}
            onClick={deleteItem}
          >
            Sil
          </button>
          <button
            data-id={item.id}
            onClick={() => {
              setModalVisible(true);
            }}
            className="btn btn-primary"
          >
            Düzenle
          </button>
          <button
            onClick={toggleIsRead}
            data-id={item.id}
            className="btn btn-success"
          >
            {item.isRead ? "Okundu" : "Okunmadı"}
          </button>
        </div>
      </div>
      {modalVisible && (
        <EditModal
          books={books}
          setBooks={setBooks}
          title={title}
          setModalVisible={setModalVisible}
          item={item}
        />
      )}
    </>
  );
}

export default BookCard;
