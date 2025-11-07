import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-200">
              <span className="text-xs">Live Cricket Markets</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_2px_20px_rgba(16,185,129,0.25)]">
              Trade Cricket Outcomes. In Real Time.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/80 leading-relaxed">
              Make calls on match winners, powerplay runs, wickets, and player milestones. Built for speed with a premium glass UI and smooth 3D.
            </p>

            {/* Match chip */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-xl">🇮🇳</span>
                <span className="font-semibold">IND</span>
              </div>
              <span className="text-white/40">vs</span>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-xl">🇦🇺</span>
                <span className="font-semibold">AUS</span>
              </div>
              <span className="ml-2 rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-300 ring-1 ring-emerald-400/30">T20I • Mumbai</span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#markets" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-900/30 ring-1 ring-white/10 hover:from-emerald-400 hover:to-cyan-400">
                Explore Markets
              </a>
              <a href="#markets" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white/90 ring-1 ring-white/15 backdrop-blur hover:bg-white/15">
                Next Over Specials
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stadium glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(16,185,129,0.25),transparent_60%)]" />
    </section>
  );
}
