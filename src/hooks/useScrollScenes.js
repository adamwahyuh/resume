import { useEffect, useState } from 'react'
import { sections } from '../data.js'

const clamp = (v) => Math.min(1, Math.max(0, v))

// Satu loop rAF: posisi scroll hanya menentukan target, nilai CSS di-lerp ke target
// supaya gerak tetap halus walau wheel mouse melompat per tick.
export function useScrollScenes(trackRef, lang) {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const root = document.documentElement
    const hero = document.querySelector('.hero')
    const pinned = window.matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const v = (el, prop) => ({ el, prop, cur: 0, target: 0, written: null })
    const scenes = [...document.querySelectorAll('[data-scene]')].map((el) => v(el, '--p'))
    const views = [...document.querySelectorAll('[data-view]')].map((el) => v(el, '--v'))
    const page = v(root, '--page')
    const mx = v(hero, '--mx')
    const my = v(hero, '--my')
    const all = [...scenes, ...views, page, mx, my]
    let tops = []
    let frame = 0
    let last = 0
    let lastActive = ''

    // Semua baca layout di sini; tulis hanya di tick() supaya tidak layout thrashing.
    const measure = () => {
      const vh = window.innerHeight
      for (const s of scenes) {
        const r = s.el.getBoundingClientRect()
        s.target = clamp(-r.top / Math.max(1, r.height - vh))
      }
      for (const s of views) {
        const r = s.el.getBoundingClientRect()
        s.target = clamp((vh - r.top) / (vh + r.height))
      }
      // playhead diinterpolasi per section supaya keyframe bisa berjarak rata
      const y = window.scrollY
      let i = 0
      while (i < tops.length - 2 && y >= tops[i + 1]) i++
      page.target = (i + clamp((y - tops[i]) / Math.max(1, tops[i + 1] - tops[i]))) / (tops.length - 1)
      let current = 'top'
      for (const [id] of sections) {
        if (document.getElementById(id).getBoundingClientRect().top <= vh * 0.4) current = id
      }
      if (current !== lastActive) { lastActive = current; setActive(current) }
    }

    const tick = (now) => {
      const dt = last ? Math.min(64, now - last) : 16
      last = now
      const k = calm.matches ? 1 : 1 - Math.exp(-dt / 85) // konstanta waktu ~85ms, sama di 60Hz dan 120Hz
      let moving = false
      for (const s of all) {
        const d = s.target - s.cur
        if (Math.abs(d) > 0.0003) { s.cur += d * k; moving = true } else s.cur = s.target
        if (s.cur !== s.written) { s.el.style.setProperty(s.prop, s.cur.toFixed(4)); s.written = s.cur }
      }
      frame = moving ? requestAnimationFrame(tick) : 0
      if (!moving) last = 0
    }
    const kick = () => { if (!frame) frame = requestAnimationFrame(tick) }

    const layout = () => {
      const track = trackRef.current
      const wrap = track.closest('[data-scene]')
      const extra = track.scrollWidth - window.innerWidth
      wrap.style.height = pinned.matches && extra > 0 ? `${extra + window.innerHeight}px` : ''
      wrap.style.setProperty('--shift', pinned.matches ? `${-Math.max(0, extra)}px` : '0px')
      const max = root.scrollHeight - window.innerHeight
      tops = sections.map(([id]) => Math.min(max, document.getElementById(id).offsetTop))
      measure()
      kick()
    }

    const onScroll = () => { measure(); kick() }
    const onPointer = (e) => {
      if (!finePointer.matches || calm.matches) return
      mx.target = (e.clientX / window.innerWidth) * 2 - 1
      my.target = (e.clientY / window.innerHeight) * 2 - 1
      kick()
    }
    const onLeave = () => { mx.target = 0; my.target = 0; kick() }

    layout()
    document.fonts?.ready.then(layout)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', layout)
    pinned.addEventListener('change', layout)
    hero.addEventListener('pointermove', onPointer)
    hero.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', layout)
      pinned.removeEventListener('change', layout)
      hero.removeEventListener('pointermove', onPointer)
      hero.removeEventListener('pointerleave', onLeave)
    }
  }, [trackRef, lang]) // ganti bahasa = lebar track berubah, ukur ulang

  return active
}
