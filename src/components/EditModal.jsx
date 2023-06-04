import { useState } from "react";

function EditModal({ setModalVisible, title, books, setBooks, item }) {
  const [modalTitle, setModalTitle] = useState(title);

  function saveTitle() {
    const index = +item.id - 1;
    const oldBook = { ...books[index] };
    const newBook = { ...oldBook, title: modalTitle, date: new Date() };
    const cloneBooks = [...books];
    cloneBooks.splice(index, 1, newBook);
    setBooks([...cloneBooks]);
    setModalVisible(false);
  }
  return (
    <div className="confirm-modal">
      <div className="modal-inner">
        <h5>Kitap İsmini Düzenle</h5>

        <input
          onChange={(e) => {
            setModalTitle(e.target.value);
          }}
          //defaultValue title değiştirebiliyorsun.
          value={modalTitle}
          type="text"
          className="form-control shadow"
        />

        <div className="d-flex justify-content-between mt-4">
          <button
            // Anonim Function yaparak setIsVisible (false) modalı kapatıyor
            onClick={() => {
              setModalVisible(false);
            }}
            className="btn btn-warning"
          >
            Vazgeç
          </button>

          <button onClick={saveTitle} className="btn btn-success">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
