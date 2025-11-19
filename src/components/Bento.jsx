import React from 'react'
import { Cpu, TerminalSquare, GitBranch, Sparkles, Layers, Shield } from 'lucide-react'

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-white/10 bg-[#171717] p-6 ${className}`}>
    {children}
  </div>
)

export default function Bento() {
  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-white tracking-tight mb-8">Why Qoder?</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-6 auto-rows-[1fr]">
          <Card className="md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-300/30 flex items-center justify-center text-emerald-400"><Cpu size={20} /></div>
              <div>
                <h4 className="text-white font-semibold">Context Awareness</h4>
                <p className="text-zinc-300 mt-1">Understands repos, issues, and architecture to make informed changes.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-300/30 flex items-center justify-center text-emerald-400"><TerminalSquare size={20} /></div>
              <div>
                <h4 className="text-white font-semibold">Terminal Integration</h4>
                <p className="text-zinc-300 mt-1">Run tasks and scripts with safety checks.</p>
              </div>
            </div>
          </Card>
          <Card className="md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-300/30 flex items-center justify-center text-emerald-400"><GitBranch size={20} /></div>
              <div>
                <h4 className="text-white font-semibold">Git Sync</h4>
                <p className="text-zinc-300 mt-1">Branch, PRs, and reviews without leaving your flow.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-300/30 flex items-center justify-center text-emerald-400"><Layers size={20} /></div>
              <div>
                <h4 className="text-white font-semibold">Tool Orchestration</h4>
                <p className="text-zinc-300 mt-1">Agents coordinate editors, CLIs, and services.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-300/30 flex items-center justify-center text-emerald-400"><Shield size={20} /></div>
              <div>
                <h4 className="text-white font-semibold">Safety Rails</h4>
                <p className="text-zinc-300 mt-1">Change previews and rollbacks by default.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-300/30 flex items-center justify-center text-emerald-400"><Sparkles size={20} /></div>
              <div>
                <h4 className="text-white font-semibold">Delightful UX</h4>
                <p className="text-zinc-300 mt-1">Subtle motion and clarity in every interaction.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
