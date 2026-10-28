import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const EASE = 'power3.out'

/** Entrada do hero: título palavra a palavra, textos, CTA e fotografia. */
function heroIntro(root) {
  const words = root.querySelectorAll('[data-hero] [data-word]')
  const items = root.querySelectorAll('[data-hero-item]')
  const photoBox = root.querySelector('[data-hero-visual] [data-reveal-photo]')
  const photoImg = photoBox?.querySelector('img')
  const frame = root.querySelector('.hero__frame')

  const tl = gsap.timeline({ defaults: { ease: EASE } })
  tl.from(items[0], { y: 14, opacity: 0, duration: 0.7 }, 0.1)
    .from(words, { yPercent: 115, duration: 1, stagger: 0.07 }, 0.2)
    .from(items.length > 1 ? [...items].slice(1) : [], { y: 20, opacity: 0, duration: 0.8, stagger: 0.12 }, 0.75)

  if (photoBox) {
    tl.from(photoBox, { clipPath: 'inset(0 0 100% 0)', duration: 1.4, ease: 'power4.inOut' }, 0.15)
    if (photoImg) tl.from(photoImg, { scale: 1.12, duration: 1.8 }, 0.15)
  }
  if (frame) tl.from(frame, { opacity: 0, x: -14, y: 14, duration: 1.1 }, 0.9)

  return tl
}

/** Títulos, textos e botões: surgem uma vez, ao entrar na tela. */
function scrollReveals(root) {
  root.querySelectorAll('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: 0.9,
      ease: EASE,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })
}

/** Fotografias (exceto a do hero): revelação por clip-path + leve desacelerar da escala. */
function photoReveals(root) {
  root.querySelectorAll('[data-reveal-photo]').forEach((box) => {
    if (box.closest('[data-hero-visual]')) return
    const img = box.querySelector('img')
    const tl = gsap.timeline({
      scrollTrigger: { trigger: box, start: 'top 85%', once: true },
    })
    tl.from(box, { clipPath: 'inset(0 0 100% 0)', duration: 1.3, ease: 'power4.inOut' })
    if (img) tl.from(img, { scale: 1.14, duration: 1.7, ease: EASE }, 0)
  })
}

/** Cards de atendimento com stagger. */
function cardReveals(root) {
  const cards = root.querySelectorAll('[data-card]')
  if (!cards.length) return
  gsap.set(cards, { y: 36, opacity: 0 })
  ScrollTrigger.batch(cards, {
    start: 'top 90%',
    once: true,
    // clearProps devolve o `transform` ao CSS, para o hover dos cards continuar funcionando.
    onEnter: (batch) =>
      gsap.to(batch, { y: 0, opacity: 1, duration: 0.9, ease: EASE, stagger: 0.14, clearProps: 'transform,opacity' }),
  })
}

/** CTA final: círculos decorativos respiram suavemente conforme a rolagem. */
function finalSection(root) {
  const rings = root.querySelectorAll('.final__ring')
  rings.forEach((ring, i) => {
    gsap.fromTo(
      ring,
      { scale: 0.82 },
      {
        scale: 1.06,
        ease: 'none',
        scrollTrigger: { trigger: '.final', start: 'top bottom', end: 'bottom top', scrub: 1.2 + i * 0.4 },
      },
    )
  })
}

/** Botões: preenchimento circular a partir do ponto de entrada do cursor. */
function buttonHover(root) {
  const cleanups = []
  root.querySelectorAll('.btn:not(.is-pending)').forEach((btn) => {
    const fill = btn.querySelector('.btn__fill')
    if (!fill) return
    gsap.set(fill, { xPercent: -50, yPercent: -50, scale: 0 })
    const origin = (event) => {
      const rect = btn.getBoundingClientRect()
      gsap.set(fill, { x: event.clientX - rect.left, y: event.clientY - rect.top })
    }
    const enter = (event) => {
      origin(event)
      gsap.to(fill, { scale: 1, duration: 0.6, ease: EASE, overwrite: 'auto' })
    }
    const leave = (event) => {
      origin(event)
      gsap.to(fill, { scale: 0, duration: 0.45, ease: 'power2.out', overwrite: 'auto' })
    }
    btn.addEventListener('pointerenter', enter)
    btn.addEventListener('pointerleave', leave)
    cleanups.push(() => {
      btn.removeEventListener('pointerenter', enter)
      btn.removeEventListener('pointerleave', leave)
    })
  })
  return () => cleanups.forEach((fn) => fn())
}

/**
 * Registra todas as animações da página dentro do escopo informado.
 * O contexto do useGSAP reverte tudo (tweens e ScrollTriggers) ao desmontar.
 */
export function useLandingAnimations(scopeRef) {
  useGSAP(
    () => {
      const root = scopeRef.current
      if (!root) return undefined

      // Estado do cabeçalho: só alterna uma classe (a transição é feita em CSS).
      ScrollTrigger.create({
        start: 40,
        end: 'max',
        toggleClass: { targets: root.querySelector('[data-header]'), className: 'is-scrolled' },
      })

      // Fontes web alteram alturas: recalcula os gatilhos quando carregarem.
      document.fonts?.ready.then(() => ScrollTrigger.refresh())

      const mm = gsap.matchMedia()

      // Conteúdo permanece visível e estático para quem prefere movimento reduzido.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        heroIntro(root)
        scrollReveals(root)
        photoReveals(root)
        cardReveals(root)
        finalSection(root)

        const hoverMm = gsap.matchMedia()
        hoverMm.add('(hover: hover) and (pointer: fine)', () => buttonHover(root))
        return () => hoverMm.revert()
      })

      return () => mm.revert()
    },
    { scope: scopeRef },
  )
}
