import { ui, jobs } from '../data.js'
import './Experience.css'

export default function Experience({ t }) {
  return (
    <section id="pengalaman" className="jobs" aria-labelledby="pengalaman-h">
      <h2 id="pengalaman-h" className="section-title">{t(ui.experience)}</h2>
      {jobs.map((job) => (
        <article key={job.company} className="job" data-view>
          <div className="job__head">
            <p className="job__year" aria-hidden="true">{job.year}</p>
            <h3>{job.role}</h3>
            <p className="job__company">{job.company}</p>
            <p className="job__meta">{t(job.type)}, {t(job.period)}</p>
          </div>
          <ul className="job__points">
            {t(job.points).map((p) => <li key={p}>{p}</li>)}
          </ul>
        </article>
      ))}
    </section>
  )
}
