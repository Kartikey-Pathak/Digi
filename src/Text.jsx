function Text() {
    return (
        <div className=" absolute z-20 flex flex-col justify-start">  
            <div className=" h-7 md:h-10 rounded-xl w-[70vw] max-w-[20rem] md:mt-20 ml-5 md:ml-20 mt-10 border-2 border-gray-400 flex items-center justify-center">
                <span className=" text-sm text-[#5B8FB9]">Empowering Your Business with Innovation</span>
            </div>

            {/* Title Part */}
            <div className="m-5 md:ml-20 md:mt-10 w-[70vw] max-w-[30rem] flex flex-col gap-3">
                <h2 className="text-3xl font-bold text-white md:text-6xl">What We Offer</h2>
                <p className=" text-white">From stunning web applications to performance-driven digital marketing, we provide everything you need to grow your online presence.</p>
            </div>
            
            {/* Button Part */}
            <div className=" m-5 md:ml-20 md:mt-10 glass h-9 md:h-12 w-[35vw] max-w-[15rem] rounded-xl border-2 cursor-pointer hover:scale-105 transition-all hover:text-black hover:font-bold animated-border shadow-black backdrop-blur-2xl flex justify-center items-center ">Get Started Now</div>
        </div>
    )
}
export default Text;