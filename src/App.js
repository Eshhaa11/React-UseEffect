import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      })
      .catch((error) => console.error("error fetching", error));
  };

  useEffect(() => {
    fetchPokemon();
  }, [data.length]);

  return (
    <div>
      <ol>
        {data.map((val, key) => {
          const { name } = val;
          return <li key={key}>{name}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
