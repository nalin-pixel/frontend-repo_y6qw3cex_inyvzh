import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Markets from './components/Markets';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-['Manrope']">
      {/* global ambient glows */}
      <div className="fixed inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_0%,rgba(6,182,212,0.15),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Markets />
      <HowItWorks />

      <section id="security" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">Fair play & security</h3>
          <p className="mt-2 text-white/70 text-sm">Bank-grade encryption, audit trails for outcomes, and strict risk controls so you can focus on the cricket.</p>
        </div>
      </section>

      <footer className="relative mt-4 border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} CricketX. All rights reserved.</p>
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
