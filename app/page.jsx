'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
      } else if (data.user) {
        setUser(data.user);
        setMessage('Successfully signed in!');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError('An error occurred: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        setError(signUpError.message);
      } else if (data.user) {
        setMessage('Account created! Please check your email to confirm.');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError('An error occurred: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setMessage('Signed out successfully!');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded"></div>
            <h1 className="text-2xl font-bold">VideoHost Pro</h1>
          </div>
          <div className="flex items-center gap-4">
            {user && (
              <div className="text-sm">
                <span className="text-slate-300">Welcome, </span>
                <span className="font-semibold text-cyan-400">{user.email}</span>
              </div>
            )}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            {user && (
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Auth Panel */}
          {!user ? (
            <div className="md:col-span-1">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab('login')}
                    className={`flex-1 py-2 rounded transition ${
                      activeTab === 'login' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setActiveTab('register')}
                    className={`flex-1 py-2 rounded transition ${
                      activeTab === 'register' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  >
                    Register
                  </button>
                </div>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-900 border border-red-700 rounded text-red-200 text-sm">
                    {error}
                  </div>
                )}
                
                {message && (
                  <div className="mb-4 p-3 bg-green-900 border border-green-700 rounded text-green-200 text-sm">
                    {message}
                  </div>
                )}
                
                <form className="space-y-4" onSubmit={activeTab === 'login' ? handleSignIn : handleSignUp}>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-400"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-700 text-white font-medium rounded transition"
                  >
                    {loading ? 'Loading...' : activeTab === 'login' ? 'Sign In' : 'Create Account'}
                  </button>
                </form>
              </div>
            </div>
          ) : null}
          
          {/* Main Area */}
          <div className={!user ? 'md:col-span-2' : 'md:col-span-3'}>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-3xl font-bold mb-4">Welcome to VideoHost Pro</h2>
              <p className="text-slate-300 mb-6">
                A professional video hosting platform with powerful features for content creators and viewers.
              </p>
              
              {user ? (
                <div className="space-y-4">
                  <div className="bg-green-900 border border-green-700 rounded p-4">
                    <p className="text-green-200">✓ You are logged in as an admin user</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-700 rounded p-4 cursor-pointer hover:bg-slate-600">
                      <div className="text-2xl font-bold text-cyan-400">📹</div>
                      <p className="text-sm mt-2">Upload Videos</p>
                    </div>
                    <div className="bg-slate-700 rounded p-4 cursor-pointer hover:bg-slate-600">
                      <div className="text-2xl font-bold text-cyan-400">📊</div>
                      <p className="text-sm mt-2">Analytics</p>
                    </div>
                    <div className="bg-slate-700 rounded p-4 cursor-pointer hover:bg-slate-600">
                      <div className="text-2xl font-bold text-cyan-400">⚙️</div>
                      <p className="text-sm mt-2">Settings</p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-700 rounded p-4">
                      <div className="text-2xl font-bold text-cyan-400">∞</div>
                      <p className="text-sm mt-2">Unlimited Videos</p>
                    </div>
                    <div className="bg-slate-700 rounded p-4">
                      <div className="text-2xl font-bold text-cyan-400">⚡</div>
                      <p className="text-sm mt-2">Fast Streaming</p>
                    </div>
                    <div className="bg-slate-700 rounded p-4">
                      <div className="text-2xl font-bold text-cyan-400">🔒</div>
                      <p className="text-sm mt-2">Secure Upload</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Getting Started</h3>
                    <ol className="space-y-2 text-slate-300 list-decimal list-inside">
                      <li>Create an account or sign in</li>
                      <li>Upload your videos (up to 500MB each)</li>
                      <li>Share links with your audience</li>
                      <li>Track views and analytics</li>
                    </ol>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 p-4 mt-8">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 VideoHost Pro. All rights reserved.</p>
          <p className="mt-2">Powered by Next.js, Supabase, and Vercel</p>
        </div>
      </footer>
    </div>
  );
}
