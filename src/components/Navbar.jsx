import { useState } from 'react';
import { Shield, Trophy, User } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl shadow-black/30">
          <nav className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                alt="CricketX Logo"
                className="h-9 w-9 rounded-xl ring-1 ring-white/10 object-contain"
              />
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold tracking-tight text-white/90 text-lg">CricketX</span>
                <span className="hidden sm:inline rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-300 ring-1 ring-emerald-400/30">Predictions</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#markets" className="hover:text-white transition">Matches</a>
              <a href="#markets" className="hover:text-white transition">IPL</a>
              <a href="#markets" className="hover:text-white transition">ODI</a>
              <a href="#markets" className="hover:text-white transition">T20I</a>
              <a href="#how" className="hover:text-white transition">How it works</a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500/90 to-cyan-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 ring-1 ring-white/10 hover:from-emerald-400 hover:to-cyan-400 transition">
                Predict Now
              </button>
              <button aria-label="Account" className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10 text-white/80 hover:bg-white/10 transition">
                <User className="h-5 w-5" />
              </button>
              <button aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 text-white/80 hover:bg-white/10 transition">
                {menuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 text-white/80">
              <a href="#markets" className="block py-2">Matches</a>
              <a href="#markets" className="block py-2">IPL</a>
              <a href="#markets" className="block py-2">ODI</a>
              <a href="#markets" className="block py-2">T20I</a>
              <a href="#how" className="block py-2">How it works</a>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span>Secure. Real-time. Fair outcomes.</span>
              </div>
              <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-emerald-500/90 to-cyan-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 ring-1 ring-white/10">
                Predict Now
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
