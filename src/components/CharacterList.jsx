import CharacterCard from "./CharacterCard.jsx";

const CharacterList = ({ characters }) => {
    return (
        <div className="cards-list">
            {characters.map(c => (
                <CharacterCard key={c.id} character={c}></CharacterCard>
            ))}
        </div>
    )
};

export default CharacterList;