import { ui, projects } from '../data.js'
import './Projects.css'

// trackRef dipakai useScrollScenes untuk mengukur lebar track horizontal
export default function Projects({ t, trackRef }) {
  return (
    <section id="proyek" className="projects" data-scene aria-labelledby="proyek-h">
      <div className="projects__stage">
        <div className="projects__track" ref={trackRef}>
          <div className="projects__intro">
            <h2 id="proyek-h" className="section-title">{t(ui.projects)}</h2>
            <p>{t(ui.projectsIntro)}</p>
          </div>
          {projects.map((p) => (
            <article key={p.stack + p.date} className={`project${p.big ? ' project--big' : ''}`}>
              <p className="project__date">{t(p.date)}</p>
              <h3>{p.link ? <a href={p.link.href} target="_blank" rel="noreferrer">{t(p.name)}</a> : t(p.name)}</h3>
              <p className="project__tag">{t(p.tag)}</p>
              <p className="project__text">{t(p.text)}</p>
              <p className="project__stack">
                {p.stack}
                {p.link && <a className="project__link" href={p.link.href} target="_blank" rel="noreferrer">{t(ui.linkLabel[p.link.kind])}</a>}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
