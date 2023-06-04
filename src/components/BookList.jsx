import BookCard from "./BookCard";

//Proplar bu şekilde alınıyor yukarıdan.
function BookList({ books, setBooks }) {
  //EditModalın açık olup olmadığını tutan const

  return (
    <>
      {books.map((item) => {
        return (
          <BookCard
            books={books}
            setBooks={setBooks}
            item={item}
            key={item.id}
          />
        );
      })}
    </>
  );
}

export default BookList;
