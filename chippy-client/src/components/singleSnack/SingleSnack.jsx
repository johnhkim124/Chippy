import { Link } from "react-router-dom";

const SingleSnack = (props) => {
  return (
    <>
      <Link to={`/snacks/${props.id}`}>
        <img src={props.imgURL} alt={props.name} />
        <div>
          <h1>{props.name}</h1>
          <h3>{props.price}</h3>
        </div>
      </Link>
    </>
  );
};

export default SingleSnack;
