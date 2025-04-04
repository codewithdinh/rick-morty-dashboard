const Filters = ({ search, setSearch }) => {
    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="searchBox"
            />
            {/* Drop downs for other filters */}
        </div>
    );
};

export default Filters;
