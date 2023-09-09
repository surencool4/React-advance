const deserts = [
  {
    id: 1,
    name: "Choclate Cake",
    calories: "400 cal",
    createdAt: "https://picsum.photos/200/300/?random",
    price: 5,
  },
  {
    id: 2,
    name: "Ice Cream",
    calories: "200 cal",
    createdAt: "https://picsum.photos/200/300/?random",
    price: 10,
  },
  {
    id: 3,
    name: "Tiramisu",
    calories: "300 cal",
    createdAt: "https://picsum.photos/200/300/?random",
    price: 15,
  },
];

function DesertList() {
  const listDeserts = deserts.map((desert) => {
    const itemText = `${desert.name} - ${desert.calories}`;
    return <li key={desert.id}>{itemText}</li>;
  });
  return (
    <div>
      <ul>{listDeserts}</ul>
    </div>
  );
}

export default DesertList;
