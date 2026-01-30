# Estrutura da Landing Page Klassy

Este documento mapeia todas as seções, arquivos e componentes da landing page para facilitar modificações futuras sem afetar outras áreas.

---

## 📋 Índice

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Seções da Landing Page](#seções-da-landing-page)
4. [Sistema de Design](#sistema-de-design)
5. [JavaScript e Interatividade](#javascript-e-interatividade)
6. [Assets e Recursos](#assets-e-recursos)
7. [Como Modificar Seções Específicas](#como-modificar-seções-específicas)

---

## Visão Geral do Projeto

**Nome:** Klassy - Landing Page  
**Tipo:** Single Page Application (SPA)  
**Tecnologias:** HTML5, CSS3, JavaScript Vanilla  
**Design:** Minimalista, com foco em conversão  
**Paleta Principal:** Burgundy (#710014), Neutral Cream (#f2f1ed), Preto (#161616), Branco (#FFFFFF)

### Propósito
Landing page para plataforma educacional que transforma professores em donos de escolas digitais, com gestão financeira, portal do aluno e gamificação.

---

## Estrutura de Arquivos

```
landingpage-Klassy/
├── index.html              # Página principal (734 linhas)
├── styles.css              # Estilos CSS (829 linhas)
├── script.js               # JavaScript (104 linhas)
├── design-system.md        # Sistema de design completo (475 linhas)
├── STRUCTURE.md            # Este arquivo (documentação)
├── assets/
│   ├── images/             # Imagens do projeto (11 arquivos)
│   │   ├── dark_logo.svg
│   │   ├── light_logo.svg
│   │   ├── dark_icon.svg
│   │   ├── light_icon.svg
│   │   ├── macbook.png
│   │   ├── professor_sala.png
│   │   ├── pessoas_andando.jpg
│   │   ├── corredor_escolar.png
│   │   ├── reuniao.png
│   │   ├── metropole.jpeg
│   │   └── Logo-execflow-sem-fundo.png
│   └── videos/             # Pasta para vídeos (vazia)
└── modelos_midia/          # Modelos de mídia da marca (6 arquivos)
    ├── Branding Klassy.png
    ├── dark_icon.png
    ├── dark_logo.png
    ├── light_icon.png
    ├── light_logo.png
    └── sala_vazia.jpg
```

---

## Seções da Landing Page

### 1. Navegação

**Localização HTML:** Linhas 23-44  
**Classe CSS Principal:** `.nav`  
**Background:** `rgba(242, 241, 237, 0.7)` com `backdrop-filter: blur(12px)`

#### Conteúdo:
- **Logo (Esquerda):** SVG `dark_logo.svg` (32px altura)
- **Links Centrais:** Funcionalidades, Sobre, Preços
- **Ações (Direita):** Botão "Entre em contato"

#### Estilos Relacionados:
```css
.nav
.nav-content
.logo
.logo-image
.nav-links
.nav-actions
.btn-small
```

#### Comportamento:
- **Sticky:** Fixo no topo com `position: sticky`
- **Glassmorphism:** Background translúcido com blur
- **Scroll Effect:** Adiciona sombra sutil após 50px de scroll (via JavaScript)
- **Layout:** Flexbox com 3 seções (Left/Center/Right)
- **Responsive:** Links e ações ocultam em mobile (<968px)

---

### 2. Hero Section

**Localização HTML:** Linhas 47-81  
**Classe CSS Principal:** `.hero`  
**Background:** `--neutral-50` (#f2f1ed)  
**Altura Mínima:** 700px

#### Conteúdo:

**Coluna Esquerda (45% - Texto):**
- **Headline:** "Sua própria escola digital." (Inter, 64px, 700 weight)
- **Subheadline:** Descrição do parceiro educacional (17px, 400 weight)
- **CTA:** Botão Primário "Começar grátis"

**Coluna Direita (55% - Visual Gamma Style):**
- **Composição Flutuante:** 3 cards com rotação e posicionamento absoluto
- **Card Principal (Centro):** `macbook.png` - 520x320px, z-index: 2
- **Card Secundário (Topo Direita):** `professor_sala.png` - 160x220px, rotação 8deg, z-index: 3
- **Card Terciário (Baixo Esquerda):** `pessoas_andando.jpg` - 180x140px, rotação -6deg, z-index: 1

#### Estilos Relacionados:
```css
.hero
.hero-content
.hero-title
.hero-subtitle
.hero-actions
.hero-visual
.visual-card
.card-main
.card-secondary
.card-tertiary
```

#### Comportamento:
- **Hover no Visual:** Cards aumentam rotação e deslocamento vertical
- **Grid:** 2 colunas desktop / 1 coluna mobile
- **Transições:** `var(--duration-slow)` (600ms)

---

### 3. Features Carousel

**Localização HTML:** Linhas 84-286  
**Classe CSS Principal:** `.features-carousel`  
**Background:** `#f2f1ed`  
**Padding:** 80px vertical

#### Conteúdo:
- **Cabeçalho:** 
  - Título: "Todos os recursos que você precisa"
  - Subtítulo: "Tudo para você escalar sua escola digital"

- **Carousel (4 Cards):**
  1. **Gestão Financeira Completa** (Ícone: cifrão)
     - Cobrança automática
     - Relatórios em tempo real
     - Previsão de faturamento
  
  2. **Retenção pelo Hábito** (Ícone: check)
     - 5 exercícios/dia
     - Sistema de streaks
     - Gamificação viciante
  
  3. **Portal do Aluno Premium** (Ícone: usuários)
     - Perfil customizável
     - Feed da turma
     - Badges e Conquistas
  
  4. **Acompanhamento Pedagógico** (Ícone: livro)
     - Dashboard de desempenho
     - Alertas de evasão
     - Feedback individual

#### Estrutura Técnica:
```
#carouselContainer (max-width: 620px, padding: 0 70px)
  └── overflow: hidden wrapper
       └── #simpleTrack (display: flex, transform: translateX)
            └── 4 slides (min-width: 100%)
                 └── .feature-card (white, 450px height, 40px padding)
  └── #simplePrev (absolute left: 5px)
  └── #simpleNext (absolute right: 5px)
#simpleDots (centralizado, 32px margin-top)
```

#### Comportamento JavaScript:
- **Auto-Rotação:** Muda de card a cada 5 segundos
- **Pausa no Hover:** Rotação pausa quando mouse sobre o track
- **Navegação Manual:** Botões ←/→ e dots resetam timer
- **Transição:** `transform: translateX(-N%)` com `transition: 0.5s ease`
- **Indicadores:** Dots dinâmicos (8px normal, 24x8px ativo, cor #710014)
- **Touch Support:** Swipe left/right em dispositivos touch (threshold: 50px)
- **Hover nos Botões:** Background muda para #710014, ícone para branco

#### Estilos dos Cards:
- **Background:** White
- **Border Radius:** 16px
- **Box Shadow:** `0 4px 12px rgba(0,0,0,0.1)`
- **Ícone Container:** 64x64px, background #f2f1ed, ícone 32x32px stroke #710014
- **Título:** 22px, 700 weight, #1a1a1a
- **Texto:** 15px, line-height 1.6, #666
- **Lista:** Checkmarks vermelhos (#710014), texto #333

---

### 4. Pricing

**Localização HTML:** Linhas 289-407  
**Classe CSS Principal:** `.pricing`  
**Background:** `linear-gradient(135deg, #710014 0%, #5a0010 100%)`  
**Padding:** 80px vertical

#### Conteúdo:
- **Título:** "Planos simples e transparentes" (branco)
- **Subtítulo:** "Escolha o plano ideal para o tamanho da sua escola" (branco 90% opacidade)

#### Card 1: Starter
- **Preço:** R$ 97/mês
- **Descrição:** Para quem está começando
- **Features:**
  - Até 15 alunos
  - Gestão financeira básica
  - Exercícios ilimitados
  - Suporte por email
- **CTA:** Botão outline "Começar"
- **Estilo:** Background branco, borda 2px, shadow `rgba(113, 0, 20, 0.25)`

#### Card 2: Pro (Destaque)
- **Badge:** "Mais Popular" (posição absolute top: -16px)
- **Preço:** R$ 197/mês
- **Descrição:** Para professores em crescimento
- **Features:**
  - Alunos ilimitados
  - Financeiro completo
  - Gamificação avançada
  - Suporte prioritário
  - Relatórios personalizados
- **CTA:** Botão primário "Começar Agora"
- **Estilo:** 
  - `transform: scale(1.05)`
  - Borda burgundy 2px
  - Shadow `rgba(113, 0, 20, 0.35)`
  - Badge: background #710014, borda branca 2px

#### Estilos Relacionados:
```css
.pricing
.pricing-grid (grid 2 colunas, gap 32px, max-width 900px)
.pricing-card
.pricing-featured
.pricing-badge
.pricing-header
.pricing-name
.pricing-desc
.pricing-price
.price-currency (24px, #710014)
.price-value (56px, 700 weight, #710014)
.price-period (18px, #666)
.pricing-features
```

#### Comportamento:
- **Grid:** 2 colunas desktop / 1 coluna mobile
- **Hover nos Botões:** Inline styles com `onmouseover`/`onmouseout`
- **Responsive:** Cards empilham em mobile (<968px)

---

### 5. Final CTA

**Localização HTML:** Linhas 410-439  
**Classe CSS Principal:** `.cta`  
**Background:** Transparente (herda do body)  
**Padding:** 60px top, 180px bottom (espaço para footer scrollytelling)

#### Conteúdo:
- **Título:** "Sua escola digital está aqui<br>entre em contato." (56px, max-width 900px)
- **Botões (2):**
  1. **WhatsApp:** Link para `https://wa.me/5511999999999`
     - Ícone SVG 28x28px
     - Texto: "Nosso WhatsApp"
     - Width: 280px
  
  2. **ExecFlow:** Link para `https://execflow.com`
     - Logo ExecFlow (28px altura)
     - Width: 280px

#### Estilos dos Botões:
- **Display:** `inline-flex`, gap 14px
- **Padding:** 20px 40px
- **Background:** #710014
- **Color:** #FFFFFF
- **Font Size:** 18px, 600 weight
- **Border Radius:** 12px
- **Box Shadow:** `0 4px 12px rgba(113, 0, 20, 0.3)`
- **Hover:** Background #8a0018, translateY(-2px), shadow aumenta

#### Layout:
- **Container:** Centralizado
- **Flex:** Gap 32px, wrap habilitado
- **Responsive:** Botões empilham em mobile

---

### 6. Footer (Scrollytelling)

**Localização HTML:** Linhas 442-489  
**Classe CSS Principal:** `.footer`  
**Background:** `#710014` (gradient burgundy)  
**Posicionamento:** `position: fixed`, `bottom: 0`, `transform: translateY(100%)`

#### Conteúdo:

**Seção Principal (Grid 2 colunas):**

**Coluna 1: Brand**
- Logo: `light_logo.svg` (48px altura)
- Tagline: "Transformando professores em donos de escolas digitais." (branco 80% opacidade)

**Coluna 2: Links**
- **Produto:**
  - Funcionalidades
  - Preços
  - Casos de Uso

**Footer Bottom:**
- **Copyright:** "© 2026 Klassy. Todos os direitos reservados."
- **Desenvolvido por:** Link para ExecFlow (hover verde #00FF00)

#### Comportamento Scrollytelling (JavaScript):
```javascript
// Linhas 648-728 do index.html
- Ativa quando usuário chega ao final exato da página (distanceFromBottom <= 0)
- Controla progresso de 0 a 100 via scroll wheel
- 5 movimentos de scroll para revelar completamente (20% por movimento)
- Scroll para cima esconde instantaneamente (100% decremento)
- Trava scroll da página enquanto footer está visível (progress > 0)
- Transform: translateY(100% - progress%)
- Desativa scrollytelling se usuário rolar para longe do final E footer está escondido
```

#### Estilos Relacionados:
```css
.footer (fixed, z-index: 1000)
.footer-content (grid 2fr 1fr)
.footer-brand
.footer-tagline
.footer-links (flex, gap 48px)
.footer-column
.footer-bottom (flex space-between)
.footer-legal
```

#### Características:
- **Box Shadow:** `0 -4px 12px rgba(0, 0, 0, 0.3)`
- **Cores:** Texto branco/branco 80% opacidade
- **Links Hover:** Cor #FFFFFF
- **Responsive:** Grid 1 coluna em mobile (<768px)

---

## Sistema de Design

### Paleta de Cores

| Token | Valor HEX | Uso |
|-------|-----------|-----|
| `--primary-900` | #710014 | Cor principal da marca, CTAs, acentos |
| `--primary-700` | #712d1f | Cor secundária, variações |
| `--neutral-0` | #FFFFFF | Texto em fundos escuros, cards |
| `--neutral-50` | #f2f1ed | Background claro, superfícies |
| `--neutral-100` | #e8e6e1 | Superfícies secundárias |
| `--neutral-700` | #4a4a4a | Texto secundário |
| `--neutral-800` | #1f1f1f | Backgrounds escuros |
| `--neutral-900` | #161616 | Texto principal |

### Tipografia

**Fontes:**
- **Display/Headings:** Inter (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Fallback:** -apple-system, BlinkMacSystemFont, sans-serif

**Escala de Tamanhos:**
- Hero Title: 64px (mobile: 48px)
- Section Title: 40px (mobile: 32px)
- CTA Title: 48px (mobile: 32px)
- Feature Card Title: 22px
- Body Large: 18px
- Body Default: 17px
- Body Small: 15px
- Button: 14-20px

### Espaçamento

**Tokens:**
- `--space-tiny`: 12px
- `--space-small`: 24px
- `--space-4`: 16px
- `--space-6`: 24px
- `--space-8`: 32px
- `--space-medium`: 48px
- `--space-large`: 80px
- `--space-section`: 120px (desktop)
- `--space-section-mobile`: 80px

### Border Radius

- `--radius-sm`: 8px
- `--radius-md`: 12px
- `--radius-lg`: 16px

### Sombras

- `--shadow-subtle`: 0 1px 3px rgba(0, 0, 0, 0.04)
- `--shadow-card`: 0 2px 8px rgba(0, 0, 0, 0.06)

### Animações

- `--duration-fast`: 200ms
- `--duration-normal`: 400ms
- `--duration-slow`: 600ms

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

---

## JavaScript e Interatividade

### Arquivo: script.js (104 linhas)

**Funcionalidades:**

1. **Smooth Scroll** (Linhas 9-20)
   - Aplica scroll suave para links âncora (`href^="#"`)
   - Comportamento: `smooth`, block: `start`

2. **Fade-In on Scroll** (Linhas 23-47)
   - IntersectionObserver com threshold 0.1
   - Elementos: `.feature`, `.stat-item`, `.pricing-card`, `.professors-grid`
   - Efeito: opacity 0→1, translateY(20px)→0
   - Transição: 0.6s ease

3. **Navbar Scroll Effect** (Linhas 50-64)
   - Adiciona shadow quando scroll > 50px
   - Shadow: `0 2px 8px rgba(0, 0, 0, 0.04)`

4. **Pricing Card Hover** (Linhas 81-93)
   - Borda muda para `--primary-900` no hover
   - Reseta para `rgba(0, 0, 0, 0.12)` se não for `.pricing-featured`

5. **Prevent Layout Shift** (Linhas 101-103)
   - Define `body opacity: 1` no load

### JavaScript Inline (index.html)

**Smooth Scroll** (Linhas 493-502)
- Duplicado do script.js para garantia

**Fade-In Observer** (Linhas 505-524)
- Observa `.feature` e `.pricing-card`

**Simple Carousel** (Linhas 527-646)
- **Variáveis:**
  - `currentSlide`: 0-3
  - `totalSlides`: 4
  - `autoTimer`: setInterval handle
  
- **Funções:**
  - `update()`: Atualiza transform e dots
  - `goTo(index)`: Vai para slide específico
  - `next()`: Próximo slide (circular)
  - `prev()`: Slide anterior (circular)
  - `startAuto()`: Inicia rotação automática (5s)
  - `stopAuto()`: Para rotação
  - `resetTimer()`: Reinicia timer
  
- **Event Listeners:**
  - Botões prev/next: click + hover effects
  - Track: mouseenter/mouseleave (pausa/resume)
  - Touch: touchstart/touchend (swipe support)
  - Dots: click para navegação direta

**Footer Scrollytelling** (Linhas 649-728)
- **Variáveis:**
  - `footerProgress`: 0-100
  - `isScrollytelling`: boolean
  - `scrollytellingStarted`: boolean
  
- **Lógica:**
  - Ativa quando `distanceFromBottom <= 0`
  - Wheel event: deltaY > 0 aumenta progress (+20), deltaY < 0 diminui (-100)
  - Trava scroll da página quando progress > 0 (`e.preventDefault()`)
  - Transform: `translateY(${100 - footerProgress}%)`
  - Desativa se usuário rolar para longe (distanceFromBottom > 50 E progress === 0)

---

## Assets e Recursos

### Imagens (assets/images/)

| Arquivo | Dimensões/Tipo | Uso | Tamanho |
|---------|----------------|-----|---------|
| `dark_logo.svg` | SVG | Logo na navegação (fundo claro) | 8KB |
| `light_logo.svg` | SVG | Logo no footer (fundo escuro) | 13KB |
| `dark_icon.svg` | SVG | Ícone da marca (fundo claro) | 5KB |
| `light_icon.svg` | SVG | Ícone da marca (fundo escuro) | 13KB |
| `macbook.png` | 520x320px | Hero - Card principal (dashboard) | 1.1MB |
| `professor_sala.png` | 160x220px | Hero - Card secundário | 1.2MB |
| `pessoas_andando.jpg` | 180x140px | Hero - Card terciário | 68KB |
| `corredor_escolar.png` | - | Não utilizado atualmente | 1.2MB |
| `reuniao.png` | - | Não utilizado atualmente | 1.4MB |
| `metropole.jpeg` | - | Não utilizado atualmente | 604KB |
| `Logo-execflow-sem-fundo.png` | 28px altura | CTA - Botão ExecFlow | 112KB |

### Modelos de Mídia (modelos_midia/)

| Arquivo | Tipo | Descrição | Tamanho |
|---------|------|-----------|---------|
| `Branding Klassy.png` | PNG | Guia de branding completo | 4.3MB |
| `dark_icon.png` | PNG | Ícone versão PNG (fundo claro) | 10KB |
| `dark_logo.png` | PNG | Logo versão PNG (fundo claro) | 56KB |
| `light_icon.png` | PNG | Ícone versão PNG (fundo escuro) | 11KB |
| `light_logo.png` | PNG | Logo versão PNG (fundo escuro) | 63KB |
| `sala_vazia.jpg` | JPG | Imagem de contexto | 89KB |

### Fontes Externas

**Google Fonts:**
- Inter: weights 300, 400, 500, 600, 700
- Carregamento: preconnect + display=swap

---

## Como Modificar Seções Específicas

### Guia de Modificação Segura

#### 1. Modificar apenas a Navegação

**Arquivos a editar:**
- `index.html`: Linhas 23-44
- `styles.css`: Linhas 112-173

**Classes isoladas:**
```css
.nav
.nav-content
.logo
.logo-image
.nav-links
.nav-actions
.btn-small
```

**Cuidados:**
- Não alterar `.container` (afeta todas as seções)
- Manter estrutura flexbox (Left/Center/Right)

---

#### 2. Modificar apenas o Hero

**Arquivos a editar:**
- `index.html`: Linhas 47-81
- `styles.css`: Linhas 230-422

**Classes isoladas:**
```css
.hero
.hero-content
.hero-title
.hero-subtitle
.hero-actions
.hero-visual
.visual-card
.card-main
.card-secondary
.card-tertiary
```

**Cuidados:**
- Manter proporções do grid (45% / 55%)
- Preservar z-index dos cards (1, 2, 3)
- Não alterar `.btn-primary` (usado em outras seções)

---

#### 3. Modificar apenas o Carousel

**Arquivos a editar:**
- `index.html`: Linhas 84-286 (HTML) + Linhas 527-646 (JavaScript)
- Estilos inline no próprio HTML

**IDs importantes:**
```javascript
#carouselContainer
#simpleTrack
#simplePrev
#simpleNext
#simpleDots
#prevIcon
#nextIcon
```

**Cuidados:**
- Alterar `totalSlides` se adicionar/remover cards
- Manter estrutura de slides com `min-width: 100%`
- Preservar event listeners (click, hover, touch)

---

#### 4. Modificar apenas o Pricing

**Arquivos a editar:**
- `index.html`: Linhas 289-407
- `styles.css`: Linhas 514-662

**Classes isoladas:**
```css
.pricing
.pricing-grid
.pricing-card
.pricing-featured
.pricing-badge
.pricing-header
.pricing-name
.pricing-desc
.pricing-price
.pricing-features
```

**Cuidados:**
- Card Pro usa `transform: scale(1.05)` - ajustar grid gap se necessário
- Badge usa `position: absolute` - manter espaço no topo
- Estilos inline nos botões (onmouseover/onmouseout)

---

#### 5. Modificar apenas o CTA

**Arquivos a editar:**
- `index.html`: Linhas 410-439
- `styles.css`: Linhas 665-691

**Classes isoladas:**
```css
.cta
.cta-title
```

**Cuidados:**
- Manter padding-bottom: 180px (espaço para footer scrollytelling)
- Botões usam estilos inline (não há classes CSS)

---

#### 6. Modificar apenas o Footer

**Arquivos a editar:**
- `index.html`: Linhas 442-489 (HTML) + Linhas 649-728 (JavaScript)
- `styles.css`: Linhas 694-789

**Classes isoladas:**
```css
.footer
.footer-content
.footer-brand
.footer-tagline
.footer-links
.footer-column
.footer-bottom
.footer-legal
```

**Cuidados:**
- Não remover `position: fixed` e `transform: translateY(100%)`
- JavaScript scrollytelling depende de variáveis específicas
- Alterar z-index pode afetar sobreposição

---

### Estilos Globais (Afetam Tudo)

**Não modificar sem revisar impacto:**
```css
:root { } /* Variáveis CSS */
* { } /* Reset global */
html { }
body { }
.container { }
.btn-primary { }
.btn-outline { }
.btn-small { }
```

---

## 📐 Tabelas de Referência Rápida

### Backgrounds por Seção

| Seção | Background | Texto Principal |
|-------|-----------|-----------------|
| Nav | `rgba(242, 241, 237, 0.7)` + blur | `#4a4a4a` |
| Hero | `#f2f1ed` | `#161616` |
| Features Carousel | `#f2f1ed` | `#1a1a1a` |
| Pricing | `linear-gradient(135deg, #710014, #5a0010)` | `#FFFFFF` |
| CTA | Transparente | `#161616` |
| Footer | `#710014` | `#FFFFFF` |

### Padding Vertical por Seção

| Seção | Desktop | Mobile |
|-------|---------|--------|
| Nav | 12px | 12px |
| Hero | 80px top / 100px bottom | 80px |
| Features Carousel | 80px | 80px |
| Pricing | 80px | 80px |
| CTA | 60px top / 180px bottom | 60px top / 180px bottom |
| Footer | Dinâmico (scrollytelling) | Dinâmico |

### Interatividade JavaScript

| Funcionalidade | Arquivo | Linhas | Trigger |
|----------------|---------|--------|---------|
| Smooth Scroll | script.js + inline | 9-20, 493-502 | Click em links âncora |
| Fade-In | script.js + inline | 23-47, 505-524 | IntersectionObserver |
| Navbar Shadow | script.js | 50-64 | Scroll > 50px |
| Carousel Auto | inline | 527-646 | Interval 5s + manual |
| Footer Scrollytelling | inline | 649-728 | Scroll ao final da página |
| Pricing Hover | script.js | 81-93 | Mouseenter/leave |

---

## 📝 Notas Importantes

1. **Consistência de Cores:** Toda a landing page usa a paleta burgundy (#710014) como cor de ação principal
2. **Espaçamento:** Sistema baseado em múltiplos de 8px (4px para micro-ajustes)
3. **Transições:** Todas usam 400ms (normal) ou 600ms (slow) para consistência
4. **Responsive:** Breakpoint principal em 968px (desktop) e 768px (mobile)
5. **Glassmorphism:** Apenas na navegação (backdrop-filter: blur(12px))
6. **Scrollytelling:** Footer usa técnica avançada de scroll progressivo (5 movimentos)
7. **Performance:** Imagens PNG grandes (macbook, professor, reunião) podem ser otimizadas para WebP
8. **Acessibilidade:** Falta de atributos ARIA e foco visível em elementos interativos
9. **SEO:** Meta description presente, mas faltam Open Graph e Twitter Cards
10. **Mobile Menu:** Navegação simplesmente oculta em mobile - considerar implementar menu hambúrguer

---

## 🔄 Histórico de Versões

**Versão 2.0** - 2026-01-30
- Documentação completa e detalhada de todas as seções
- Mapeamento de JavaScript inline e externo
- Catalogação de todos os assets
- Guias de modificação por seção

**Versão 1.0** - 2026-01-27
- Redesign minimalista
- Estrutura inicial da documentação

---

**Última Atualização:** 2026-01-30  
**Mantido por:** Equipe de Desenvolvimento  
**Projeto:** Klassy Landing Page
