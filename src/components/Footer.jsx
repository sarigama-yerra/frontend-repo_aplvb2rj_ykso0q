import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center transition-transform duration-500 group-hover:-rotate-6">
                <span className="text-emerald-400 font-bold">Q</span>
              </div>
              <span className="text-white font-semibold group-hover:text-emerald-300 transition-colors">Qoder</span>
            </a>
            <p className="text-zinc-400 text-sm mt-3">Agentic coding platform for real software.</p>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Product</div>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Resources</div>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Company</div>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-zinc-500 text-sm">© {new Date().getFullYear()} Qoder. All rights reserved.</div>
      </div>
    </footer>
  )
}
