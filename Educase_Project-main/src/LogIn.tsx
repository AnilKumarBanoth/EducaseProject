import { useNavigate } from "react-router-dom"
import "./index.css"

export const LogIn:React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="h-screen w-screen flex justify-center items-center animated-bg relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl float-animation"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '1.5s'}}></div>
            
            {/* Back Button */}
            <button 
                onClick={() => navigate("/")}
                className="absolute top-6 left-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>
            
            {/* Main Card */}
            <div className="w-full max-w-md p-6 fade-in">
                <div className="glass-card p-8 md:p-10 rounded-3xl card-hover">
                    {/* Header Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-effect">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                        </div>
                    </div>
                    
                    {/* Title */}
                    <h1 className="font-bold text-2xl md:text-3xl text-center mb-2 text-white">
                        Sign in to PopX
                    </h1>
                    <p className="text-gray-400 text-center text-sm mb-8">
                        Welcome back! Please enter your details.
                    </p>
                    
                    {/* Form */}
                    <form className="flex flex-col gap-5">
                        <div className="relative">
                            <label htmlFor="email" className="text-purple-400 ml-2 mb-1 block text-sm font-medium">
                                Email Address
                            </label>
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input 
                                    type="email" 
                                    placeholder="Enter email address"
                                    className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none pro-input focus:border-purple-500"
                                />
                            </div>
                        </div>
                        
                        <div className="relative">
                            <label htmlFor="pass" className="text-purple-400 ml-2 mb-1 block text-sm font-medium">
                                Password
                            </label>
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <input 
                                    type="password" 
                                    placeholder="Enter password"
                                    className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none pro-input focus:border-purple-500"
                                />
                            </div>
                        </div>
                        
                        <button 
                            onClick={() => navigate("/profile1")}
                            className="w-full h-12 mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl pro-button flex items-center justify-center gap-2"
                        >
                            <span>Sign In</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </form>
                    
                    {/* Sign up link */}
                    <p className="text-center mt-6 text-gray-400">
                        Don't have an account?{" "}
                        <button 
                            onClick={() => navigate("/signin")}
                            className="text-purple-400 font-semibold hover:text-pink-400 transition-colors"
                        >
                            Sign up
                        </button>
                    </p>
                </div>
            </div>
            
            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        </div>
    )
}
