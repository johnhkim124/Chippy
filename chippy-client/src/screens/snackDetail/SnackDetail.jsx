import { useState, useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { getSnack, deleteSnack } from "../../sevices/snacks";
import "./snackDetail.css";

const SnackDetail = (props) => {
  const [snack, setSnack] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchSnack = async () => {
      const snack = await getSnack(id);
      setSnack(snack);
      setLoaded(true);
    };
    fetchSnack();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="snack-detail-div">
      {snack && (
        <>
          <div className="snack-img-div">
            <img src={snack.img_url} alt={snack.name} />
          </div>
          <div className="snack-info">
            <h1>{snack.name}</h1>
            <p>Category: {snack.category}</p>
            <p>{snack.origin}</p>
            <h3>Prices: ${snack.price}</h3>
            <button className="add-to-cart">Add to Cart</button>
            <Link to={`/${snack.id}/edit`}>
              <button>Edit</button>
            </Link>

            <button onClick={() => deleteSnack(snack.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SnackDetail;
