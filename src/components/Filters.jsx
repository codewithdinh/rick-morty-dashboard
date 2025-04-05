const Filters = ({
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    speciesFilter,
    setSpeciesFilter,
    genderFilter,
    setGenderFilter,
    originFilter,
    setOriginFilter,
    speciesOptions,
    originOptions,
}) => {
    return (
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="searchBox"
            />
            {/* Drop downs for other filters */}

            <div className="filter-group">
                <span>Status:</span>
                {['All', 'Alive', 'Dead', 'unknown'].map(status => (
                    <button
                        key={status}
                        className={statusFilter === status ? 'active' : ''}
                        onClick={() => setStatusFilter(status)}
                    >
                        {status}
                    </button>
                ))}
            </div>


            <div className="filter-group">
                <label>Species:</label>
                <select value={speciesFilter} onChange={e => setSpeciesFilter(e.target.value)}>
                    <option value="All">All</option>
                    {speciesOptions.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>


            <div className="filter-group">
                <span>Gender:</span>
                {['All', 'Male', 'Female', 'Genderless', 'unknown'].map(g => (
                    <button
                        key={g}
                        className={genderFilter === g ? 'active' : ''}
                        onClick={() => setGenderFilter(g)}
                    >
                        {g === 'Male' ? '👨' : g === 'Female' ? '👩' : g === 'Genderless' ? '⚪' : g === 'unknown' ? '❓' : 'All'}
                    </button>
                ))}
            </div>

            <div className="filter-group">
                <span>Origin:</span>
                <select
                    value={originFilter}
                    onChange={(e) => setOriginFilter(e.target.value)}
                >

                    <option value="All">All Origins</option>
                    {originOptions.map((o) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filters;
