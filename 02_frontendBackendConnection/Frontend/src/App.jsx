import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setjokes] = useState([]);

  async function getJokesData() {
    const response = await axios.get("/api/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.error(
          "Error in getting Jokes Api data::: line 15, App.jsx:::",
          error
        );
      });
  }

  useEffect(() => {
    getJokesData();
  }, []);
  return (
    <div>
      <h1>My first Fullstack App</h1>
      <h4>Total Jokes: {jokes.length}</h4>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>Joke number: {joke.id}</p>
          <p>Joke text: {joke.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
