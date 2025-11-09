'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('dark');

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded"></div>
            <h1 className="text-2xl font-bold">VideoHost Pro</h1>
          </div>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Auth Panel */}
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

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-400"
                    placeholder="your@email.com"
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
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded transition"
                >
                  {activeTab === 'login' ? 'Sign In' : 'Create Account'}
                </button>
              </form>
            </div>
          </div>

          {/* Main Area */}
          <div className="md:col-span-2">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-3xl font-bold mb-4">Welcome to VideoHost Pro</h2>
              <p className="text-slate-300 mb-6">
                A professional video hosting platform with powerful features for content creators and viewers.
              </p>
              
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
