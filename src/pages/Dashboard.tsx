import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogOut, CloudRain, AlertTriangle, Wind, Target, Activity, CheckCircle2, History, ShieldAlert } from 'lucide-react';
import SmartSuggestionCard from '../components/SmartSuggestionCard';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};
  
  const name = data.name || 'Valued Partner';
  const score = data.score || 88;
  const premium = data.premium || 49;
  const payout = data.payout || 2500;
  const zone = data.zone || 'Flood-prone';

  return (
    <div className="container pt-8 pb-20 animate-fade-in max-w-5xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-1">
            <span className="text-white">Dashboard</span>
          </h1>
          <p className="text-text-secondary text-sm">Welcome back, {name}. Your active coverage is live.</p>
        </div>
        
        <button
          onClick={() => navigate('/register')}
          className="text-xs text-text-secondary hover:text-white flex items-center gap-2 transition-colors duration-200 glass-panel px-3 py-2 rounded-lg"
        >
          <LogOut size={14} /> Log Out
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Income Stability Score (0-100) */}
            <div className="glass-panel p-6 border-t-4 border-t-accent-base relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-accent-base/5 to-transparent"></div>
              <h2 className="text-lg font-bold text-white mb-2 relative z-10 flex items-center gap-2">
                <Target size={18} className="text-accent-base" />
                Income Stability Score
              </h2>
              
              <div className="flex items-center justify-center mt-6 relative z-10">
                <div className="relative w-36 h-36 rounded-full border-[10px] border-white/5 flex items-center justify-center bg-black/20">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle 
                      cx="72" cy="72" r="62" 
                      className="stroke-accent-base drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" 
                      strokeWidth="10" fill="none" 
                      strokeDasharray="390" strokeDashoffset={390 - (390 * score) / 100}
                      strokeLinecap="round" 
                      style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                    />
                  </svg>
                  <div className="text-center">
                    <span className="text-4xl font-display font-extrabold text-white drop-shadow-md">
                      {score}
                    </span>
                    <span className="block text-accent-base font-bold text-[10px] mt-1 uppercase tracking-wider">
                      Excellent
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Premium Breakdown */}
            <div className="glass-panel p-6 border border-white/5">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShieldAlert size={18} className="text-text-secondary" />
                Premium Breakdown
              </h2>
              <div className="bg-black/30 rounded-xl p-4 space-y-3 font-mono text-sm border border-white/5 shadow-inner">
                <div className="flex justify-between items-center text-text-secondary">
                  <span>Base Premium</span>
                  <span className="text-white">₹49</span>
                </div>
                <div className="flex justify-between items-center text-text-secondary">
                  <span>Zone Multiplier ({zone})</span>
                  <span className="text-danger-base shrink-0">× 1.3</span>
                </div>
                <div className="flex justify-between items-center text-text-secondary">
                  <span>Season (Monsoon)</span>
                  <span className="text-warning-base shrink-0">× 1.2</span>
                </div>
                <div className="flex justify-between items-center text-text-secondary pb-2 border-b border-white/10">
                  <span>Stability Discount</span>
                  <span className="text-success-base shrink-0">× 0.9</span>
                </div>
                <div className="flex justify-between items-center font-bold text-[15px] pt-1">
                  <span className="text-white">Final Weekly</span>
                  <span className="text-accent-base">₹69</span>
                </div>
              </div>
              <p className="text-xs text-text-tertiary mt-3 leading-relaxed">Calculated dynamically via AI routing: Base × Zone × Season × Stability</p>
            </div>
          </div>

          {/* 6. Estimated Payout Card */}
          <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-indigo-900/50 via-blue-900/40 to-black/60 border border-success-base/40 shadow-[0_10px_40px_rgba(16,185,129,0.15)] group backdrop-blur-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
               <ShieldAlert size={180} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-success-base/20 rounded-xl">
                    <Activity className="text-success-base animate-pulse" size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Dynamic Payout</h3>
                </div>
                <p className="text-success-base/80 font-medium text-sm">Parametric triggers armed. Verified 1 min ago.</p>
              </div>
              
              <div className="text-left md:text-right p-5 bg-black/40 rounded-2xl border border-white/10 flex flex-col items-start md:items-end w-full md:w-auto">
                <div className="flex justify-between md:justify-end gap-4 w-full text-sm text-text-secondary mb-1">
                  <span>Target:</span> <span className="font-bold text-white">₹700</span>
                </div>
                <div className="flex justify-between md:justify-end gap-4 w-full text-sm text-text-secondary mb-3 pb-3 border-b border-white/10">
                  <span>Earned:</span> <span className="font-bold text-white">- ₹{data.avg_earnings || 600}</span>
                </div>
                <p className="text-xs text-text-secondary uppercase tracking-widest font-bold mb-1">Estimated Payout</p>
                <div className="flex items-baseline gap-1 md:justify-end">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">₹{Math.max(0, 700 - Number(data.avg_earnings || 600))}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Claims History table */}
          <div className="glass-panel p-6 border border-white/5">
             <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <History size={18} className="text-text-secondary" />
                Claims History
             </h2>
             <div className="overflow-x-auto">
               <table className="w-full text-left text-sm text-text-secondary">
                 <thead className="bg-white/5 text-white/70 uppercase text-xs">
                   <tr>
                     <th className="px-4 py-3 rounded-tl-lg">Date</th>
                     <th className="px-4 py-3">Trigger Event</th>
                     <th className="px-4 py-3">Status</th>
                     <th className="px-4 py-3 rounded-tr-lg text-right">Amount</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                   <tr className="hover:bg-white/5 transition-colors">
                     <td className="px-4 py-3">12 Jul 2025</td>
                     <td className="px-4 py-3 text-white">Severe Waterlogging</td>
                     <td className="px-4 py-3"><span className="badge badge-success text-[10px]">Paid</span></td>
                     <td className="px-4 py-3 font-semibold text-white text-right">₹800</td>
                   </tr>
                   <tr className="hover:bg-white/5 transition-colors">
                     <td className="px-4 py-3">04 Jun 2025</td>
                     <td className="px-4 py-3 text-white">Heatwave Level 4</td>
                     <td className="px-4 py-3"><span className="badge badge-success text-[10px]">Paid</span></td>
                     <td className="px-4 py-3 font-semibold text-white text-right">₹350</td>
                   </tr>
                   <tr className="hover:bg-white/5 transition-colors">
                     <td className="px-4 py-3 text-text-tertiary">19 Aug 2024</td>
                     <td className="px-4 py-3 text-text-tertiary">Flash Floods</td>
                     <td className="px-4 py-3"><span className="text-text-tertiary text-xs">Closed</span></td>
                     <td className="px-4 py-3 text-text-tertiary text-right">₹1200</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>
          
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* 3. Smart Suggestion Card Component */}
          <SmartSuggestionCard />
          
          {/* 4. Live Trigger Status */}
          <div className="glass-panel p-6 border-l-4 border-l-warning-base shadow-[0_0_20px_rgba(245,158,11,0.05)]">
            <h3 className="text-lg font-bold text-white mb-4">Live Trigger Status</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-center bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                  <CloudRain size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Rain Alert</p>
                  <p className="text-xs text-warning-base font-medium">Expected at 3 PM in Madhapur</p>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="p-3 rounded-full bg-success-base/20 text-success-base">
                  <Wind size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">AQI Status</p>
                  <p className="text-xs text-text-secondary font-medium">Clear / Nominal (110)</p>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-text-tertiary text-center mt-4">Synced 2 mins ago via AWS OpenData</p>
          </div>

        </div>
      </div>
    </div>
  );
}