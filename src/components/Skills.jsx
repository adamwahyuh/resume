import { skills, sectionLabel } from '../data.js'
import './Skills.css'

export default function Skills({ t }) {
  return (
    <section id="keahlian" className="skills" aria-labelledby="keahlian-h">
      <h2 id="keahlian-h" className="section-title">{t(sectionLabel('keahlian'))}</h2>
      <dl>
        {skills.map(([group, items]) => (
          <div key={t(group)} className="skills__row">
            <dt>{t(group)}</dt>
            <dd>
              {t(items).map((s, i) => (
                <span key={s} className="mark" data-mark style={{ '--d': `${i * 70}ms` }}>{s}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
