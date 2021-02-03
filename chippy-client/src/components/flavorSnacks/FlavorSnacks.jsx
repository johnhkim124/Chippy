import SingleSnack from "../../components/singleSnack/SingleSnack";
import { useEffect, useState } from "react";
import { getFlavor } from "../../sevices/flavors";
import { useParams } from "react-router-dom";
import "./flavorsnacks.css";

export default function Snacks(props) {
  const [flavorSnacks, setflavorSnacks] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchFlavors = async (id) => {
      const flavorSnacks = await getFlavor(id);
      setflavorSnacks(flavorSnacks);
    };
    fetchFlavors(id);
  }, []);

  const mappedFlavorSnacks =
    flavorSnacks &&
    flavorSnacks.snacks.map((snack, index) => {
      return (
        <div className="single-snack-div">
          <SingleSnack
            id={snack.id}
            imgURL={snack.img_url}
            name={snack.name}
            price={snack.price}
            origin={snack.origin}
            key={index}
          />
        </div>
      );
    });

  return (
    flavorSnacks && (
      <div className="flavor-snacks-div">
        <h1>{flavorSnacks.name}</h1>
        <div className="snacks-div">{mappedFlavorSnacks}</div>
      </div>
    )
  );
}
