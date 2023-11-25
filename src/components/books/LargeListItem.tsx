import BookType from '../../types/book-type';

const LargeBookListItem: React.FC<BookType> = ({
  name,
  pages,
  price,
  title,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title :</h2>
      <p>{title}</p>
      <p># of Pages : {pages}</p>
    </>
  );
};

export default LargeBookListItem;
