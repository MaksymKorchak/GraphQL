import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div id="main">
      <h1>Reading List</h1>
      <hr/>
      <BookList/>
      <AddBook/>
    </div>
  );
}

export default App;
