import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { useGSAP } from '@gsap/react'
import { initSmoothScroll } from './smoothScroll'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP)

const EASE = 'power3.out'
const SOFT = 'power2.inOut'

/** Entrada do hero: título palavra a palavra, textos, CTA, foto orgânica e chips. */
function heroIntro(root) {
  const words = root.querySelectorAll('[data-hero] [data-word]')
  const items = [...root.querySelectorAll('[data-hero-item]')]
  const photoBox = root.querySelector('[data-hero-visual] [data-reveal-photo]')
  const photoImg = photoBox?.querySelector('img')
  const frame = root.querySelector('.hero__frame')
  const chips = root.querySelectorAll('[data-hero-visual] [data-chip]')
  const leaf = root.querySelector('.hero__leaf')

  const tl = gsap.timeline({ defaults: { ease: EASE } })
  tl.from(items[0], { y: 14, opacity: 0, duration: 0.7 }, 0.1)
    .from(words, { yPercent: 115, duration: 1.05, stagger: 0.07 }, 0.2)
    .from(items.slice(1), { y: 20, opacity: 0, duration: 0.85, stagger: 0.12 }, 0.75)

  if (photoBox) {
    tl.from(photoBox, { clipPath: 'inset(0 0 100% 0)', duration: 1.5, ease: 'power4.inOut' }, 0.15)
    if (photoImg) tl.from(photoImg, { scale: 1.14, duration: 2 }, 0.15)
  }
  if (frame) tl.from(frame, { opacity: 0, scale: 0.9, duration: 1.4 }, 0.8)
  if (leaf) {
    tl.from(leaf.querySelectorAll('path'), { drawSVG: 0, duration: 2.2, stagger: 0.05, ease: SOFT }, 0.6)
  }
  tl.from(chips, { opacity: 0, scale: 0.85, duration: 0.9, stagger: 0.15 }, 1.35)

  // Os chips flutuam bem devagar depois de entrar.
  chips.forEach((chip, i) => {
    gsap.to(chip, { y: i % 2 ? 9 : -9, duration: 3.4 + i * 0.6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2.2 })
  })
}

/** Títulos de seção: palavras sobem de dentro de uma máscara. */
function titleReveals(root) {
  root.querySelectorAll('[data-title]').forEach((title) => {
    gsap.from(title.querySelectorAll('[data-word]'), {
      yPercent: 115,
      duration: 1.1,
      stagger: 0.06,
      ease: EASE,
      scrollTrigger: { trigger: title, start: 'top 86%', once: true },
    })
  })
}

/** Textos e botões: surgem uma vez, ao entrar na tela. */
function scrollReveals(root) {
  root.querySelectorAll('[data-reveal]:not([data-reveal-photo])').forEach((el) => {
    gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: 1,
      ease: EASE,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    })
  })
}

/** Fotografias (exceto a do hero): revelação por clip-path + parallax suave dentro da moldura. */
function photoReveals(root) {
  root.querySelectorAll('[data-reveal-photo]').forEach((box) => {
    if (box.closest('[data-hero-visual]')) return

    gsap.from(box, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 1.4,
      ease: 'power4.inOut',
      scrollTrigger: { trigger: box, start: 'top 88%', once: true },
    })

    const img = box.querySelector('img')
    if (img) {
      gsap.fromTo(
        img,
        { scale: 1.18, yPercent: -7 },
        {
          yPercent: 7,
          ease: 'none',
          scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    }
  })
}

/** Formas orgânicas: "respiram" entre os border-radius, só enquanto visíveis. */
function blobMorph(root) {
  root.querySelectorAll('[data-blob]').forEach((el, i) => {
    const shapes = el.dataset.blob.split('|')
    const tl = gsap.timeline({ repeat: -1, yoyo: true, paused: true, defaults: { duration: 6.5 + (i % 3), ease: 'sine.inOut' } })
    shapes.slice(1).forEach((shape) => tl.to(el, { borderRadius: shape }))
    ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => (self.isActive ? tl.play() : tl.pause()),
    })
  })
}

/** Ondas das seções douradas: deslizam em loop contínuo e sem emendas. */
function waves(root) {
  root.querySelectorAll('[data-wave]').forEach((svg, i) => {
    gsap.fromTo(svg, { xPercent: 0 }, { xPercent: -50, duration: 22 + i * 4, ease: 'none', repeat: -1 })
  })
}

/** Ramos botânicos: o traço se desenha ao entrar na tela. */
function botanicals(root) {
  root.querySelectorAll('[data-botanical]').forEach((svg) => {
    if (svg.closest('[data-hero]')) return // o do hero entra junto com a timeline
    gsap.from(svg.querySelectorAll('path'), {
      drawSVG: 0,
      duration: 2.4,
      stagger: 0.05,
      ease: SOFT,
      scrollTrigger: { trigger: svg, start: 'top 90%', once: true },
    })
  })
}

/** Palavras gigantes ao fundo deslizam lateralmente conforme a rolagem. */
function ghostWords(root) {
  root.querySelectorAll('[data-ghost]').forEach((el) => {
    const toLeft = el.classList.contains('ghost--right')
    gsap.fromTo(
      el,
      { xPercent: toLeft ? 8 : -8 },
      {
        xPercent: toLeft ? -8 : 8,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    )
  })
}

/** Cards de atendimento com stagger. */
function cardReveals(root) {
  const cards = root.querySelectorAll('[data-card]')
  if (!cards.length) return
  gsap.set(cards, { y: 40, opacity: 0 })
  ScrollTrigger.batch(cards, {
    start: 'top 90%',
    once: true,
    // clearProps devolve o `transform` ao CSS, para o hover dos cards continuar funcionando.
    onEnter: (batch) =>
      gsap.to(batch, { y: 0, opacity: 1, duration: 1, ease: EASE, stagger: 0.15, clearProps: 'transform,opacity' }),
  })
}

/** Selo "8+" da seção de experiência e círculos do CTA final. */
function accents(root) {
  root.querySelectorAll('.experience__visual [data-chip]').forEach((seal) => {
    gsap.from(seal, {
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.5)',
      scrollTrigger: { trigger: seal, start: 'top 92%', once: true },
    })
  })

  root.querySelectorAll('.final__ring').forEach((ring, i) => {
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

      // Estados que dependem só de classe (a transição é feita em CSS) valem
      // também para quem prefere movimento reduzido.
      ScrollTrigger.create({
        start: 40,
        end: 'max',
        toggleClass: { targets: root.querySelector('[data-header]'), className: 'is-scrolled' },
      })

      const cta = root.querySelector('[data-float-cta]')
      if (cta) {
        ScrollTrigger.create({
          trigger: '[data-hero]',
          start: 'bottom 25%',
          end: 'max',
          toggleClass: { targets: cta, className: 'is-visible' },
        })
        ScrollTrigger.create({
          trigger: '#contato',
          start: 'top 85%',
          end: 'max',
          toggleClass: { targets: cta, className: 'is-hidden' },
        })
      }

      // Fontes web alteram alturas: recalcula os gatilhos quando carregarem.
      document.fonts?.ready.then(() => ScrollTrigger.refresh())

      const mm = gsap.matchMedia()

      // Conteúdo permanece visível e estático para quem prefere movimento reduzido.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const smooth = initSmoothScroll()

        heroIntro(root)
        titleReveals(root)
        scrollReveals(root)
        photoReveals(root)
        blobMorph(root)
        waves(root)
        botanicals(root)
        ghostWords(root)
        cardReveals(root)
        accents(root)

        const hoverMm = gsap.matchMedia()
        hoverMm.add('(hover: hover) and (pointer: fine)', () => buttonHover(root))

        return () => {
          hoverMm.revert()
          smooth.destroy()
        }
      })

      return () => mm.revert()
    },
    { scope: scopeRef },
  )
}
