import { useEffect, useState } from "react";
import { Switch, useHistory } from "react-router-dom";
import { getAllSnacks, postSnack } from "../sevices/snacks";
import Snacks from "../screens/snacks/Snacks";
import AddSnack from "../screens/addSnack/AddSnack";
import Flavors from "../screens/flavors/Flavors";
import { getAllFlavors } from "../sevices/flavors";

export default function MainContainer() {
  const [snacks, setSnacks] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchSnacks = async () => {
      const snackData = await getAllSnacks();
      setSnacks(snackData);
    };

    fetchSnacks();
  }, []);

  useEffect(() => {
    const fetchFlavor = async () => {
      const flavorData = await getAllFlavors();
      setFlavors(flavorData);
    };
    fetchFlavor();
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
      <route path="/flavors">
        <Flavors flavors={flavors} />
      </route>
    </Switch>
  );
}
