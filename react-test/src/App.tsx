import React from "react";
import { SmartTable, Card, Button, Counter } from "./components";
import { generateRandomNumber, IProduct } from "./helpers";
import { columns } from "./config";

function App() {
  const [products, setProducts] = React.useState<Array<IProduct>>([
    {
      count: 3,
      name: "Orange",
      price: 15,
    },
    {
      count: 1,
      name: "Apple",
      price: 4,
    },
    {
      count: 6,
      name: "Carrot",
      price: 9,
    },
  ]);

  const handleRandomizeValues = () => {
    setProducts([
      ...products.map((product) => ({
        ...product,
        count: generateRandomNumber(1, 8),
        price: generateRandomNumber(1, 20),
      })),
    ]);
  };

  const totalCount: number = products.reduce(
    (accumulator, iterator) => accumulator + iterator.count,
    0
  );

  const averagePrice: number = parseInt(
    (
      products.reduce(
        (accumulator, iterator) => accumulator + iterator.price,
        0
      ) / products.length
    ).toFixed(2)
  );

  return (
    <div className="container">
      <SmartTable data={products} columns={columns} />
      <div className="flex mt16 mb16">
        <div className="mr8">
          <Card title="Total count" value={totalCount} color="#4D9DE0" />
        </div>
        <div>
          <Card
            title="Avarage product price"
            value={averagePrice}
            color="#3BB273"
          />
        </div>
      </div>
      <div className="mb16">
        <Button text="Randomize values" onClick={handleRandomizeValues} />
      </div>
      <div className="mb16">
        <Counter />
      </div>
    </div>
  );
}

export default App;
