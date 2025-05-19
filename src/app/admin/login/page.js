"use client";
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      // Check credentials directly
      if (email === 'admin@gmail.com' && password === '54321') {
        router.push('/admin/main'); // ✅ redirect to your admin dashboard
      } else {
        setErrorMsg('Invalid credentials. Access denied.');
      }
    } catch (error) {
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-800 to-green-900 p-6">
        <div className="bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-2xl p-8 shadow-xl w-full max-w-md text-white">
          <h1 className="text-3xl font-bold mb-6 text-yellow-400 text-center">🔒 Admin Portal</h1>

          {errorMsg && (
            <p className="text-red-400 mb-4 text-center">
              {errorMsg}
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Admin Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="admin@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-600 hover:shadow-yellow-400/50'
              }`}
            >
              {loading ? 'Authenticating...' : 'Admin Login'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-300">
            Forgot credentials? Contact system administrator
          </p>
        </div>
      </div>
    </>
  );
}
