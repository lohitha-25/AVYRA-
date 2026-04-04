import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldAlert, CloudRain, Sun } from 'lucide-react';
import { useState } from 'react';

export default function ZoneSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};
  
  const [selectedZone, setSelectedZone] = useState<string>('');

  const handleNext = () => {
    if (selectedZone) {
      navigate('/policies', { state: { ...data, zone: selectedZone } });
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-4 animate-fade-in relative w-full overflow-y-auto">
      <div className="w-full max-w-md mx-auto mt-10">
        <div className="flex flex-col items-center mb-8 text-center pt-8">
          <div className="bg-white/5 p-4 rounded-full border border-white/10 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <MapPin size={36} className="text-accent-base" />
          </div>
          <h1 className="text-3xl font-display font-bold">Zone Selection</h1>
          <p className="text-secondary text-sm mt-2">Step 2 of 3: Primary Operating Area</p>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          
          <button 
            onClick={() => setSelectedZone('Flood-prone')}
            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${selectedZone === 'Flood-prone' ? 'bg-danger-base/10 border-danger-base shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'glass-panel hover:bg-white/5'}`}
          >
            <div className={`p-3 rounded-full ${selectedZone === 'Flood-prone' ? 'bg-danger-base/20 text-danger-base' : 'bg-white/5 text-white'}`}>
               <CloudRain size={24} />
            </div>
            <div>
              <h3 className={`text-lg font-bold mb-1 ${selectedZone === 'Flood-prone' ? 'text-danger-base' : 'text-white'}`}>Flood-prone</h3>
              <p className="text-secondary text-sm">High risk of waterlogging. Recommended for Madhapur, Hi-Tech City during heavy monsoon.</p>
            </div>
          </button>

          <button 
            onClick={() => setSelectedZone('Moderate')}
            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${selectedZone === 'Moderate' ? 'bg-warning-base/10 border-warning-base shadow-[0_0_20px_rgba(245,158,11,0.2)]' : 'glass-panel hover:bg-white/5'}`}
          >
            <div className={`p-3 rounded-full ${selectedZone === 'Moderate' ? 'bg-warning-base/20 text-warning-base' : 'bg-white/5 text-white'}`}>
               <ShieldAlert size={24} />
            </div>
            <div>
              <h3 className={`text-lg font-bold mb-1 ${selectedZone === 'Moderate' ? 'text-warning-base' : 'text-white'}`}>Moderate</h3>
              <p className="text-secondary text-sm">Occasional disruptions. Covers standard residential blocks in Hyderabad.</p>
            </div>
          </button>

          <button 
            onClick={() => setSelectedZone('Low Risk')}
            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${selectedZone === 'Low Risk' ? 'bg-success-base/10 border-success-base shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'glass-panel hover:bg-white/5'}`}
          >
            <div className={`p-3 rounded-full ${selectedZone === 'Low Risk' ? 'bg-success-base/20 text-success-base' : 'bg-white/5 text-white'}`}>
               <Sun size={24} />
            </div>
            <div>
              <h3 className={`text-lg font-bold mb-1 ${selectedZone === 'Low Risk' ? 'text-success-base' : 'text-white'}`}>Low Risk</h3>
              <p className="text-secondary text-sm">Elevated areas with minimal weather disruption history. Lower premium rates.</p>
            </div>
          </button>

        </div>

        <div className="mt-4 mb-12">
          <button 
            onClick={handleNext}
            disabled={!selectedZone}
            className={`btn w-full py-4 text-lg rounded-xl flex items-center justify-center gap-2 ${!selectedZone ? 'bg-white/10 text-white/50 cursor-not-allowed' : 'btn-primary'}`}
          >
            Next <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
