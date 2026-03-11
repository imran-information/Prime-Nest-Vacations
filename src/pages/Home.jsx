import Amenities from '../components/homePage/Amenities';
import Banner from '../components/homePage/Banner';
import LocationSection from '../components/homePage/LocationSection';
import LuxuryVacation from '../components/homePage/LuxuryVacation';
import NaturesPlayground from '../components/homePage/NaturesPlayground';

const Home = () => {
    return (
        <>
            <Banner />
            <LuxuryVacation />
            <NaturesPlayground />
            <LocationSection />
            <Amenities />
        </>
    );
};

export default Home;