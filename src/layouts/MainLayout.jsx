import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <main className='font-primary'>
            <Navbar />

            <Outlet />

            <Footer />
        </main>
    );
};

export default MainLayout;