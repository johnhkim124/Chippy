import "./snacks.css";
import SingleSnack from "../../components/singleSnack/SingleSnack";
import Search from "../../components/search/Search";
import { useEffect, useState } from "react";
import { getAllSnacks } from "../../sevices/snacks";

export default function Snacks(props) {
  const { snacks } = props;
  const [quieredSnacks, setQuieredSnacks] = useState([]);

  useEffect(() => {
    const fetchSnacks = async () => {
      const snacks = await getAllSnacks();
      setQuieredSnacks(snacks);
    };
    fetchSnacks();
  }, []);

  const mappedSnacks = quieredSnacks.map((snack, index) => {
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
      <div className="snacks-div">{mappedSnacks}</div>
    </>
  );
}
