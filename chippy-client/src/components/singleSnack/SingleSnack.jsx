import { Link } from "react-router-dom";
import "./singleSnack.css";

const SingleSnack = (props) => {
  return (
    <>
      <Link to={`/snacks/${props.id}`} className="singleSnack">
        <img src={props.imgURL} alt={props.name} className="singleSnackImg" />
        <div className="details-container">
          <h2 className="detail-text">{props.name}</h2>
          <h3 className="detail-text">${props.price}</h3>
          <h3 className="detail-text">{props.origin}</h3>
        </div>
      </Link>
    </>
  );
};

export default SingleSnack;
