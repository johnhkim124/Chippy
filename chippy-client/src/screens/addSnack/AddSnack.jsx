import { useState } from "react";
import "./addSnack.css";

export default function AddSnack(props) {
  const [formData, setFormData] = useState({
    name: "",
    user_id: "",
    brand: "",
    category: "",
    origin: "",
    price: "",
    img_url: "",
  });
  const { name, user_id, brand, category, origin, price, img_url } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="create-snack-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h1 className="create-snack-title">Add A Snack</h1>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        User Id:
        <input
          type="text"
          name="user_id"
          value={user_id}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Brand:
        <input
          type="text"
          name="brand"
          value={brand}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="origin"
          value={origin}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
          required
        />
      </label>
      <button>Create Snack</button>
    </form>
  );
}
