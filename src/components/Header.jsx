import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="title">
            Ricky and Morty Universe Dashboard
            <nav className="sidebar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
};

export default Header;