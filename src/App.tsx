import NavBar from "./components/navBar/NavBar";
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/Project/ProjectsSection";
import EmailSection from "./components/email/EmailSection";
import Footer from "./components/footer/Footer";
import CareerSection from "./components/carreer/CareerSection";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container max-w-7xl mt-20 mx-auto py-4 px-6 md:px-12">
        <HeroSection />
        <AboutSection />
        <CareerSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

export default App;
