import { profile, sectionLabel } from '../data.js'
import './Contact.css'

export default function Contact({ t }) {
  return (
    <footer id="kontak" className="contact">
      <h2 className="section-title">{t(sectionLabel('kontak'))}</h2>
      <a className="contact__mail" href={`mailto:${profile.email}`}>{profile.email}</a>
      <p className="contact__line">{profile.location}, {profile.country}</p>
    </footer>
  )
}
