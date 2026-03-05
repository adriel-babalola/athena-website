import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Coming soon — we'll let you know when Athena launches.");
  };

  return (
    <div className="min-h-screen bg-athena-black text-athena-offwhite selection:bg-athena-purple selection:text-white flex flex-col">
      {/* Grain overlay */}
      <div className="bg-grain" />
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-athena-border bg-athena-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.svg" alt="Athena" className="h-7 w-auto" />
            <span className="font-mono text-sm tracking-widest uppercase font-bold group-hover:text-athena-purple transition-colors">
              ATHENA
            </span>
          </Link>
        </div>
      </header>

      {/* Login Form */}
      <main className="flex-1 flex items-center justify-center relative z-10 px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <div className="font-mono text-[10px] uppercase tracking-widest text-athena-purple mb-4 flex items-center justify-center gap-3">
              <span className="inline-block w-8 h-px bg-athena-purple/60" />
              AUTHENTICATION
              <span className="inline-block w-8 h-px bg-athena-purple/60" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight">
              Welcome <span className="text-athena-purple italic">back.</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-athena-offwhite/40 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-5 py-3.5 bg-athena-black border border-athena-border text-athena-offwhite placeholder:text-athena-offwhite/20 font-mono text-sm tracking-wide transition-all duration-300"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-athena-offwhite/40 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-5 py-3.5 bg-athena-black border border-athena-border text-athena-offwhite placeholder:text-athena-offwhite/20 font-mono text-sm tracking-wide transition-all duration-300"
              />
            </div>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-athena-purple/20 bg-athena-purple/5 p-4"
              >
                <p className="font-mono text-xs text-athena-purple tracking-wide">{message}</p>
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-athena-purple text-white font-mono text-sm uppercase tracking-widest px-8 py-4 hover:shadow-[0_0_30px_rgba(124,111,255,0.4)] transition-all duration-300 group relative overflow-hidden cursor-pointer border-none"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Log In</span>
            </button>
          </form>

          <p className="text-center mt-8 text-athena-offwhite/30 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-athena-purple hover:underline font-mono text-xs uppercase tracking-wider">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
