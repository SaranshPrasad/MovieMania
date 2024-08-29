const VideoTitle = ({ title, overview }) => {
    return (
       <div className="pt-[40%] sm:pt-[30%] md:pt-[20%] lg:pt-[15%] xl:pt-[12%] px-6 sm:px-8 md:px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
          <p className="py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
             {overview}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
             <button className="bg-white text-black font-bold py-2 px-8 sm:px-12 md:px-16 text-base sm:text-lg hover:bg-opacity-80 rounded-md">
                ▶️ Play
             </button>
             <button className="bg-white text-black font-bold py-2 px-8 sm:px-12 md:px-16 text-base sm:text-lg bg-opacity-30 rounded-md">
                More Info
             </button>
          </div>
       </div>
    );
 };
 
 export default VideoTitle;
 