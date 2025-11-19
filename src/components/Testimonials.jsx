import React from 'react'

const TestCard = ({ name, role, text }) => (
  <div className="group rounded-2xl border border-white/10 bg-[#171717] p-6 flex flex-col gap-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,197,94,0.18)]">
    <div className="flex items-center gap-3">
      <img src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(name)}`} alt={name} className="h-10 w-10 rounded-full transition-transform duration-500 group-hover:scale-105" />
      <div>
        <div className="text-white text-sm font-medium">{name}</div>
        <div className="text-zinc-400 text-xs">{role}</div>
      </div>
    </div>
    <p className="text-zinc-300 text-sm">{text}</p>
  </div>
)

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-white tracking-tight mb-8">Loved by builders</h3>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <TestCard name="Ava" role="CTO, Fintech" text="Shipped a compliant feature in a day. Qoder handled the plumbing and tests." />
          <TestCard name="Nico" role="Founder" text="Feels like a team of senior engineers on call. Incredible speed." />
          <TestCard name="Maya" role="Staff Engineer" text="The planning and git integration are top‑tier. I trust the changes." />
        </div>
      </div>
    </section>
  )
}
