import NavBar from './components/navBar/NavBar'
import HeroSection from './components/hero/HeroSection'
import AboutSection from './components/about/AboutSection'
import ProjectsSection from './components/Project/ProjectsSection'
import EmailSection from './components/email/EmailSection'
import Footer from './components/footer/Footer'

function App() {

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <NavBar/>
    <div className="container mt-24 mx-auto py-4 px-12">
      <HeroSection />
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
    </div>
    <Footer />
  </main>
  )
}

export default App
