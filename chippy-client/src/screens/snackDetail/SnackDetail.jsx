import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getSnack, deleteSnack } from "../../sevices/snacks";
import { addToCart } from "../../sevices/cart";
import "./snackDetail.css";

const SnackDetail = (props) => {
  const [snack, setSnack] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  // const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchSnack = async () => {
      const snack = await getSnack(id);
      setSnack(snack);
      setLoaded(true);
    };
    fetchSnack();
  }, [id]);

  // const addToCartHandler = async () => {};

  const deleteHandler = (props) => {
    deleteSnack(snack.id);
    history.push(`/snacks`);
  };

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
            {/* <select value={qty} onChange={(e) => setQty(e.target.value)}>
              <option>1</option>
              <option>2</option>
            </select> */}
            <button className="add-to-cart">Add to Cart</button>
            <Link to={`/${snack.id}/edit`}>
              <button>Edit</button>
            </Link>

            <button onClick={deleteHandler}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SnackDetail;
