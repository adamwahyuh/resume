import { useEffect, useState } from 'react'
import { ui } from '../data.js'

export function useLang() {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'id' || saved === 'en') return saved
    } catch { /* storage diblokir: pakai bahasa browser */ }
    return navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en'
  })
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = ui.title[lang]
    try { localStorage.setItem('lang', lang) } catch { /* abaikan */ }
  }, [lang])
  // nilai { id, en } dipilih sesuai bahasa; nilai biasa dipakai apa adanya
  const t = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] : v)
  return [lang, t, () => setLang(lang === 'id' ? 'en' : 'id')]
}
