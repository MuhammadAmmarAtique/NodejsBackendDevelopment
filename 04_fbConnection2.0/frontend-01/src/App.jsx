import { useEffect } from "react";
import "./App.css";

function App() {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:6500/api/data")
        .then((res) => {
          const data = res.json();
          return data;
        })
        .then((data) => {
          console.log("data:", data);
        });
    } catch (error) {
      console.log("Error in getting data (1st app):::", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>1st App</h1>
    </>
  );
}

export default App;
