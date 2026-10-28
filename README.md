# Patricia Silva | Terapia Podal — Landing page

Landing page de conversão (agendamento presencial em Cariacica — ES) com divulgação secundária do curso Spa dos Pés Completo.

**Stack:** React 19 + Vite, CSS3 próprio, GSAP + ScrollTrigger (`@gsap/react`), Lucide React.

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
| `WHATSAPP_NUMBER` (DDI+DDD+número, só dígitos) | Botões de agendamento aparecem **desativados** (sem link quebrado) |
| `COURSE_URL` | Botão do curso usa o WhatsApp com mensagem do curso; sem WhatsApp, fica desativado |
| `GOOGLE_MAPS_URL` | Opcional: o link é gerado por busca do endereço |
| `INSTAGRAM_URL` | Opcional: o link não aparece no rodapé |

Também pendente: **fotografias reais** e o **domínio** (trocar `og:image` em `index.html` por URL absoluta).

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

Entrada do hero (título por palavra, textos, CTA, foto com clip-path), reveals por rolagem (uma vez), fotos com clip-path, cards com stagger, cabeçalho que ganha fundo ao rolar (CSS), preenchimento circular nos botões e círculos do CTA final. Com `prefers-reduced-motion: reduce` nenhuma animação GSAP é registrada e o conteúdo fica estático e visível.
