import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getSnack, updateSnack } from "../../sevices/snacks";

const EditItem = () => {
  const [editSnack, setEditSnack] = useState({
    name: "",
    user_id: "",
    brand: "",
    category: "",
    origin: "",
    price: "",
    img_url: "",
  });

  const [isUpdated, setIsUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchSnack = async () => {
      const snack = await getSnack(id);
      setEditSnack(snack);
    };
    fetchSnack();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditSnack({
      ...editSnack,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitUpdate = await updateSnack(id, editSnack);
    setIsUpdated(submitUpdate);
  };

  if (isUpdated) {
    return <Redirect to={`/snacks/${id}`} />;
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editSnack.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="img_url"
              value={editSnack.img_url}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            User Id:
            <input
              type="text"
              name="user_id"
              value={editSnack.user_id}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Brand:
            <input
              type="text"
              name="brand"
              value={editSnack.brand}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={editSnack.category}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="origin"
              value={editSnack.origin}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={editSnack.price}
              onChange={handleChange}
              reqired
            />
          </label>

          <button>Update Snack</button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
