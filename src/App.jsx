import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSplit from './components/FeatureSplit'
import Deeper from './components/Deeper'
import Bento from './components/Bento'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        <FeatureSplit />
        <Deeper />
        <Bento />
        <Workflow />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
