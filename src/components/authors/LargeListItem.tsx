import AuthorType from '../../types/author-type';

const LargeAuthorListItem: React.FC<AuthorType> = ({
  name,
  age,
  country,
  books,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Coutry: {country}</p>
      <h2>Books</h2>
      <ul>
        {books?.map((book, i) => (
          <li key={i}>{book}</li>
        ))}
      </ul>
    </>
  );
};

export default LargeAuthorListItem;
