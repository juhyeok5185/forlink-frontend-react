import { Link } from 'react-router-dom';

const Header = () => (
    <header style={{ padding: '20px', background: '#eee' }}>
        <nav>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/about">About</Link>
        </nav>
    </header>
);

export default Header;