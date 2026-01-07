import { useState, useEffect } from "react"; //0523540238
import "./App.css";
import Header from "./compoments/Header";
import MenuProducts from "./compoments/MenuProducts";

function App() {
  const [device, setDevice] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState("all");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const response = await res.json();
        setDevice(
          categoryValue === "all"
            ? response.products
            : response.products.filter(
                (product) => product.category === categoryValue
              )
        );
        const arrSet = new Set(
          response.products.map((value) => value.category)
        );
        setCategory([...arrSet]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [categoryValue]);
  useEffect(() => {
    {
      device && console.log(device);
      category && console.log(category);
    }
  }, [device]);
  const setFilter = function (e) {
    setCategoryValue((prev) => e.target.value);
  };
  return (
    <>
      <Header />
      <MenuProducts
        deviceArr={device}
        categorySet={category}
        setFilter={setFilter}
        categoryInput={categoryValue}
      />
    </>
  );
}

export default App;
