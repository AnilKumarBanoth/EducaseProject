import { useNavigate } from "react-router-dom"
import "./index.css"

export const Welcome:React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="h-screen w-screen flex justify-center items-center animated-bg relative overflow-hidden">
            {/* Decorative floating circles */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl float-animation"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
            
            {/* Main Card */}
            <div className="h-screen w-screen flex justify-center items-center p-4">
                <div className="glass-card w-full max-w-md p-8 md:p-10 rounded-3xl float-animation fade-in">
                    {/* Logo/Brand Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-effect">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                    
                    {/* Title */}
                    <h1 className="font-black text-3xl md:text-4xl text-center mb-4 fade-in delay-100">
                        <span className="text-gradient">Welcome to PopX</span>
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-gray-300 text-center text-lg mb-8 leading-relaxed fade-in delay-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Build your future with us.
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex flex-col gap-4 fade-in delay-300">
                        <button 
                            onClick={() => navigate("/signin")}
                            className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl pro-button pulse-glow flex items-center justify-center gap-2"
                        >
                            <span>Create Account</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        
                        <button 
                            onClick={() => navigate("/login")}
                            className="w-full h-14 bg-white/10 border-2 border-purple-500/50 text-white font-semibold rounded-xl pro-button hover:bg-white/20 flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Already Registered? Login</span>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        </div>
    )
}
