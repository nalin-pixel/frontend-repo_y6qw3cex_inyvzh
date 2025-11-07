import { useState } from 'react';
import { Shield, User, Rocket } from 'lucide-react';

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
                alt="Platform Logo"
                className="h-9 w-9 rounded-xl ring-1 ring-white/10 object-contain"
              />
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold tracking-tight text-white/90 text-lg">CricketX Market</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#markets" className="hover:text-white transition">Markets</a>
              <a href="#how" className="hover:text-white transition">How it works</a>
              <a href="#security" className="hover:text-white transition">Security</a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500/90 to-cyan-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 ring-1 ring-white/10 hover:from-emerald-400 hover:to-cyan-400 transition">
                <Rocket className="h-4 w-4" /> Start Predicting
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
              <a href="#markets" className="block py-2">Markets</a>
              <a href="#how" className="block py-2">How it works</a>
              <a href="#security" className="block py-2">Security</a>
              <button className="mt-2 w-full rounded-xl bg-gradient-to-r from-emerald-500/90 to-cyan-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 ring-1 ring-white/10">
                Start Predicting
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
