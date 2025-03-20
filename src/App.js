import {useEffect, useState } from "react";

function App() {
    const [data, setData] = useEffect([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((response) => response.json())
            .then((data) => setData(data));
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchPokemon();
    }, [data.length]);



}


