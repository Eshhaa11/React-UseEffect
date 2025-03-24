import { useEffect, useState } from "react";
function App() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);

  const fetchPokemon = async (os) => {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${os}&limit=20`;

    try {
      const pokeApi = await fetch(url);
    } catch data = await pokeApiResponse.json()
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data.results);
    //   })
    //   .catch((error) => console.error("error fetching", error));
  };

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
      <ul>
        {data.map((val, key) => {
          const { name } = val;
          return <li key={key}>{name}</li>;
        })}
      </ul>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;


//A promise is a promise that is resolved when the fetch is successful.
//The fetch() method returns a Promise that resolves to the Response to that request, whether it is successful or not.
//You can also define a catch() method on the promise, which will be called if the promise is rejected.
//The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not.
