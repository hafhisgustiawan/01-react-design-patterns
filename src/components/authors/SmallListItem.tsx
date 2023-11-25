import AuthorType from '../../types/author-type';

const SmallAuthorListItem: React.FC<AuthorType> = (props) => {
  return (
    <div>
      <p>
        Name : {props.name}, Age : {props.age}
      </p>
    </div>
  );
};

export default SmallAuthorListItem;
