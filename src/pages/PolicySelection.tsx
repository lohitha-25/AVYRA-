import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, Shield, Star, ArrowRight } from 'lucide-react';

const policies = [
  {
    id: 'Basic',
    title: 'Basic Plan',
    icon: <Shield size={32} className="text-secondary mb-4" />,
    description: 'Essential income protection for minor weather disruptions.',
    price: '₹29',
    colorFlow: 'border-white/10'
  },
  {
    id: 'Standard',
    title: 'Standard Plan',
    icon: <ShieldCheck size={32} className="text-accent-base mb-4" />,
    description: 'Comprehensive cover against major temperature and AQI hits.',
    price: '₹49',
    colorFlow: 'border-accent-base/30'
  },
  {
    id: 'Premium',
    title: 'Premium Plan',
    icon: <Star size={32} className="text-warning-base mb-4" />,
    description: 'All-inclusive maximum payout plan covering every scenario.',
    price: '₹79',
    colorFlow: 'border-warning-base/30'
  }
];

export default function PolicySelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state || {}; // data passed from registration

  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<typeof policies[0] | null>(null);

  const handleSelectPolicy = (policy: typeof policies[0]) => {
    if (!isProcessing) {
      setSelectedPolicy(policy);
    }
  };

  const handleContinue = async () => {
    if (!selectedPolicy || isProcessing) return;
    setIsProcessing(true);

    let responseData = { score: 88, premium: 49, payout: 250 };

    try {
      // Construction of strict payload mapping to Supabase Edge Function specifications
      const payload = {
        name: userData.name || '',
        phone: userData.phone || '',
        city: userData.city || '',
        platform: userData.platform || '',
        avg_earnings: Number(userData.avg_earnings || 0),
        zone: userData.zone || '',
        plan: selectedPolicy.id
      };

      // Execute POST method API fetch to register worker with plan
      const res = await fetch('https://vsunihgsrnricqhofhsa.supabase.co/functions/v1/register-worker', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'apikey': 'YOUR_SUPABASE_ANON_KEY' // Replace with actual anon key
        },
        body: JSON.stringify(payload)
      });
      try {
        const data = await res.json();
        console.log(data);
        responseData = data;
      } catch (e) {
        console.log('Using mock response data since endpoint is not reachable locally.');
      }
    } catch (err) {
      console.log('Policy POST enrollment simulated.');
    }

    setTimeout(() => {
      // Action 2: Navigate -> Result Screen (Dashboard)
      navigate('/dashboard', { 
        state: { 
          ...userData, 
          plan: selectedPolicy.title,
          premium: responseData.premium || 49,
          payout: responseData.payout || 250,
          score: responseData.score || 85,
          coverage: selectedPolicy.description
        } 
      });
    }, 800);
  };

  return (
    <div className="container pt-12 pb-20 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl mb-4 font-display">Select Your <span className="text-gradient-accent">Coverage</span></h1>
        <p className="text-secondary max-w-xl mx-auto">
          Choose a plan that fits your risk level. Automatic payouts applied weekly. Let's get you protected instantly.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {policies.map((policy) => {
          return (
            <div 
              key={policy.id}
              onClick={() => handleSelectPolicy(policy)}
              className={`card card-hoverable cursor-pointer flex-1 relative transition-all duration-300 active:scale-95 ${
                selectedPolicy?.id === policy.id
                  ? `${policy.colorFlow} bg-white/10 ring-2 ring-accent-base scale-[1.02] shadow-[0_0_30px_rgba(99,102,241,0.2)]`
                  : 'border-white/5 hover:bg-white/5'
              }`}
            >
              {policy.icon}
              <h3 className="text-xl mb-2 font-display">{policy.title}</h3>
              <p className="text-sm text-secondary mb-6 h-12">{policy.description}</p>
              
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <div>
                  <p className="text-xs text-secondary">Weekly</p>
                  <p className="text-2xl font-bold font-display">{policy.price}</p>
                </div>
                <div className="text-accent-base flex items-center">
                  {selectedPolicy?.id === policy.id ? (
                      <span className="text-sm font-semibold text-success-base">Selected</span>
                  ) : (
                      <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 max-w-sm mx-auto">
        <button 
          onClick={handleContinue}
          disabled={!selectedPolicy || isProcessing}
          className={`btn w-full flex justify-center items-center gap-2 ${selectedPolicy ? 'bg-accent-base hover:bg-accent-hover text-white shadow-lg' : 'bg-white/5 text-white/50 cursor-not-allowed'}`}
        >
          {isProcessing ? (
             <span className="animate-pulse">Processing Registration...</span>
          ) : (
             <>Continue Registration <ArrowRight size={20} /></>
          )}
        </button>
      </div>
    </div>
  );
}
