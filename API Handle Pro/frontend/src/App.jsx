import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   axios.get("/api/products").then((res) => {
  //     setProducts(res.data).catch((error) => console.log(error));
  //   });
  // }, []);

  // iife immediatley ivoke functions
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(res);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("request cancel", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    // cleanup code
    return () => {
      controller.abort();
    };
  }, [search]);

  // if (error) {
  //   return <h1>somthing went wrong .....</h1>;
  // }
  // if (loading) {
  //   return <h1>loading .....</h1>;
  // }
  return (
    <>
      <h1>API handling like a pro</h1>
      <h2>Number of products are : {products.length}</h2>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <h5>{product.price}</h5>

            <img src={product.image} alt="product_image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
