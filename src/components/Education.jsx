import { ui, education, training } from '../data.js'
import './Education.css'

export default function Education({ t }) {
  return (
    <section id="pendidikan" className="school" aria-labelledby="pendidikan-h">
      <div>
        <h2 id="pendidikan-h" className="section-title">{t(ui.education)}</h2>
        {education.map((e) => (
          <div key={e.period} className="school__item">
            <h3>{t(e.title)}</h3>
            <p>{t(e.place)}</p>
            <p className="school__period">{e.period}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="section-title">{t(ui.training)}</h2>
        {training.map((e) => (
          <div key={t(e.title)} className="school__item">
            {e.image && (
              <a className="school__thumb" href={e.image.src} target="_blank" rel="noreferrer" aria-label={`${t(ui.viewCert)}: ${t(e.title)}`}>
                <img src={e.image.thumb} alt="" width={e.image.width} height={e.image.height} loading="lazy" decoding="async" />
              </a>
            )}
            <h3>{e.url ? <a href={e.url} target="_blank" rel="noreferrer">{t(e.title)}</a> : t(e.title)}</h3>
            <p>{t(e.place)}</p>
            {e.period && <p className="school__period">{t(e.period)}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
