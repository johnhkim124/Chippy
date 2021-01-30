import { useEffect, useState } from "react";
import { Switch, useHistory, Route, Redirect } from "react-router-dom";
import { getAllSnacks, postSnack, getSnack } from "../sevices/snacks";
import Snacks from "../screens/snacks/Snacks";
import AddSnack from "../screens/addSnack/AddSnack";
import Flavors from "../screens/flavors/Flavors";
import SnackDetail from "../screens/snackDetail/SnackDetail";
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
      <Route exact path="/snacks">
        <Snacks snacks={snacks} />
      </Route>
      <Route path="/flavors">
        <Flavors flavors={flavors} />
      </Route>
      <Route exact path="/snacks/:id">
        <SnackDetail snacks={snacks} />
      </Route>
      <Route>
        <AddSnack handleCreate={handleCreate} />
      </Route>
    </Switch>
  );
}
