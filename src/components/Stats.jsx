const Stats = ({ characters }) => {
    const total = characters.length;
    const alive = characters.filter(c => c.status === "Alive").length;
    const dead = characters.filter(c => c.status === "Dead").length;
    const unknown = total - alive - dead;

    return (
        <div className="stats">
            <div>Total Characters: {total}</div>
            <div>Alive: {alive}</div>
            <div>Dead: {dead}</div>
            <div>Unknown: {unknown}</div>
        </div>
    )
}

export default Stats;