import React from 'react'

const Step = ({ index, title, desc }) => (
  <div className="group rounded-2xl border border-white/10 bg-[#171717] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,197,94,0.18)]">
    <div className="text-sm text-zinc-400">{String(index).padStart(2, '0')}</div>
    <div className="mt-2 text-white font-semibold">{title}</div>
    <div className="mt-1 text-zinc-300 text-sm">{desc}</div>
  </div>
)

export default function Workflow() {
  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-white tracking-tight mb-8">How it works</h3>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <Step index={1} title="Plan" desc="Qoder maps objectives to concrete tasks and a tool plan." />
          <Step index={2} title="Act" desc="Agents execute changes across code, terminals and services." />
          <Step index={3} title="Observe" desc="Review diffs, logs, and results with tight feedback loops." />
        </div>
      </div>
    </section>
  )
}
