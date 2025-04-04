import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Stats from "./components/Stats.jsx";
import Filters from "./components/Filters.jsx";
import CharacterList from "./components/CharacterList.jsx";



import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchAllCharacters() {
      let allCharacters = []
      let url = "https://rickandmortyapi.com/api/character"

      while (url) {
        const res = await fetch(url);
        const data = await res.json();

        allCharacters = [...allCharacters, ...data.results]
        url = data.info.next;
      }

      setCharacters(allCharacters);
      setLoading(false); //Done loading
    }

    fetchAllCharacters().catch(console.error);
  }, []);

  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header></Header>
      <Stats characters={characters}></Stats>
      <Filters search={search} setSearch={setSearch}></Filters>
      {loading ? (
        <div>
          <div className="loading"></div>
          <p>Loading</p>
        </div>
      ) : (
        <CharacterList characters={filtered}></CharacterList>
      )}

    </>
  );
}

export default App;
