import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Stats from "./components/Stats.jsx";
import Filters from "./components/Filters.jsx";
import CharacterList from "./components/CharacterList.jsx";
import "./App.css";
import SpeciesChart from "./components/SpeciesChart.jsx";
import StatusChart from "./components/StatusChart.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // State variables for filters
  const [statusFilter, setStatusFilter] = useState("All");
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");
  const [originFilter, setOriginFilter] = useState("All");

    // State variables to control chart visibility
    const [showSpeciesChart, setShowSpeciesChart] = useState(true);
    const [showStatusChart, setShowStatusChart] = useState(true);

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

  // Prepare data for species distribution chart
  const speciesData = characters.reduce((acc, character) => {
    acc[character.species] = (acc[character.species] || 0) + 1;
    return acc;
  }, {});

  const speciesChartData = Object.entries(speciesData).map(([name, value]) => ({
    name,
    value,
  }));

  // Prepare data for status distribution chart
  const statusData = characters.reduce((acc, character) => {
    acc[character.status] = (acc[character.status] || 0) + 1;
    return acc;
  }, {});

  const statusChartData = Object.entries(statusData).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <>
      <Stats characters={characters}></Stats>
      <div className="dashboard-container">
        <div className="character-list-container">
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
        </div>
        
        <div className="charts-container">
          <div className="chart-toggle-buttons">
            <button onClick={() => setShowSpeciesChart(!showSpeciesChart)}>
              {showSpeciesChart ? "Hide Species Chart" : "Show Species Chart"}
            </button>
            <button onClick={() => setShowStatusChart(!showStatusChart)}>
              {showStatusChart ? "Hide Status Chart" : "Show Status Chart"}
            </button>
          </div>
          {showSpeciesChart && <SpeciesChart data={speciesChartData} />}
          {showStatusChart && <StatusChart data={statusChartData} />}
        </div>
      </div>
    </>
  );
}

export default App;
