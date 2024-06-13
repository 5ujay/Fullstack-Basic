import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

// get list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "a joke",
      content: "first joke",
    },
    {
      id: 2,
      title: "a joke",
      content: "second joke",
    },
    {
      id: 3,
      title: "a joke",
      content: "third joke",
    },
    {
      id: 4,
      title: "a joke",
      content: "fourth joke",
    },
    {
      id: 5,
      title: "a joke",
      content: "fifth joke",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
