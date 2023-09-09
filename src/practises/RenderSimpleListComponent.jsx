const data = [
  {
    id: 1,
    title: "chicken momo",
    description: "This is a chicken momo",
    image: "https://picsum.photos/200/300/?random",
    price: 5,
  },
  {
    id: 2,
    title: "buff momo",
    description: "This is a buff momo",
    image: "https://picsum.photos/200/300/?random",
    price: 10,
  },
  {
    id: 3,
    title: "Mutton momo",
    description: "This is a mutton momo",
    image: "https://picsum.photos/200/300/?random",
    price: 15,
  },
];

function RenderSimpleListComponents() {
  const listMomos = data.map((momo) => {
    const itemText = `${momo.title} - ${momo.price}`;
    // const price = momo.price;
    return <li key={momo.id}>{itemText}</li>;
  });
  return (
    <div>
      <ul>{listMomos}</ul>
    </div>
  );
}

export default RenderSimpleListComponents;
