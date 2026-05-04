import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function AdminLogin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  if (user) {
    return <Navigate to="/admin" />;
  }

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/admin');
    } catch (err: any) {
      setError(err.message || 'Lỗi đăng nhập');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-brand-blue mb-8">Admin Đăng Nhập</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-brand-blue text-white py-3 rounded-lg font-bold hover:bg-brand-gold transition-colors"
        >
          Đăng nhập với Google
        </button>
      </div>
    </div>
  );
}
