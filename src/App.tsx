// import LargeAuthorListItem from './components/authors/LargeListItem';
// import SmallAuthorListItem from './components/authors/SmallListItem';
// import LargeBookListItem from './components/books/LargeListItem';
// import SmallBookListItem from './components/books/SmallListItem';
// import NumberedList from './components/lists/Numbered';
// import RegularList from './components/lists/Regular';
// import { authors } from './data/authors';
import { books } from './data/books';
import Modal from './components/Modal';
import LargeBookListItem from './components/books/LargeListItem';

function App() {
  return (
    <>
      {/* <RegularList items={authors} ItemComponent={SmallAuthorListItem} />
      <NumberedList items={authors} ItemComponent={LargeAuthorListItem} />
      <RegularList items={books} ItemComponent={SmallBookListItem} />
      <NumberedList items={books} ItemComponent={LargeBookListItem} /> */}
      <Modal>
        <LargeBookListItem {...books[0]} />
      </Modal>
    </>
  );
}

export default App;
