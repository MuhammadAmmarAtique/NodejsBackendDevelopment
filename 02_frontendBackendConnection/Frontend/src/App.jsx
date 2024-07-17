import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setjokes] = useState([])

  async function getJokesData() {
    try {
      const response = await axios.get('http://localhost:3500/jokes')
        .then(() => {
          setjokes(response)
          console.log("response::::", response);
        })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getJokesData()
  }, [])
  return (
    <>
      <div>
        <h1>My first Fullstack App</h1>
        <h4>Total Jokes: {jokes.length}</h4>

        {
          jokes.map((joke) =>
            <div key={joke.id}>
              <p>Joke number: {joke.id}</p>
              <p>Joke text: {joke.text}</p>
            </div>

          )
        }

      </div>
    </>
  )
}

export default App
