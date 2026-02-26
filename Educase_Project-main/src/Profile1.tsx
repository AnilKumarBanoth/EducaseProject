import { useNavigate } from "react-router-dom"
import "./index.css"
import camera from "./camera.png"

export const Profile:React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="h-screen w-screen flex justify-center items-center animated-bg relative overflow-hidden p-4">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl float-animation"></div>
            <div className="absolute top-1/3 right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-blue-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
            
            {/* Back Button */}
            <button 
                onClick={() => navigate("/login")}
                className="absolute top-6 left-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>
            
            {/* Main Card */}
            <div className="w-full max-w-md fade-in">
                <div className="glass-card p-6 rounded-3xl card-hover">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-white">Account Settings</h2>
                        <button className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/40 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Profile Section */}
                    <section className="bg-white/5 p-5 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-4 relative">
                            {/* Avatar with animated ring */}
                            <div className="relative avatar-ring">
                                <img 
                                    src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                                    alt="Profile" 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                                />
                                <div className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-full cursor-pointer hover:scale-110 transition-all duration-300 glow-effect">
                                    <img src={camera} alt="Edit" className="w-4 h-4" />
                                </div>
                            </div>
                            
                            <div>
                                <h2 className="font-bold text-white text-lg">Marry Doe</h2>
                                <p className="text-purple-400 text-sm">Marry@Gmail.Com</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm mt-5 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil excepturi laboriosam repellendus quae nam nobis, minima expedita itaque voluptatum, temporibus odio nostrum omnis, aperiam ipsum! Non quibusdam cumque quas.
                        </p>
                        
                        {/* Additional Info Cards */}
                        <div className="grid grid-cols-2 gap-3 mt-5">
                            <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20">
                                <p className="text-purple-400 text-xs">Company</p>
                                <p className="text-white text-sm font-medium">PopX Inc.</p>
                            </div>
                            <div className="bg-pink-500/10 p-3 rounded-xl border border-pink-500/20">
                                <p className="text-pink-400 text-xs">Role</p>
                                <p className="text-white text-sm font-medium">Developer</p>
                            </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-5">
                            <button className="flex-1 h-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-xl pro-button">
                                Edit Profile
                            </button>
                            <button className="w-10 h-10 bg-white/10 border border-white/20 text-white rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            
            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        </div>
    )
}
