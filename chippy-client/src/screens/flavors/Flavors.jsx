export default function Flavor(props) {
  const { flavors } = props;
  return (
    <div>
      <h1>Flavors</h1>
      {flavors.map((flavor) => (
        <p>{flavor.name}</p>
      ))}
    </div>
  );
}
