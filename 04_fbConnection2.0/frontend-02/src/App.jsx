import { useEffect } from "react";
import "./App.css";

function App() {
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:6500/api/data")
        .then((response) => {
          const data = response.json();
          return data;
        })
        .then((data) => {
          console.log("data:", data);
        });
    } catch (error) {
      console.log("Error in getting data (2nd app):::", error);

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>2nd App</h1>
    </>
  );
}

export default App;
