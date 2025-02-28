
const Home = () => {
    
    return (
        
        <div className="Home w-full flex flex-col items-center">
            
            <h1 className="relative w-96 h-52 flex justify-center items-center content-center">
                <div className="w-40 h-40 relative rounded-full opacity-40">
                    <div className="w-[90%] h-[90%] rounded-full absolute-centered" />
                </div>
                <div className="w-full absolute-centered text-6xl font-AlexBrush">
                    {process.env.APP_TITLE || 'Vite Base'}
                </div>
            </h1>
            
            <div className="w-full">
                <p className="mt-10 text-gray-500 text-base">
                    VITE + REACT + TAILWIND CSS BOILERPLATE
                </p>
            </div>
        
        </div>
        
    )
    
}

export default Home
