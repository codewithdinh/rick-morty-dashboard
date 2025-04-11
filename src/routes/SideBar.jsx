import { Outlet, Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <header className="title">
                Ricky and Morty Universe Dashboard
                <nav className="sidebar">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>

            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default SideBar;