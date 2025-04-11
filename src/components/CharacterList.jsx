import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
    return (
        <div className="character-table">
            <div className="character-row header">
                <div>Image</div>
                <div>Name</div>
                <div>Species</div>
                <div>Status</div>
                <div>Origin</div>
                <div>Last Seen</div>
                {/* <div>Episodes</div> */}
            </div>
            {characters.map((c) => (
                <div key={c.id} className="character-row">
                    <div><img src={c.image} alt={c.name} className="character-image" /></div>
                    <div><Link to={`/characters/${c.id}`}>{c.name}</Link></div>
                    <div>{c.species}</div>
                    <div>{c.status}</div>
                    <div>{c.origin.name}</div>
                    <div>{c.location.name}</div>
                    {/* <div>{c.episode.length}</div> */}
                </div>
            ))}
        </div>
    );
};

export default CharacterList;