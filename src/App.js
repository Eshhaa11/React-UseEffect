import { useEffect, useState } from "react";
function App() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);

  const fetchPokemon = async (os) => {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${os}&limit=20`;

    try {
      const pokeApiResponse = await fetch(url);
      const data = await pokeApiResponse.json()
      setData(data.results)

    } catch (error) {
      console.error("error fetching ", error)
    }
  }

  const handleNext = () => {
    setOffset((prev) => (prev += 20));
  };

  const handlePrev = () => {
    setOffset((prev) => (prev -= 20));
  };

  useEffect(() => {
    fetchPokemon(offset);
  }, [offset]);

  return (
    <div>
      <div>
      <ul>
        {data.map((val, key) => {
          const { name } = val;
          
          return <li key={key}>{name}</li>;
        })}
      </ul>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
    <div>
      <PokemonCharacterProfile/>
    </div>
    </div>
  );
}


const PokemonCharacterProfile = () => {
  return (
    <div>
      <h4>Pokemone Profile</h4>
    </div>
  )
}

export default App;


