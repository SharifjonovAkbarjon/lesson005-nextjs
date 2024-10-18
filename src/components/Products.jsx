import Card from "./Card";

async function getData(limit) {
  const res = await fetch(`https://dummyjson.com/products?limit=8`);
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}

const Products = async () => {
  const data = await getData();

  return (
    <div className="pb-[50px] flex flex-col items-center justify-center">
      <h3 className="text-black text-center text-3xl">Our Products</h3>
      <Card data={data} />
    </div>
  );
};

export default Products;
