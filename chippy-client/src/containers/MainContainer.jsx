import { useEffect, useState } from "react";
import { Switch, useHistory } from "react-router-dom";
import { getAllSnacks, postSnacks } from "../sevices/snacks";

export default function MainContainer() {
  const [snacks, setSnacks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchSnacks = async () => {
      const snackData = await getAllSnacks();
      setSnacks(snackData);
    };
    fetchSnacks();
  }, []);

  const handleCreate = async (snackData) => {
    const newSnack = await postSnacks(snackData);
    setSnacks((prevState) => [...prevState, newSnack]);
    history.push("/snacks");
  };

  return <Switch></Switch>;
}
