import { useEffect, useState } from "react";
import { Switch, useHistory, Route } from "react-router-dom";
import { getAllSnacks, postSnack } from "../sevices/snacks";
import Home from "../screens/home/Home";
import Snacks from "../screens/snacks/Snacks";
import AddSnack from "../screens/addSnack/AddSnack";
import Flavors from "../screens/flavors/Flavors";
import SnackDetail from "../screens/snackDetail/SnackDetail";
import EditItem from "../screens/editItem/EditItem";
import Cart from "../screens/cart/Cart";
import FlavorSnacks from "../components/flavorSnacks/FlavorSnacks";
import { getAllFlavors } from "../sevices/flavors";
import { addToCart } from "../sevices/cart";

export default function MainContainer(props) {
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

  const handleAddToCart = async (cartData) => {
    console.log(cartData);
    const addSnack = await addToCart(cartData);

    // setCartSnacks((prevState) => [...prevState, addSnack]);
  };

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/snacks">
        <Snacks snacks={snacks} />
      </Route>
      <Route exact path="/flavors">
        <Flavors flavors={flavors} />
      </Route>
      <Route exact path="/snacks/:id">
        <SnackDetail snacks={snacks} handleAddToCart={handleAddToCart} />
      </Route>
      <Route path="/new-snack">
        <AddSnack handleCreate={handleCreate} />
      </Route>
      <Route exact path="/:id/edit">
        <EditItem />
      </Route>
      <Route path="/carts">
        <Cart currentUser={props.currentUser} />
      </Route>
      <Route path="/flavors/:id">
        <FlavorSnacks flavors={flavors} />
      </Route>
    </Switch>
  );
}
