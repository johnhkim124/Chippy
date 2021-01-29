import { useEffect, useState } from "react";
import { Switch, useHistory } from "react-router-dom";
import { getAllSnacks, postSnack } from "../sevices/snacks";
import Snacks from "../screens/Snacks";
import AddSnack from "../screens/AddSnack";

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
    const newSnack = await postSnack(snackData);
    setSnacks((prevState) => [...prevState, newSnack]);
    history.push("/snacks");
  };

  return (
    <Switch>
      <route path="/snacks">
        <Snacks snacks={snacks} />
      </route>
      <route path="/snacks/new">
        <AddSnack handleCreate={handleCreate} />
      </route>
    </Switch>
  );
}
