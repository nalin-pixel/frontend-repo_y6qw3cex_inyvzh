import { ShieldCheck, Wallet, Repeat2 } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: 'Fund your wallet',
    desc: 'Deposit INR securely via UPI or cards and get instant balance to trade predictions.'
  },
  {
    icon: Repeat2,
    title: 'Trade predictions',
    desc: 'Buy or sell Yes/No shares on live markets for match winner, powerplay runs, wickets and more.'
  },
  {
    icon: ShieldCheck,
    title: 'Transparent settlement',
    desc: 'Outcomes are verified with trusted cricket data sources and audit trails.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">How it works</h2>
          <p className="mt-2 text-white/70">Simple, fast, and designed for clarity.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-emerald-500/20 p-2 ring-1 ring-emerald-400/30"><Icon className="h-5 w-5 text-emerald-400" /></span>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
