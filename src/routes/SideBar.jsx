import { Outlet, Link } from 'react-router-dom';
import Header from '../components/Header';

const SideBar = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default SideBar;