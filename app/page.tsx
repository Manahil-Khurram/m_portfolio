import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectSection'
import Contact from './components/Contact'


export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <h1 className='mt-60'></h1>
      <Contact/>
    </main>
  )
}
