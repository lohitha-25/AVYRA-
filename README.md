🚀 AVYRA — Income Stability Engine for Gig Workers

Guidewire DEVTrails 2026 | Hackathon Submission
Adaptive Parametric Insurance System

🎥 Demo Video

👉 https://www.loom.com/share/311bbd16e3874b758b317d65a879fb3b

👉 Phase 2 Demo: https://www.loom.com/share/43ba6dcb7b814295963d27b18a990855

📌 About AVYRA

AVYRA is an Income Stability Engine that predicts disruptions, guides gig workers to earn before impact, and dynamically insures only the remaining income loss.

It is designed for platforms like Zomato, Swiggy, Zepto, helping workers stay financially stable during uncertain conditions like rain, pollution, and outages.

💡 Core Idea

Unlike traditional insurance:

❌ Claim after loss
❌ Fixed premiums
❌ Manual process

AVYRA:

✅ Predicts disruptions
✅ Guides workers proactively
✅ Covers only remaining loss
✅ Fully automated system
🧩 Phase 1: Core System (Weeks 1–2)
🔐 Worker Registration
Name, phone, city
Platform selection
Daily earnings input
Risk zone selection

👉 Creates a complete worker profile

🛡 Insurance Policy Management
Risk Zone: Low / Medium / High
Plan: Basic / Standard / Premium

👉 Personalized coverage based on risk

💰 Dynamic Premium Calculation

Formula:

Final Premium = Base × Zone × Season × Stability

Example:

₹49 × 1.3 × 1.2 × 0.9 = ₹69/week

Factors:

Zone risk
Season (Monsoon, Summer)
Stability score
📊 Dashboard Features
Earnings tracking
Protected amount
Weekly performance chart
Claims history
🧠 Income Stability Score

Score (0–100) based on:

Earnings consistency
Zone risk
Claim frequency

👉 Higher score = lower premium

⚡ Phase 2: Automation & Protection (Weeks 3–4)
🎯 Theme: Protect Your Worker

AVYRA introduces a zero-touch automated insurance system

🤖 Automated Triggers
🌧 Rain: > 40mm/hr
🔥 Heatwave: > 42°C
🌫 AQI: > 400
🚫 Curfew: Government restriction
⚙ Platform outage

👉 Automatically triggers payout

📡 Mock API (Proof)

We simulate real-world disruptions using Mock APIs.

Endpoint:

GET /api/triggers

Sample Response:

{
  "weather": { "rain_mm": 68, "threshold": 40, "triggered": true },
  "aqi": { "value": 210, "threshold": 200, "triggered": true }
}
📸 Mock API Running Screenshot
<img src="mock.jpg" width="700"/>
⚡ Zero-Touch Claims System

No manual claim process required

Flow:

Trigger → Detection → Loss Calculation → Instant Payout
💥 Dynamic Coverage Logic

Formula:

Payout = Target Income − Earned Income

Example:

Target: ₹700
Earned: ₹450
Payout: ₹250

✔️ Fair compensation
✔️ Unique innovation

💳 Payment Simulation
Razorpay-style UI
“₹250 credited to PhonePe •••9876”
Instant confirmation
🤖 AI Integration
Dynamic pricing model
Risk-based premium calculation
Smart payout engine
Income prediction & recommendations
🖥️ Tech Stack
Frontend: React
Backend: Node.js
Database: Supabase / Mock API
APIs: Weather + AQI
Tools: Mockoon
🎯 Features Summary

✔ Registration system
✔ Policy management
✔ Dynamic premium calculation
✔ Automated triggers
✔ Zero-touch claims
✔ Smart payout system

🏁 Innovation Highlights
AI-based insurance pricing
Real-time disruption detection
Fully automated claims system
Dynamic payout logic
Proactive earning guidance
💥 Final Idea

Traditional Insurance:
→ Claim after loss

AVYRA:
→ Predict → Guide → Protect

👉 Workers earn first, then get protected

👥 Team
Lohitha Emmadisetty
Shanti Priya
Kamakshi
Charvi Mahathi
Jyostnavi
⭐ Final Note

AVYRA redefines insurance for gig workers by making it:

⚡ Smart
⚡ Automated
⚡ Predictive
⚡ Worker-first
