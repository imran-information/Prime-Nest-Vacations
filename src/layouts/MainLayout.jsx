import Navbar from '../components/navbar';
import Home from '../pages/Home';

const MainLayout = () => {
    return (
        <main className='font-primary'>
            <Navbar />
            <Home />
            <div className="container mx-auto">
            </div>
        </main>
    );
};

export default MainLayout;