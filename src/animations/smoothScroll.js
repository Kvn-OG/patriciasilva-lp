import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

let lenis = null

/** Rolagem inercial (Lenis) sincronizada com o ScrollTrigger e o ticker do GSAP. */
export function initSmoothScroll() {
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)

  const tick = (time) => lenis?.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  // Links âncora (#secao) rolam com a mesma inércia.
  const onClick = (event) => {
    const link = event.target.closest?.('a[href^="#"]')
    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey) return
    const hash = link.getAttribute('href')
    const target = hash.length > 1 ? document.querySelector(hash) : null
    if (!target) return
    event.preventDefault()
    lenis.start() // o menu mobile pode ter pausado a rolagem
    // O Lenis já considera o `scroll-padding-top` do CSS (altura do cabeçalho).
    lenis.scrollTo(hash === '#inicio' ? 0 : target, { duration: 1.5 })
  }
  document.addEventListener('click', onClick)

  return {
    destroy() {
      document.removeEventListener('click', onClick)
      gsap.ticker.remove(tick)
      gsap.ticker.lagSmoothing(500, 33)
      lenis?.destroy()
      lenis = null
    },
  }
}

/** Pausa/retoma a rolagem (menu mobile aberto). Sem efeito se o Lenis não estiver ativo. */
export const stopScroll = () => lenis?.stop()
export const startScroll = () => lenis?.start()
