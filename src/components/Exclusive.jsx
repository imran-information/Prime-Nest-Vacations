import cardImg from '../assets/card1.png'

const Exclusive = () => {
    return (
        <div className='my-30 mx-20'>
            <h1 className="text-4xl  text-center">Exclusive properties by HomeQuest</h1>

            <div className="grid grid-cols-3 gap-5 my-10">
                <div className="w-auto relative">
                    <img className='rounded-2xl' src={cardImg} alt="" />
                    <p className='my-2'>$1,405,000</p>
                    <h4>Modern 3-Bedroom Apartment in Gulshan, Dhaka</h4>
                    <div className="flex gap-5">
                        <p>4,500 sq. ft.</p>
                        <p>4 Bed</p>
                        <p>2 Bath</p>
                    </div>
                    <p className='bg-white p-2 rounded-2xl absolute top-3 left-3'>For Sale</p>
                </div>
                <div className="w-auto relative">
                    <img className='rounded-2xl' src={cardImg} alt="" />
                    <p className='my-2'>$1,405,000</p>
                    <h4>Modern 3-Bedroom Apartment in Gulshan, Dhaka</h4>
                    <div className="flex gap-5">
                        <p>4,500 sq. ft.</p>
                        <p>4 Bed</p>
                        <p>2 Bath</p>
                    </div>
                    <p className='bg-white p-2 rounded-2xl absolute top-3 left-3'>For Sale</p>
                </div>
                <div className="w-auto relative">
                    <img className='rounded-2xl' src={cardImg} alt="" />
                    <p className='my-2'>$1,405,000</p>
                    <h4>Modern 3-Bedroom Apartment in Gulshan, Dhaka</h4>
                    <div className="flex gap-5">
                        <p>4,500 sq. ft.</p>
                        <p>4 Bed</p>
                        <p>2 Bath</p>
                    </div>
                    <p className='bg-white p-2 rounded-2xl absolute top-3 left-3'>For Sale</p>
                </div>
                <div className="w-auto relative">
                    <img className='rounded-2xl' src={cardImg} alt="" />
                    <p className='my-2'>$1,405,000</p>
                    <h4>Modern 3-Bedroom Apartment in Gulshan, Dhaka</h4>
                    <div className="flex gap-5">
                        <p>4,500 sq. ft.</p>
                        <p>4 Bed</p>
                        <p>2 Bath</p>
                    </div>
                    <p className='bg-white p-2 rounded-2xl absolute top-3 left-3'>For Sale</p>
                </div>
                <div className="w-auto relative">
                    <img className='rounded-2xl' src={cardImg} alt="" />
                    <p className='my-2'>$1,405,000</p>
                    <h4>Modern 3-Bedroom Apartment in Gulshan, Dhaka</h4>
                    <div className="flex gap-5">
                        <p>4,500 sq. ft.</p>
                        <p>4 Bed</p>
                        <p>2 Bath</p>
                    </div>
                    <p className='bg-white p-2 rounded-2xl absolute top-3 left-3'>For Sale</p>
                </div>
                <div className="w-auto relative">
                    <img className='rounded-2xl' src={cardImg} alt="" />
                    <p className='my-2'>$1,405,000</p>
                    <h4>Modern 3-Bedroom Apartment in Gulshan, Dhaka</h4>
                    <div className="flex gap-5">
                        <p>4,500 sq. ft.</p>
                        <p>4 Bed</p>
                        <p>2 Bath</p>
                    </div>
                    <p className='bg-white p-2 rounded-2xl absolute top-3 left-3'>For Sale</p>
                </div>
            </div>
            <div className="flex items-center justify-center w-full mt-20">
                <button className='gap-2 bg-amber-300 px-4 py-2  hover:bg-amber-400 rounded-full '>Explore All Listings</button>
            </div>
        </div>
    );
};

export default Exclusive;