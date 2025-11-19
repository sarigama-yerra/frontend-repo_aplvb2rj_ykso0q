import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -inset-[40%] rounded-full opacity-40" style={{
          background: 'radial-gradient(closest-side, rgba(34,197,94,0.18), transparent 70%)'
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Agentic Coding Platform for Real Software
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-lg text-zinc-300"
          >
            Build production-grade apps by talking to your AI engineering team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a href="#" className="group inline-flex items-center justify-center rounded-2xl bg-emerald-500 text-black font-semibold px-5 py-3 border border-emerald-300/30 transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_10px_40px_rgba(34,197,94,0.35)] hover:-translate-y-0.5">
              <span>Get Started Free</span>
              <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#" className="group inline-flex items-center justify-center rounded-2xl bg-transparent text-white font-medium px-5 py-3 border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5">
              <span>View Docs</span>
              <span aria-hidden className="ml-2 opacity-70 transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mt-14 rounded-2xl border border-white/10 bg-[#0f0f0f] overflow-hidden group"
        >
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(60% 60% at 50% 0%, rgba(34,197,94,0.12) 0%, transparent 60%)'
          }} />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
            background: 'radial-gradient(40% 40% at 50% 50%, rgba(34,197,94,0.12), transparent 60%)'
          }} />
          <div className="aspect-[16/9]">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
