import SingleSnack from "../../components/singleSnack/SingleSnack";
import { useEffect, useState } from "react";
import { getAllFlavors, getFlavor } from "../../sevices/flavors";

export default function Snacks(props) {
  const [flavorSnacks, setflavorSnacks] = useState([]);

  useEffect(() => {
    const fetchFlavors = async () => {
      const flavorSnacks = await getFlavor();
      setflavorSnacks(flavorSnacks);
    };
    fetchFlavors();
  }, []);

  const mappedFlavorSnacks = flavorSnacks.snacks.map((snack, index) => {
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
    <>
      <div className="snacks-div">{mappedFlavorSnacks}</div>
    </>
  );
}
