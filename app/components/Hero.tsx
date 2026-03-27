export function Hero() {
  return (
    <header className="bg-gradient-to-br from-brand-50 via-white to-brand-100 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-brand-800 mb-4 tracking-tight">
          Johnny Cornyn
        </h1>
        <p className="text-xl md:text-2xl text-brand-600 font-light mb-6">
          Front-end Engineer
        </p>
        <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
          Building modern, performant web experiences with React, Phoenix Liveview, and
          the tools that bring ideas to life.
        </p>
        <div className="mt-8 flex justify-center gap-2">
          <span className="inline-block w-12 h-1 bg-brand-400 rounded-full" />
          <span className="inline-block w-3 h-1 bg-accent-400 rounded-full" />
        </div>
      </div>
    </header>
  );
}
