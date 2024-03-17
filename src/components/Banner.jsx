

const Banner = () => {
    return (
        <div className="bg-[url('http://res.cloudinary.com/dwmwpmrpo/image/upload/v1710554533/k1uvv0c1xpntdywouctz.png')] h-[500px] bg-center bg-cover rounded-3xl mt-5 mb-10 flex items-center">
          <div className="text-center mx-auto max-w-[900px] space-y-5">
            <h1 className=" text-2xl md:text-5xl text-white font-bold leading-[70px]">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

            <div className="space-x-6 py-4">
             <button className=" bg-green-500 rounded-full btn active:scale-105 text-black ">Explore Now</button>
             <button className=" bg-transparent rounded-full btn active:scale-105 text-white hover:text-black">Our Feedback</button>
          </div>
          </div>

          
        </div>
    );
};

export default Banner;