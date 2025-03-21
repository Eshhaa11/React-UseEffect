import {useEffect, useState } from "react";

function App() {
    const [data, setData] = useEffect([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
            })
            .catch(error => console.error("error fetching" , error));
    }

    useEffect(() => {
        fetchPokemon();
    }, [data.length])

    return (
        <ol>

        </ol>
      <div>


      </div>
    );
}

export default App;


