import { useRef } from 'react'
import { ui } from './data.js'
import { useLang } from './hooks/useLang.js'
import { useTheme } from './hooks/useTheme.js'
import { useScrollScenes } from './hooks/useScrollScenes.js'
import { useMarkerReveal } from './hooks/useMarkerReveal.js'
import Hero from './components/Hero.jsx'
import Profile from './components/Profile.jsx'
import Experience from './components/Experience.jsx'
import Research from './components/Research.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Timeline from './components/Timeline.jsx'

export default function App() {
  const trackRef = useRef(null)
  const [lang, t, toggleLang] = useLang()
  const active = useScrollScenes(trackRef, lang)
  const [isDark, toggleTheme] = useTheme()
  useMarkerReveal(lang)

  return (
    <>
      <a className="skip" href="#profil">{t(ui.skip)}</a>
      <Hero t={t} />
      <main>
        <Profile t={t} />
        <Experience t={t} />
        <Research t={t} />
        <Projects t={t} trackRef={trackRef} />
        <Skills t={t} />
        <Education t={t} />
      </main>
      <Contact t={t} />
      <Timeline active={active} isDark={isDark} toggleTheme={toggleTheme} lang={lang} t={t} toggleLang={toggleLang} />
    </>
  )
}
