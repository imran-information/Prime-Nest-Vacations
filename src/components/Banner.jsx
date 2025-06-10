import Brand from './Brand';

const Banner = () => {
    return (
        <div className="bg-[url('/src/assets/banner.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen relative -bg-linear-300">

            
            <div className="w-full h-[700px] flex items-center justify-start px-20">
                <div className="max-w-[900px] space-y-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                        Turning Your Real Estate Dreams into Reality
                    </h1>
                    <p className="text-base md:text-lg text-white">
                        Forget clunky application forms. We offer a modern, user-friendly platform that makes applying for a job a breeze.
                    </p>
                    <div className="relative">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search properties..."
                            className="w-full md:w-2/3 px-4 py-3 rounded-full  border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
                        />
                        <button className='flex items-center gap-2 bg-amber-300 px-4 py-2  hover:bg-amber-400 rounded-full absolute top-1 right-76'>Search for booking</button>
                    </div>
                </div>
            </div>
            <Brand/>
        </div >
    );
};

export default Banner;
