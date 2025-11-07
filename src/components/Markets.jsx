import { useState } from 'react';
import { TrendingUp, Trophy, IndianRupee } from 'lucide-react';

const sampleMarkets = [
  {
    id: 1,
    title: 'IND vs AUS - Match Winner',
    volume: '₹12.4L',
    oddsYes: 62,
    oddsNo: 38,
    status: 'Live',
  },
  {
    id: 2,
    title: 'Total Sixes Over 12.5',
    volume: '₹4.8L',
    oddsYes: 48,
    oddsNo: 52,
    status: 'Today',
  },
  {
    id: 3,
    title: 'Kohli 50+ Runs',
    volume: '₹7.1L',
    oddsYes: 55,
    oddsNo: 45,
    status: 'Live',
  },
];

function MarketCard({ title, volume, oddsYes, oddsNo, status }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-black/40 transition">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-emerald-400">
          <Trophy className="h-4 w-4" />
          <span>{status}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-white/70">
          <IndianRupee className="h-4 w-4" />
          <span>Volume {volume}</span>
        </div>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="rounded-xl bg-emerald-500/20 px-4 py-3 text-emerald-200 ring-1 ring-emerald-400/30 hover:bg-emerald-500/30">
          Yes {oddsYes}%
        </button>
        <button className="rounded-xl bg-rose-500/20 px-4 py-3 text-rose-200 ring-1 ring-rose-400/30 hover:bg-rose-500/30">
          No {oddsNo}%
        </button>
      </div>
    </div>
  );
}

export default function Markets() {
  const [search, setSearch] = useState('');
  const filtered = sampleMarkets.filter((m) => m.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <section id="markets" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-emerald-400" /> Trending Markets
          </h2>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search matches, players..."
            className="w-60 rounded-xl bg-white/5 px-4 py-2 text-sm text-white/80 placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((m) => (
            <MarketCard key={m.id} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
