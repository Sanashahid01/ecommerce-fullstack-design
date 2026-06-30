import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup will work after backend setup (Week 2)!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md border">
        <h2 className="text-xl font-bold text-center mb-6">Register</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              required
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          
          <div>
            <input
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-sm pr-10"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600">
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;