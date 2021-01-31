import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSnack } from "../../sevices/snacks";

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
    <div>
      {snack && (
        <>
          <div>
            <img src={snack.img_url} alt={snack.name} />
          </div>
          <div>
            <h1>{snack.name}</h1>
            <h3>{snack.price}</h3>
            <p>{snack.category}</p>
            <p>{snack.origin}</p>
            <button>Add to Cart</button>
            <Link to={`/${snack.id}/edit`}>
              <button>Edit</button>
            </Link>

            <button>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SnackDetail;
