import { useState, useEffect } from "react";
import './Stats.css';

const Stats = ({ characters }) => {
    const [totalEpisodes, setTotalEpisodes] = useState(null)

    useEffect(() => {
        async function fetchTotalEpisodes() {
            const res = await fetch('https://rickandmortyapi.com/api/episode');
            const data = await res.json();
    
            setTotalEpisodes(data.info.count);
        }
        fetchTotalEpisodes().catch(console.error)
    }, [])

    const speciesCount = {};
    characters.forEach(c => {
        speciesCount[c.species] = (speciesCount[c.species] || 0) + 1;
        
    });

    const speciesEntries = Object.entries(speciesCount).sort((a, b) => b[1] - a[1]);
    const mostCommonSpecies = speciesEntries.length > 0 ? speciesEntries[0][0] : 'Unknown';
    
    const totalChars = characters.length;
    const aliveCount = characters.filter(c => c.status === 'Alive').length;
    const deadCount = characters.filter(c => c.status === 'Dead').length;
    const alivePercent = ((aliveCount / totalChars) * 100).toFixed(1);
    const deadPercent = ((deadCount / totalChars) * 100).toFixed(1);
  
    return (
      <div className="stats-grid">
        <div className="stat-card">👥 Total Characters: <b>{totalChars}</b></div>
        <div className="stat-card">📺 Total Episodes: <b>{totalEpisodes ?? '...'}</b></div>
        <div className="stat-card">🔬 Most Common Species: <b>{mostCommonSpecies}</b></div>
        <div className="stat-card">
          ❤️ {alivePercent}% Alive / ☠️ {deadPercent}% Dead
        </div>
      </div>
    );
  }
export default Stats;