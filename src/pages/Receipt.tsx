import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronLeft, Download, ShieldCheck } from 'lucide-react';

export default function Receipt() {
  const navigate = useNavigate();
  const date = new Date().toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric'
  });

  return (
    <div className="container min-h-[90vh] flex items-center justify-center py-12 animate-fade-in relative z-10">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="w-full max-w-md relative glass-panel border border-green-500/20 shadow-[0_8px_40px_rgba(16,185,129,0.15)] p-0 overflow-hidden">
        
        {/* Header section with gradient background */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-8 text-center text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="flex justify-center mb-5 relative z-10">
             <div className="bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/30 shadow-lg">
                <CheckCircle2 size={42} className="text-white drop-shadow" strokeWidth={2.5} />
             </div>
          </div>
          <h1 className="text-2xl font-display font-extrabold tracking-tight mb-2 relative z-10">Payment Successful</h1>
          <p className="text-emerald-100 font-medium tracking-wide text-sm opacity-90 relative z-10">
            Transaction ID: TXN-{Math.floor(100000 + Math.random() * 900000)}
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="text-center mb-8 pb-6 border-b border-white/5 relative">
             <h2 className="text-xl font-bold text-white mb-1 tracking-tight">Payout Receipt</h2>
             <p className="text-text-secondary text-sm">AVYRA Parametric Relief System</p>
          </div>
          
          {/* Worker details */}
          <div className="flex justify-between items-center mb-4">
             <div className="text-text-secondary text-sm font-medium">Date</div>
             <div className="font-semibold text-white">{date}</div>
          </div>
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
             <div className="text-text-secondary text-sm font-medium">Worker Name</div>
             <div className="font-semibold text-white flex items-center gap-1.5">
               Salman 
               <ShieldCheck size={16} className="text-green-400" /> 
             </div>
          </div>

          {/* Breakdown / Ledger */}
          <div className="space-y-4 mb-8">
             <div className="flex justify-between items-center">
                <span className="text-text-secondary font-medium">Target Earnings</span>
                <span className="font-semibold text-white">₹700</span>
             </div>
             
             <div className="flex justify-between items-center">
                <span className="text-text-secondary font-medium">Earned Before Disruption</span>
                <span className="font-semibold text-white">₹450</span>
             </div>

             <div className="flex justify-between items-center pt-2">
                <span className="text-text-secondary font-medium flex items-center gap-2">Auto Payout</span>
                <span className="font-bold text-green-400">₹250</span>
             </div>
          </div>

          {/* Total Secured Box */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 flex justify-between items-center mb-10 shadow-inner">
             <span className="text-lg font-bold text-white tracking-tight">Total Secured</span>
             <span className="text-3xl font-extrabold text-green-400 drop-shadow-md">₹700</span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4">
             <button 
                onClick={() => navigate('/dashboard')}
                className="btn btn-secondary flex-1 py-3 text-sm font-semibold hover:bg-white/10"
             >
                <ChevronLeft size={18} /> Dashboard
             </button>
             <button className="bg-green-600 hover:bg-emerald-500 text-white flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] border border-green-500 hover:-translate-y-0.5">
                <Download size={18} /> Save PDF
             </button>
          </div>
        </div>

      </div>
    </div>
  );
}
