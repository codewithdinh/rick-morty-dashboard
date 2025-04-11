import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY;

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    
    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}?api_key=${API_KEY}`);
            const data = await response.json();
            setCharacter(data);
        };
        fetchCharacter().catch(console.error);
    }, [id]);


    return (
        <div>
        <h1>Character Details</h1>
        {/* Character details will be displayed here */}
        {character && (
            <div>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
                <p><strong>Species:</strong> {character.species}</p>
                <p><strong>Status:</strong> {character.status}</p>
                <p><strong>Gender:</strong> {character.gender}</p>
                <p><strong>Origin:</strong> {character.origin.name}</p>
                <p><strong>Location:</strong> {character.location.name}</p>
                <p><strong>Episodes:</strong> {character.episode.length}</p>
                <p><strong>Last Seen:</strong> {character.location.name}</p>
                <p><strong>First Seen:</strong> {character.episode[0]}</p>
                <p><strong>Created:</strong> {new Date(character.created).toLocaleDateString()}</p>
                
            </div>
        )}
        </div>
    );
}

export default CharacterDetails;
  