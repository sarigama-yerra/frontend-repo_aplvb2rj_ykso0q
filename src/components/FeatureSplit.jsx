import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureSplit() {
  return (
    <section className="bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10">
        {/* Left copy */}
        <div className="flex items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Programming Through Conversation</h2>
            <p className="mt-4 text-zinc-300">Describe what you need. Qoder plans, writes, and integrates code across your stack. Stay in flow while your AI agents do the heavy lifting.</p>
          </div>
        </div>
        {/* Right mockup */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="group rounded-2xl border border-white/10 bg-[#171717] p-4 shadow-[0_0_40px_rgba(34,197,94,0.08)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(34,197,94,0.18)] hover:-translate-y-1">
            <div className="h-64 md:h-80 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-900 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(40% 30% at 30% 10%, rgba(34,197,94,0.15), transparent 60%)'}} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contrast section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="rounded-2xl border border-emerald-300/20 bg-emerald-500 text-black p-8 md:p-10 shadow-[0_0_60px_rgba(34,197,94,0.35)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_0_80px_rgba(34,197,94,0.45)]">
            <h3 className="text-2xl md:text-3xl font-extrabold">Quick Start: Delegate Tasks</h3>
            <p className="mt-3 text-black/80">Open the command palette, assign objectives, and watch Qoder coordinate tools, terminals, and services to deliver results.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="group rounded-2xl border border-white/10 bg-[#171717] p-4 transition-all duration-500 hover:-translate-y-1">
            <div className="h-64 md:h-80 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-900 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(40% 30% at 70% 20%, rgba(34,197,94,0.12), transparent 60%)'}} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
