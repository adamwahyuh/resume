import { useEffect } from 'react'

// Tambah .is-in ke setiap [data-mark] saat masuk viewport (sapuan marker kuning).
export function useMarkerReveal(lang) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-in')),
      { rootMargin: '0px 0px -20% 0px' },
    )
    document.querySelectorAll('[data-mark]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [lang]) // ganti bahasa = elemen baru, observe ulang
}
