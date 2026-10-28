# Patricia Silva | Terapia Podal — Landing page

Landing page de conversão (agendamento presencial em Cariacica — ES) com divulgação secundária do curso Spa dos Pés Completo.

**Stack:** React 19 + Vite, CSS3 próprio, GSAP + ScrollTrigger + DrawSVG (`@gsap/react`), Lenis (smooth scroll), Lucide React.

## Executar localmente

Requer Node.js 20+.

```bash
npm install
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # build de produção em /dist
npm run preview  # serve o build localmente
```

Não há backend, banco de dados nem variáveis de ambiente. Nada sensível é armazenado no código.

## Informações pendentes (preencher em `src/config/siteConfig.js`)

| Campo | Efeito enquanto vazio |
| --- | --- |
| `WHATSAPP_NUMBER` (DDI+DDD+número, só dígitos) | **Preenchido** (5527997870881). Se esvaziar, os botões de agendamento ficam desativados |
| `COURSE_URL` | Botão do curso usa o WhatsApp com mensagem do curso; sem WhatsApp, fica desativado |
| `GOOGLE_MAPS_URL` | Opcional: o link é gerado por busca do endereço |
| `INSTAGRAM_URL` | Opcional: o link não aparece no rodapé |

Também pendente: **fotografias reais**, o **favicon definitivo** (hoje a página fica sem favicon; ver comentário em `index.html`) e o **domínio** (trocar `og:image` em `index.html` por URL absoluta).

O mapa da seção Localização é o embed do Google Maps por busca do endereço (sem chave de API). Confirme com a Patricia se o ponto marcado é o correto; se necessário, defina `GOOGLE_MAPS_URL`.

## Imagens

As fotos em `public/images/` são **ilustrativas** (Unsplash, uso livre) e não representam Patricia nem o espaço real. Para substituir, troque o arquivo mantendo o nome, ou ajuste `src`/`width`/`height`/`alt` em `IMAGES` (`src/config/siteConfig.js`).

## Estrutura

```
src/
  animations/useLandingAnimations.js   # toda a linguagem de movimento (GSAP)
  components/                          # Header, Hero, About, Services, Experience, Course, Location, FinalCTA, Footer + Button, Photo, SplitWords
  config/siteConfig.js | links.js      # contatos, endereço, imagens e montagem dos links
  styles/global.css | sections.css | animations.css
```

## Animações

Smooth scroll inercial (Lenis, sincronizado ao ScrollTrigger; âncoras também rolam suavemente). Entrada do hero (título por palavra, textos, CTA, foto orgânica, chips flutuantes), títulos de seção por palavra, reveals por rolagem (uma vez), fotos com clip-path e parallax suave, formas orgânicas que "respiram" (só enquanto visíveis), ondas douradas em loop, ramos botânicos que se desenham, palavras-fantasma que deslizam, cards com stagger, preenchimento circular nos botões e atalho flutuante do WhatsApp (aparece após o hero).

Com `prefers-reduced-motion: reduce` nenhuma animação GSAP nem o Lenis são iniciados: o conteúdo fica estático e visível, e a rolagem é nativa.

O mapa só responde ao mouse depois do clique (evita que o scroll da página "prenda" no mapa).
