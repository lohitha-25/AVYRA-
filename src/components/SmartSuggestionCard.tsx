import { CloudRain, Clock, Coins, Sparkles } from 'lucide-react';

export default function SmartSuggestionCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl p-1 mb-6 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] w-full">
      {/* Animated Gradient Border Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl opacity-70 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
      
      {/* Heavy Blur Glow Behind */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 z-0"></div>

      {/* Main Inner Content Window */}
      <div className="relative z-10 bg-[#0a0a0b]/90 backdrop-blur-2xl rounded-[22px] p-6 sm:p-8 h-full border border-white/10 shadow-inner">
        
        {/* Floating Decorative Elements */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <Sparkles className="text-purple-300" size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 tracking-tight">
              AI Work Recommendation
            </h3>
          </div>
          <div className="badge px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-white/80 font-medium rounded-full flex items-center gap-2 backdrop-blur-sm self-start sm:self-auto">
             <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
             Weather-Synced
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 mb-2 relative overflow-hidden group-hover:bg-white/10 transition-colors duration-500">
           
           <p className="text-lg sm:text-xl text-white font-medium leading-relaxed mb-6">
             Work between <span className="text-pink-400 font-bold bg-pink-400/10 px-2 py-0.5 rounded-md">10 AM – 2 PM</span> to maximize earnings before rain.
           </p>

           <div className="flex flex-wrap gap-3 mt-2">
             <div className="flex items-center gap-2 text-sm font-medium text-white/90 bg-black/40 px-3.5 py-2.5 rounded-xl border border-white/5">
               <Clock size={16} className="text-purple-400" />
               <span>4hr Optimal Window</span>
             </div>
             <div className="flex items-center gap-2 text-sm font-medium text-white/90 bg-black/40 px-3.5 py-2.5 rounded-xl border border-white/5">
               <Coins size={16} className="text-yellow-400" />
               <span>Peak Rates active</span>
             </div>
             <div className="flex items-center gap-2 text-sm font-medium text-white/90 bg-black/40 px-3.5 py-2.5 rounded-xl border border-white/5">
               <CloudRain size={16} className="text-blue-400" />
               <span>Storm at 3:00 PM</span>
             </div>
           </div>
           
        </div>
      </div>
    </div>
  );
}
