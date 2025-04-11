import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Stats from "./components/Stats.jsx";
import Filters from "./components/Filters.jsx";
import CharacterList from "./components/CharacterList.jsx";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("All");
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");
  const [originFilter, setOriginFilter] = useState("All");

  useEffect(() => {
    async function fetchAllCharacters() {
      let allCharacters = [];
      let url = "https://rickandmortyapi.com/api/character";

      while (url) {
        const res = await fetch(url);
        const data = await res.json();

        allCharacters = [...allCharacters, ...data.results];
        url = data.info.next;
      }

      setCharacters(allCharacters);
      setLoading(false); //Done loading
    }

    fetchAllCharacters().catch(console.error);
  }, []);

  if (!characters) return null;

  const speciesOptions = [...new Set(characters.map((c) => c.species))];
  const originOptions = [...new Set(characters.map((c) => c.origin.name))];

  const filtered = characters
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    .filter((c) => statusFilter === "All" || c.status === statusFilter)
    .filter((c) => speciesFilter === "All" || c.species === speciesFilter)
    .filter((c) => genderFilter === "All" || c.gender === genderFilter)
    .filter((c) => originFilter === "All" || c.origin.name === originFilter);

  return (
    <>
      {/* <Header></Header> */}
      <Stats characters={characters}></Stats>
      <Filters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        speciesFilter={speciesFilter}
        setSpeciesFilter={setSpeciesFilter}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        originFilter={originFilter}
        setOriginFilter={setOriginFilter}
        speciesOptions={speciesOptions}
        originOptions={originOptions}
      />

      {loading ? (
        <div className="loading-container">
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
