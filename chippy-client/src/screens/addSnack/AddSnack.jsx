import { useState } from "react";
import { Redirect } from "react-router-dom";

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
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h1>Add A Snack</h1>
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
        />
      </label>
      <label>
        Brand:
        <input type="text" name="brand" value={brand} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleChange}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="origin"
          value={origin}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={price} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
        />
      </label>
      <button>Create Snack</button>
    </form>
  );
}
