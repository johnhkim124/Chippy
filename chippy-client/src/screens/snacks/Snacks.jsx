import "./snacks.css";
import SingleSnack from "../../components/singleSnack/SingleSnack";
import Search from "../../components/search/Search";
import { useState } from "react";

export default function Snacks(props) {
  const { snacks } = props;
  const [quieredSnacks, setQuieredSnacks] = useState([]);

  const mappedSnacks = quieredSnacks.map((snack, index) => {
    return (
      <SingleSnack
        id={snack.id}
        imgURL={snack.img_url}
        name={snack.name}
        price={snack.price}
        origin={snack.origin}
        key={index}
      />
    );
  });

  const handleSubmit = (e) => e.preventDefault();

  const handleSearch = (e) => {
    const newQuieredSnacks = snacks.filter((snack) =>
      snack.name.toLowerCase().include(e.target.value.toLowerCase())
    );
    setQuieredSnacks(newQuieredSnacks);
  };

  return (
    <>
      <div className="search-div">
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
      </div>
      <div className="snacks-div">
        <h3 className="title">All Snacks</h3>

        <div className="single-snack-div">{mappedSnacks}</div>

        <div className="promo">PROMO</div>
      </div>
    </>
  );
}
