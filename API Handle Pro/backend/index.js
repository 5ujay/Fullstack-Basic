import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 29.99,
      image: "https://example.com/images/wireless_earbuds.jpg",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      image: "https://example.com/images/smartphone.jpg",
    },
    {
      id: 3,
      name: "Laptop",
      price: 999.99,
      image: "https://example.com/images/laptop.jpg",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 49.99,
      image: "https://example.com/images/bluetooth_speaker.jpg",
    },
    {
      id: 5,
      name: "Smartwatch",
      price: 199.99,
      image: "https://example.com/images/smartwatch.jpg",
    },
  ];

  //   http://localhost:3000/api/products?search=metal

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server ruuning at port:${port}`);
});
