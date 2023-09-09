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

const momos = data.map((momo) => {
  return {
    content: `${momo.title} - ${momo.description}`,
    price: momo.price,
  };
});

function StaticMap() {
  console.log(momos);
  return <h1>Example the console output.</h1>;
}

export default StaticMap;
