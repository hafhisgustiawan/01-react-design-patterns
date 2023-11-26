import AuthorType from '../../types/author-type';
import BookType from '../../types/book-type';

interface Props {
  items: (AuthorType | BookType)[];
  ItemComponent: React.FC<AuthorType> | React.FC<BookType>;
}

const NumberedList: React.FC<Props> = ({ items, ItemComponent }) => {
  return (
    <>
      {items?.map((el, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent
            key={i}
            {...(el as AuthorType)}
            {...(el as BookType)}
          />
        </>
      ))}
    </>
  );
};

export default NumberedList;
