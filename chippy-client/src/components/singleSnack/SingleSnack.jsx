import { Link } from "react-router-dom";
import "./singleSnack.css";

const SingleSnack = (props) => {
  return (
    <>
      <div className="singleSnack-div">
        <Link to={`/snacks/${props.id}`}>
          <img src={props.imgURL} alt={props.name} />
          <div>
            <h1>{props.name}</h1>
            <h3>{props.price}</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleSnack;
