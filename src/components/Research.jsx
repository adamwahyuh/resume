import { ui, research } from '../data.js'
import './Research.css'

export default function Research({ t }) {
  return (
    <section id="penelitian" className="research" aria-labelledby="penelitian-h">
      <h2 id="penelitian-h" className="section-title">{t(ui.research)}</h2>
      {research.map((r) => (
        <article key={r.image.src} className="research__item" data-view>
          <img src={r.image.src} alt={t(r.alt)} width={r.image.width} height={r.image.height} loading="lazy" decoding="async" />
          <div className="research__text">
            <h3>{r.title}</h3>
            <p>{t(r.role)}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
