import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './pages/Registration';
import ZoneSelection from './pages/ZoneSelection';
import PolicySelection from './pages/PolicySelection';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import Receipt from './pages/Receipt';
import ScoreScreen from './pages/ScoreScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/zone" element={<ZoneSelection />} />
        <Route path="/policies" element={<PolicySelection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/score" element={<ScoreScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
