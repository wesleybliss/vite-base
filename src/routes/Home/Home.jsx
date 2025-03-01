
const Home = () => {
    
    return (
        
        <div className="Home w-full flex flex-col items-center gap-4">
            
            <h1 className="flex justify-center items-center content-center mt-20">
                <div className="w-full text-6xl font-AlexBrush">
                    {process.env.APP_TITLE || 'Vite Base'}
                </div>
            </h1>
            
            <div className="w-full text-sm">
                VITE + REACT + TAILWIND CSS BOILERPLATE
            </div>
        
        </div>
        
    )
    
}

export default Home
