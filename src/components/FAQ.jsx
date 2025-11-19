import React from 'react'

const Item = ({ q, a, i, open, setOpen }) => {
  const isOpen = open === i
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(isOpen ? null : i)}
        className="group w-full text-left py-4 flex items-center justify-between"
      >
        <span className="text-white font-medium transition-colors group-hover:text-emerald-300">{q}</span>
        <span className="text-zinc-400 transition-transform duration-300 group-hover:rotate-90">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="pb-4 text-zinc-300 text-sm">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = React.useState(0)
  const items = [
    { q: 'What is Qoder?', a: 'An agentic coding platform that plans, executes, and validates software changes.' },
    { q: 'How is my code kept safe?', a: 'All changes are reviewed with diffs, tests, and rollback support.' },
    { q: 'Can I use my own tools?', a: 'Yes. Qoder integrates with your editor, terminals, CI, and git providers.' },
    { q: 'Is there a free tier?', a: 'Get started free and scale usage as your team grows.' },
    { q: 'What languages are supported?', a: 'Full‑stack JavaScript/TypeScript, Python, and more on the roadmap.' },
  ]

  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-white tracking-tight mb-6 text-center">FAQ</h3>
        <div className="rounded-2xl border border-white/10 bg-[#171717] p-4 md:p-6">
          {items.map((it, i) => (
            <Item key={i} i={i} q={it.q} a={it.a} open={open} setOpen={setOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}
