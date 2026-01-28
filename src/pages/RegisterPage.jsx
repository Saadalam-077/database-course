import React, { useState } from 'react';

const RegisterPage = ({ onNavigate, onRegister }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentNumber: '',
    sectionNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const sections = ['1512', '1515', '572', '629', '650', '651'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!formData.studentName.trim()) {
      setError('Please enter your name | الرجاء إدخال اسمك');
      return;
    }

    if (!/^\d{8}$/.test(formData.studentNumber)) {
      setError('Student number must be 8 digits | الرقم الجامعي يجب أن يكون 8 أرقام');
      return;
    }

    if (!formData.sectionNumber) {
      setError('Please select your section | الرجاء اختيار الشعبة');
      return;
    }

    if (formData.password.length < 4) {
      setError('Password must be at least 4 characters | كلمة المرور يجب أن تكون 4 أحرف على الأقل');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match | كلمات المرور غير متطابقة');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const result = onRegister({
        studentName: formData.studentName,
        studentNumber: formData.studentNumber,
        sectionNumber: formData.sectionNumber,
        password: formData.password
      });

      if (result.success) {
        setSuccess('Registration successful! You can now login. | تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.');
        setTimeout(() => onNavigate('login'), 2000);
      } else {
        setError(result.message);
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* University Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-white font-black text-xl">TU</span>
          </div>
          <h1 className="text-xl font-bold text-white">Taif University</h1>
          <p className="text-amber-300 font-arabic text-sm">جامعة الطائف</p>
        </div>

        {/* Register Card */}
        <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-slate-700">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-white">Student Registration</h2>
            <p className="text-amber-300/70 font-arabic">تسجيل طالب جديد</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-slate-400 text-sm mb-1">
                Full Name | الاسم الكامل
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="e.g., Mohammed Ahmed"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-1">
                Student Number | الرقم الجامعي
              </label>
              <input
                type="text"
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleChange}
                placeholder="e.g., 44012345"
                maxLength={8}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                required
              />
              <p className="text-slate-500 text-xs mt-1">8 digits | 8 أرقام</p>
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-1">
                Section Number | رقم الشعبة
              </label>
              <select
                name="sectionNumber"
                value={formData.sectionNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-amber-500"
                required
              >
                <option value="">Select Section | اختر الشعبة</option>
                {sections.map(sec => (
                  <option key={sec} value={sec}>Section {sec} | الشعبة {sec}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-1">
                Password | كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-1">
                Confirm Password | تأكيد كلمة المرور
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            {error && (
              <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-3">
                <p className="text-emerald-400 text-sm">{success}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold rounded-xl transition-all disabled:opacity-50"
            >
              {loading ? 'Registering...' : 'Register | تسجيل'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              Already have an account? | لديك حساب بالفعل؟
            </p>
            <button
              onClick={() => onNavigate('login')}
              className="text-amber-400 hover:text-amber-300 font-semibold mt-1"
            >
              Login | تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
