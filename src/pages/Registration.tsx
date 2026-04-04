import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';

export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    city: 'Hyderabad',
    platform: '',
    avg_earnings: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.city && formData.platform && formData.avg_earnings) {
      // Screen 1 -> Next -> Screen 2 (Zone Selection)
      navigate('/zone', { state: { ...formData } });
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-4 animate-fade-in relative z-10 w-full overflow-y-auto">
      <div className="w-full max-w-md mx-auto mt-10">
        <div className="flex flex-col items-center mb-8 text-center pt-8">
          <div className="bg-white/5 p-4 rounded-full border border-white/10 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Shield size={36} className="text-[#818cf8]" />
          </div>
          <h1 className="text-3xl font-display font-bold">Worker Registration</h1>
          <p className="text-secondary text-sm mt-2">Step 1 of 3: Basic Details</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="glass-panel p-6">
            <div className="flex flex-col gap-4">
              <div className="input-group !mb-0">
                <label className="input-label" htmlFor="name">Full Name</label>
                <input 
                  id="name"
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="input-group !mb-0">
                <label className="input-label" htmlFor="phone">Phone Number</label>
                <input 
                  id="phone"
                  type="tel" 
                  className="input-field" 
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="input-group !mb-0">
                <label className="input-label" htmlFor="city">City</label>
                <input 
                  id="city"
                  type="text" 
                  className="input-field" 
                  placeholder="Hyderabad"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  required
                />
              </div>

              <div className="input-group !mb-0">
                <label className="input-label" htmlFor="platform">Gig Platform</label>
                <select 
                  id="platform"
                  className="input-field bg-transparent appearance-none"
                  value={formData.platform}
                  onChange={e => setFormData({ ...formData, platform: e.target.value })}
                  required
                >
                  <option value="" disabled className="bg-[#121214] text-white">Select platform</option>
                  <option value="Zomato" className="bg-[#121214] text-white">Zomato</option>
                  <option value="Swiggy" className="bg-[#121214] text-white">Swiggy</option>
                  <option value="Zepto" className="bg-[#121214] text-white">Zepto</option>
                </select>
              </div>

              <div className="input-group !mb-0">
                <label className="input-label" htmlFor="avg_earnings">Average Daily Earnings (₹)</label>
                <input 
                  id="avg_earnings"
                  type="number" 
                  className="input-field" 
                  placeholder="e.g. 700"
                  value={formData.avg_earnings}
                  onChange={e => setFormData({ ...formData, avg_earnings: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-2 mb-12">
            <button 
              type="submit" 
              className="btn btn-primary w-full py-4 text-lg rounded-xl flex items-center justify-center gap-2"
            >
              Next <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
