import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  return (
    <form>
      <input type="text"></input>
    </form>
  );
}
