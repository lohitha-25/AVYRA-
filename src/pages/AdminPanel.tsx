import { useState } from 'react';
import { AlertCircle, CheckCircle, ShieldAlert, Zap } from 'lucide-react';

export default function AdminPanel() {
  const [hasDisrupted, setHasDisrupted] = useState(false);

  const handleDisruption = () => {
    setHasDisrupted(true);
    // In a production environment, this would call an API webhook to execute actual parametric payouts.
  };

  const handleReset = () => {
    setHasDisrupted(false);
  }

  return (
    <div className="container pt-12 pb-20 max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
          Admin Control Panel
        </h1>
        <p className="text-text-secondary text-lg">Simulate environmental disruption events and test auto-payout configurations.</p>
      </div>

      <div className="glass-panel p-8 sm:p-12 mb-8 text-center border-t-4 border-t-danger-base shadow-[0_8px_32px_rgba(239,68,68,0.15)] relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-danger-base/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <div className="p-5 bg-danger-base/10 rounded-full border border-danger-base/30 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <ShieldAlert size={56} className="text-danger-base" />
            </div>
          </div>

          <button 
            onClick={handleDisruption}
            disabled={hasDisrupted}
            className="bg-danger-base hover:bg-red-500 text-white font-bold py-5 px-10 rounded-xl text-xl flex items-center justify-center gap-3 mx-auto w-full max-w-md transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
          >
            <Zap size={26} /> 
            {hasDisrupted ? "Action Triggered" : "Simulate Disruption"}
          </button>

          <div className="mt-8 text-base">
            {!hasDisrupted ? (
              <span className="text-text-secondary flex items-center justify-center gap-2 font-medium">
                <AlertCircle size={18} /> No active disruption
              </span>
            ) : (
              <span className="text-success-base font-semibold flex items-center justify-center gap-2">
                <CheckCircle size={18} /> Disruption triggered successfully
              </span>
            )}
          </div>
        </div>
      </div>

      {hasDisrupted && (
        <div className="glass-panel p-8 mt-8 border border-success-base/40 rounded-2xl animate-fade-in shadow-[0_8px_32px_rgba(16,185,129,0.15)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-success-base/5 to-emerald-500/10 opacity-100 group-hover:opacity-80 transition-opacity"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-left w-full md:w-auto">
              <div className="p-4 bg-success-base/20 border border-success-base/30 rounded-full shadow-inner shrink-0">
                <CheckCircle className="text-success-base" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Claim Auto-Processed</h3>
                <p className="text-success-base/80 text-sm md:text-base font-medium">System instantly detected parametric conditions.</p>
              </div>
            </div>

            <div className="bg-black/40 px-8 py-5 rounded-xl border border-success-base/20 w-full md:w-auto text-center md:text-right shadow-inner">
              <p className="text-sm font-bold text-success-base/80 mb-2 uppercase tracking-wider">Credited to Worker</p>
              <p className="text-5xl md:text-6xl font-extrabold text-success-base drop-shadow-lg tracking-tight">
                ₹250
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-8 text-center border-t border-success-base/10 pt-4">
             <button 
               onClick={handleReset} 
               className="text-sm text-text-tertiary hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
             >
               Reset Simulation
             </button>
          </div>
        </div>
      )}
    </div>
  );
}
