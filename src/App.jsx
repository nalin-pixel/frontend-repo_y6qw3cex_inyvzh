import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Markets from './components/Markets';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-['Manrope']">
      <div className="fixed inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_0%,rgba(6,182,212,0.15),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Markets />
      <HowItWorks />

      <footer className="relative mt-16 border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} CricketX Market. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#security" className="hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
