import LargeAuthorListItem from './components/authors/LargeListItem';
import SmallAuthorListItem from './components/authors/SmallListItem';
import LargeBookListItem from './components/books/LargeListItem';
import SmallBookListItem from './components/books/SmallListItem';
import RegularList from './components/lists/Regular';
import { authors } from './data/authors';
import { books } from './data/books';

function App() {
  return (
    <>
      <RegularList items={authors} ItemComponent={SmallAuthorListItem} />
      <RegularList items={authors} ItemComponent={LargeAuthorListItem} />
      <RegularList items={books} ItemComponent={SmallBookListItem} />
      <RegularList items={books} ItemComponent={LargeBookListItem} />
    </>
  );
}

export default App;
