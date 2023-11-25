import BookType from '../../types/book-type';

const SmallBookListItem: React.FC<BookType> = (props) => {
  return (
    <div>
      <h2>
        {props.name} / {props.price}
      </h2>
    </div>
  );
};

export default SmallBookListItem;
