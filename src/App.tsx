import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Speaker from './components/Speaker'
import Topics from './components/Topics'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ai-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Speaker />
      <Topics />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}
