import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchPokemon = () => {
    let url = `https://pokeapi.co/api/v2/pokemon`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
      
        setData(data.results);
      })
      .catch((error) => console.error("error fetching", error));
  }

  const handleNext = () => {
    setOffset (prev => prev += 20);
  }

  const handleNext = () => {
    setOffset (prev => prev += 20);
  }
  
  useEffect(() => {
    fetchPokemon();
  }, [data.length]);

  return (
    <div>
      <ul>
        {data.map((val, key) => {
          const { name } = val;
          return <li key={key}>{name}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
