import { ui, sections } from '../data.js'
import './Timeline.css'

// Navigasi bawah ala timeline After Effects: keyframe = section, playhead = posisi scroll.
export default function Timeline({ active, isDark, toggleTheme, lang, t, toggleLang }) {
  return (
    <nav className="timeline" aria-label={t(ui.nav)}>
      <a className="timeline__home" href="#top" aria-label={t(ui.home)}>AWH</a>
      <div className="timeline__track">
        <div className="timeline__playhead" aria-hidden="true" />
        {sections.map(([id, label], i) => (
          <a
            key={id}
            href={`#${id}`}
            className="key"
            style={{ left: `${(i / (sections.length - 1)) * 100}%` }}
            aria-current={active === id ? 'location' : undefined}
            aria-label={t(label)}
          >
            <span className="key__diamond" aria-hidden="true" />
            <span className="key__label">{t(label)}</span>
          </a>
        ))}
      </div>
      <button className="timeline__btn timeline__lang" type="button" onClick={toggleLang} aria-label={t(ui.switchLang)} lang={lang === 'id' ? 'en' : 'id'}>
        {lang === 'id' ? 'EN' : 'ID'}
      </button>
      <button className="timeline__btn" type="button" onClick={toggleTheme} aria-label={t(isDark ? ui.toLight : ui.toDark)}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" />
        </svg>
      </button>
    </nav>
  )
}
