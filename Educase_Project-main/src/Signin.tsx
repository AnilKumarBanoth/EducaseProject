import { useNavigate } from "react-router-dom"
import "./index.css"

export const Signin:React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="h-screen w-screen flex justify-center items-center animated-bg relative overflow-hidden p-4">
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-36 h-36 bg-purple-500/20 rounded-full blur-xl float-animation"></div>
            <div className="absolute bottom-20 left-20 w-28 h-28 bg-pink-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '1s'}}></div>
            
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
            <div className="w-full max-w-md fade-in">
                <div className="glass-card p-8 rounded-3xl card-hover">
                    {/* Header */}
                    <div className="flex justify-center mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-effect">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                    </div>
                    
                    <h1 className="font-bold text-2xl text-center mb-2 text-white">
                        Create your PopX account
                    </h1>
                    <p className="text-gray-400 text-center text-sm mb-6">
                        Join us and start your journey today
                    </p>
                    
                    {/* Form */}
                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="text-purple-400 ml-2 mb-1 block text-sm font-medium">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Marry Doe"
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none pro-input focus:border-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label className="text-purple-400 ml-2 mb-1 block text-sm font-medium">Phone Number</label>
                            <input 
                                type="tel" 
                                placeholder="+1 234 567 8900"
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none pro-input focus:border-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label className="text-purple-400 ml-2 mb-1 block text-sm font-medium">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="marry@example.com"
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none pro-input focus:border-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label className="text-purple-400 ml-2 mb-1 block text-sm font-medium">Password</label>
                            <input 
                                type="password" 
                                placeholder="••••••••"
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none pro-input focus:border-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label className="text-purple-400 ml-2 mb-1 block text-sm font-medium">Company Name</label>
                            <input 
                                type="text" 
                                placeholder="Your Company Ltd."
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none pro-input focus:border-purple-500"
                            />
                        </div>
                        
                        {/* Radio Buttons */}
                        <div className="mt-2">
                            <label className="text-gray-300 ml-2 block text-sm font-medium mb-3">Are you an Agency?</label>
                            <div className="flex flex-row gap-6 ml-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input 
                                        type="radio" 
                                        name="choice" 
                                        value="Yes" 
                                        className="custom-radio"
                                    />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">Yes</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input 
                                        type="radio" 
                                        name="choice" 
                                        value="No" 
                                        className="custom-radio"
                                    />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">No</span>
                                </label>
                            </div>
                        </div>
                        
                        <button 
                            onClick={() => navigate("/profile1")}
                            className="w-full h-12 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl pro-button flex items-center justify-center gap-2"
                        >
                            <span>Create Account</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </form>
                    
                    {/* Sign in link */}
                    <p className="text-center mt-6 text-gray-400">
                        Already have an account?{" "}
                        <button 
                            onClick={() => navigate("/login")}
                            className="text-purple-400 font-semibold hover:text-pink-400 transition-colors"
                        >
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
            
            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        </div>
    )
}
