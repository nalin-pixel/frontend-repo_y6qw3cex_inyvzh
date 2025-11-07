import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_2px_20px_rgba(16,185,129,0.25)]">
              Predict Cricket Outcomes with Confidence
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/80 leading-relaxed">
              A secure, real-time marketplace to trade predictions on matches, overs, and player milestones. Premium glass UI, mobile-first, lightning fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#markets" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-900/30 ring-1 ring-white/10 hover:from-emerald-400 hover:to-cyan-400">
                Explore Markets
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white/90 ring-1 ring-white/15 backdrop-blur hover:bg-white/15">
                How it works
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950"></div>
    </section>
  );
}
