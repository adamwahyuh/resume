import { ui, profile } from '../data.js'
import './Hero.css'

export default function Hero({ t }) {
  return (
    <header id="top" className="hero" data-scene>
      <div className="hero__stage">
        <h1 className="hero__name">
          <span className="hero__line hero__line--back">{profile.name[0]}</span>
          <img
            className="hero__photo"
            src="/images/foto-body.webp"
            alt={t(ui.photoAlt)}
            width="636"
            height="954"
            fetchPriority="high"
          />
          <span className="hero__line hero__line--front">{profile.name[1]}</span>
        </h1>
        <div className="hero__meta">
          <p className="hero__role"><span className="mark is-in">{profile.role}</span></p>
          <p>{profile.location}</p>
          <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        </div>
        <p className="hero__hint" aria-hidden="true">{t(ui.hint)}</p>
      </div>
    </header>
  )
}
