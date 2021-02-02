import { Link } from "react-router-dom";
import "./singleSnack.css";

const SingleSnack = (props) => {
  return (
    <>
      <Link to={`/snacks/${props.id}`} className="singleSnack">
        <img src={props.imgURL} alt={props.name} className="singleSnackImg" />
        <div className="details-container">
          <h1>{props.name}</h1>
          <h3>${props.price}</h3>
          <h3>{props.origin}</h3>
        </div>
      </Link>
    </>
  );
};

export default SingleSnack;
