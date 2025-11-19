import React from 'react'

export default function Deeper() {
  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl md:text-3xl text-zinc-300">Not just another AI IDE. Qoder thinks <span className="relative font-semibold">
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">{`{ deeper }`}</span>
          <span className="absolute inset-x-0 -bottom-1 blur-2xl opacity-40 h-4 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 pointer-events-none" aria-hidden />
        </span>.</p>
      </div>
    </section>
  )
}
