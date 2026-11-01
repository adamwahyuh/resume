import { profile, sectionLabel } from '../data.js'
import './Profile.css'

export default function Profile({ t }) {
  return (
    <section id="profil" className="profile">
      <h2 className="section-title">{t(sectionLabel('profil'))}</h2>
      <p className="profile__lead">{t(profile.summary)}</p>
      <p className="profile__body">{t(profile.summary2)}</p>
      <p className="profile__body">{t(profile.summary3)}</p>
    </section>
  )
}
