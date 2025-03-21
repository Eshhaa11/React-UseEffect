import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchPokemon = () => {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${os}&limit=20`
    fetch(url)
      .then((res => res.json())
      .then((data => {
        setData(data.results)
      })
      .catch((error) => console.error("error fetching", error))
  }

  const handleNext = () => {
    setOffset (prev => prev += 20);
  }

  const handleNext = () => {
    setOffset (prev => prev -= 20);
  }
  
  useEffect(() => {
    fetchPokemon(offset);
  }, [offset])

  return (
    <div>
      <ul>
        {data.map((val, key) => {
          const { name } = val
          return
           <li key={key}>
            {name}
            </li>
        )
    })}
      </ul>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
