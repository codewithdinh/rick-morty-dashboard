const CharacterCard = ({ character }) => {
    return (
        <div className="cards">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.species} - {character.status}</p>
            <p>{character.origin.name}</p>
        </div>
    )
}

export default CharacterCard;