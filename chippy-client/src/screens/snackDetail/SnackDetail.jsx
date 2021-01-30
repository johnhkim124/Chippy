import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SnackDetail = (props) => {
  const [snack, setSnack] = useState(null);
  const { id } = useParams();
  const { snacks } = props;

  useEffect(() => {
    if (snacks.length) {
      const singleSnack = snacks.find((snack) => {
        return snack.id === Number(id);
      });
      setSnack(singleSnack);
    }
  }, [snacks, id]);
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
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SnackDetail;
