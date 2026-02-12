import React, { useState } from 'react';

const LoginPage = ({ onLogin, onNavigate }) => {
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onLogin(studentNumber, password)) {
      setError('Invalid student number or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 w-full max-w-md border border-slate-700">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-black text-xl">WS</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Web Systems</h1>
          <p className="text-blue-300/70 font-arabic">انظمة الويب</p>
          <p className="text-slate-400 text-sm mt-2">Taif University</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm">{error}</div>}
          
          <div>
            <label className="block text-slate-300 text-sm mb-2">Student Number</label>
            <input
              type="text"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter student number"
              required
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors">
            Login
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?{' '}
          <button onClick={() => onNavigate('register')} className="text-blue-400 hover:underline">Register</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
