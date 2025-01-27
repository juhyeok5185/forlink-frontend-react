import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const MainLayout = () => (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);

export default MainLayout;