
import Banner from '../components/homePage/Banner';
import FiveStarSection from '../components/homePage/FiveStarSection';
import LocationSection from '../components/homePage/LocationSection';
import LuxuryVacation from '../components/homePage/LuxuryVacation';
import NaturesPlayground from '../components/homePage/NaturesPlayground';
import Testimonials from '../components/homePage/Testimonials';
import WaterActivities from '../components/homePage/WaterActivities';

const Home = () => {
    return (
        <>
            <Banner />
            <LuxuryVacation />
            <NaturesPlayground />
            <LocationSection />
            <FiveStarSection />
            <WaterActivities />
            <Testimonials />
        </>
    );
};

export default Home;