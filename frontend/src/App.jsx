import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Hello World !</h1>
      <p>Jokes:{jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;

// CORS imp to learn
// CORS (Cross-Origin Resource Sharing) is a web
// security feature that allows servers to specify
// who can access their resources from a different
// origin (domain). It uses HTTP headers to LockManager
// these permissions. Without CORS, browsers restrict
// cross-origin requests due to the Same-Origin Policy
// to prevent malicious actions. CORS headers, like
// Access-Control-Allow-Origin, specify which origins
// can access the resources, enabling safe cross-origin
// communication.
