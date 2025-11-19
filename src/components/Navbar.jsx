import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  const navItem = (label) => (
    <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-full">
      {label}
    </a>
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/50 bg-zinc-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.35)]">
              <span className="text-emerald-400 font-bold">Q</span>
            </div>
            <span className="text-white font-semibold tracking-tight">Qoder</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('About')}
            {navItem('Docs')}
            {navItem('Blog')}
          </nav>

          <div className="hidden md:block">
            <a href="#" className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors px-5 py-2 rounded-full text-sm font-medium border border-white/20 shadow">
              Get Started
            </a>
          </div>

          <button className="md:hidden p-2 text-zinc-300" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItem('About')}
              {navItem('Docs')}
              {navItem('Blog')}
              <a href="#" className="mt-2 inline-flex items-center justify-center bg-white text-zinc-900 px-5 py-2 rounded-full text-sm font-medium border border-white/20">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
