# Estrutura da Landing Page Klassy

Este documento mapeia todas as seções da landing page para facilitar modificações futuras sem afetar outras áreas.

---

## 📋 Índice de Seções

1. [Navegação](#1-navegação)
2. [Hero Section](#2-hero-section)
3. [Features Carousel](#3-features-carousel)
4. [Pricing](#4-pricing)
5. [Final CTA](#5-final-cta)
6. [Footer](#6-footer)

---

## 1. Navegação

**Localização HTML:** Linhas 18-30  
**Classe CSS Principal:** `.nav`  
**Background:** `--neutral-50` (#f2f1ed)

### Conteúdo:
- **Logo:** Esquerda (ícone SVG + texto "Klassy")
- **Links:** Centro (Funcionalidades, Soluções, Sobre, Preços)
- **Ações:** Direita (Idioma, Login, Botão "Começar grátis")

### Estilos Relacionados:
```css
.nav
.nav-content
.logo
.nav-links
.nav-actions
.nav-login
.btn-small
```

### Comportamento:
- Sticky no topo
- Layout flexbox com 3 seções (Left/Center/Right)
- Borda inferior sutil

---

## 2. Hero Section

**Localização HTML:** Linhas 32-54  
**Classe CSS Principal:** `.hero`  
**Background:** `--neutral-50` (#f2f1ed)

### Conteúdo:
- **Coluna Esquerda (Texto):**
  - **Headline:** "Transforme suas aulas em uma Escola Digital." (Codec Pro, 72px)
  - **Subheadline:** Texto explicativo sobre parceiro de design educacional
  - **CTA:** Botão Primário ("Começar grátis") + Link Secundário ("Ver vídeo")
- **Coluna Direita (Visual):**
  - Composição flutuante estilo Gamma
  - Card Principal: Dashboard (Macbook)
  - Card Secundário: Professor (Topo Dir)
  - Card Terciário: Contexto/Alunos (Baixo Esq)

### Imagens Utilizadas:
- `assets/Images/macbook.png` (Principal)
- `assets/Images/professor_sala.png` (Secundária)
- `assets/Images/pessoas_andando.jpg` (Terciária)

### Estilos Relacionados:
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

### Layout:
- Grid: 2 colunas (Texto / Visual)
- Gap: 40px (`--space-10`)
- Visual com elementos flutuantes e rotação suave no hover

---

## 3. Features Carousel

**Localização HTML:** `<section class="features-carousel" id="features">`

**Conteúdo:**
- **Cabeçalho:** Título H2 "Todos os recursos que você precisa" + Subtítulo.
- **Carousel Window:** Container com scroll horizontal (`overflow-x: auto`).
- **Cards (4 total):**
  - **Card 1:** Gestão Financeira (ícone: cifrão/dólar)
  - **Card 2:** Retenção pelo Hábito (ícone: check/círculo)
  - **Card 3:** Portal do Aluno Premium (ícone: usuários)
  - **Card 4:** Acompanhamento Pedagógico (ícone: livro)
- **Controles:** Botões de navegação (← / →).

**Ícones:**
- SVG inline, cor `--primary-900` (#710014)
- Tamanho: 32x32px dentro de container 64x64px
- Background do container: `--neutral-50`

**Estilos Principais:**
- `.features-carousel`: Padding 80px/120px vertical, background `--neutral-50`.
- `.carousel-window`: Flexbox horizontal, scroll-snap, gap 24px.
- `.feature-card`: Card branco, shadow, radius-lg, width 350px, height 480px.
- `.feature-card-icon`: Container 64x64px, background neutro, ícone vermelho.
- `.carousel-btn`: Botões circulares 48x48px, borda 2px.

**Comportamento:**
- **Auto-Rotação:** Cards rodam automaticamente a cada 5 segundos (transform-based).
- **Pausa no Hover:** Rotação pausa quando mouse está sobre o track.
- **Indicadores de Progresso:** 4 dots dinâmicos abaixo do carrossel (10px normal, 28x10px ativo).
- **Navegação Manual:** Botões ←/→ e clique nos dots resetam timer de rotação.
- **Transição:** `transform: translateX()` com `transition: var(--duration-slow)`.
- **Scroll Snap:** N/A (usa transform em vez de scroll).
- **Hover nos Cards:** Cards elevam 8px (`translateY`) e sombra aumenta.

**Estrutura Técnica:**
```
.carousel-container (position: relative, max-width: 600px)
  └── .carousel-track (display: flex, transform: translateX(-N%))
       └── .carousel-slide (min-width: 100%, flex-shrink: 0)
            └── .feature-card (conteúdo visual)
  └── .carousel-arrow.carousel-prev (absolute left)
  └── .carousel-arrow.carousel-next (absolute right)
.carousel-dots (fora do container, centralizado)
```

---

## 4. Pricing

**Localização HTML:** Linhas 134-187  
**Classe CSS Principal:** `.pricing`  
**Background:** `--neutral-50` (#f2f1ed)

### Conteúdo:
- **Título:** "Planos simples e transparentes"
- **Subtítulo:** "Escolha o plano ideal para o tamanho da sua escola"

### 2 Cards de Pricing:

#### Card 1: Starter
- **Preço:** R$ 97/mês
- **Descrição:** Para quem está começando
- **Features:**
  - Até 15 alunos
  - Gestão financeira básica
  - Exercícios ilimitados
  - Suporte por email
- **CTA:** Botão outline "Começar"

#### Card 2: Pro (Destaque)
- **Badge:** "Mais Popular"
- **Preço:** R$ 197/mês
- **Descrição:** Para professores em crescimento
- **Features:**
  - Alunos ilimitados
  - Financeiro completo
  - Gamificação avançada
  - Suporte prioritário
  - Relatórios personalizados
- **CTA:** Botão primário "Começar Agora"
- **Estilo:** Borda burgundy 2px, levemente maior (scale 1.05), sombra burgundy

### Estilos Relacionados:
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
.price-currency
.price-value
.price-period
.pricing-features
```

### Layout:
- Grid 2 colunas (desktop) / 1 coluna (mobile)
- Cards com bordas sutis
- Card Pro em destaque: maior (scale 1.05), borda burgundy 2px, sombra colorida

---

## 5. Final CTA

**Localização HTML:** Linhas 209-215  
**Classe CSS Principal:** `.cta`  
**Background:** `--neutral-0` (#FFFFFF)

### Conteúdo:
- **Título:** "Sua escola digital está a um clique de distância."
- **CTA:** Botão grande "Criar minha conta Klassy"

### Estilos Relacionados:
```css
.cta
.cta-title
.btn-primary.btn-large
```

### Layout:
- Centralizado
- Título max-width: 700px
- Botão grande (18px padding)

---

## 6. Footer

**Localização HTML:** Linhas 217-263  
**Classe CSS Principal:** `.footer`  
**Background:** `--neutral-50` (#f2f1ed)

### Conteúdo:

#### Seção Principal (Grid 2 colunas):

**Coluna 1: Brand**
- Logo (ícone + texto)
- Tagline: "Transformando professores em donos de escolas digitais."

**Coluna 2: Links (3 colunas)**
- **Produto:**
  - Funcionalidades
  - Preços
  - Casos de Uso
- **Empresa:**
  - Sobre
  - Blog
  - Carreiras
- **Suporte:**
  - Central de Ajuda
  - Contato
  - Status

#### Footer Bottom:
- Copyright: "© 2026 Klassy. Todos os direitos reservados."
- Links legais: Privacidade | Termos

### Estilos Relacionados:
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

### Layout:
- Grid 2 colunas (desktop) / 1 coluna (mobile)
- Borda superior sutil
- Links com hover burgundy

---

## 🎨 Paleta de Cores por Seção

| Seção | Background | Texto Principal | Acentos |
|-------|-----------|----------------|---------|
| Nav | `#f2f1ed` | `#161616` | `#710014` |
| Hero | `#f2f1ed` | `#161616` | `#710014` |
| Feature 1 | `#f2f1ed` | `#161616` | `#710014` |
| Feature 2 | `#FFFFFF` | `#161616` | `#710014` |
| Feature 3 | `#f2f1ed` | `#161616` | `#710014` |
| Pricing | `#f2f1ed` | `#161616` | `#710014` |
| CTA | `#FFFFFF` | `#161616` | `#710014` |
| Footer | `#f2f1ed` | `#4a4a4a` | `#710014` |

---

## 📐 Espaçamento Vertical por Seção

| Seção | Padding Desktop | Padding Mobile |
|-------|----------------|----------------|
| Nav | 12px | 12px |
| Hero | 120px | 80px |
| Features | 120px | 80px |
| Pricing | 120px | 80px |
| CTA | 120px | 80px |
| Footer | 80px top / 48px bottom | 80px top / 48px bottom |

---

## 🖼️ Imagens Utilizadas

| Seção | Arquivo | Descrição |
|-------|---------|-----------|
| Hero | `feature_mockup_1_1769565802344.png` | Dashboard desktop |
| Hero | `feature_mockup_2_1769565819402.png` | App mobile |
| Feature 1 | `dashboard_mockup_1769564880138.png` | Dashboard financeiro |
| Feature 2 | `mobile_app_mockup_1769564897373.png` | App de exercícios |
| Feature 3 | `student_avatar_1769564959429.png` | Avatar e gamificação |

---

## 🔧 Como Modificar Seções Específicas

### Para modificar apenas uma seção:

1. **Identifique a seção** neste documento
2. **Localize as linhas HTML** correspondentes
3. **Identifique as classes CSS** relacionadas
4. **Faça as modificações** apenas nessas classes
5. **Teste** para garantir que não afetou outras seções

### Exemplo: Modificar apenas o Hero

```css
/* Modificar APENAS estas classes: */
.hero { }
.hero-content { }
.hero-title { }
.hero-subtitle { }
.hero-mockups { }
.mockup-desktop { }
.mockup-mobile { }
```

### Seções Independentes:
- ✅ Nav (não afeta outras)
- ✅ Hero (isolado)
- ⚠️ Features (compartilham `.feature`, mas `.feature-left` e `.feature-right` são específicos)
- ✅ Pricing (isolado)
- ✅ CTA (isolado)
- ✅ Footer (isolado)

### Estilos Globais (afetam tudo):
- `.container`
- `.btn-primary`
- `.btn-outline`
- `.btn-small`
- Variáveis CSS (`:root`)

---

## 📝 Notas Importantes

1. **Backgrounds Alternados:** As seções alternam entre `#f2f1ed` (creme) e `#FFFFFF` (branco). Hero (creme) → Feature 1 (creme) → Feature 2 (branco) → Feature 3 (creme) → Pricing (creme) → CTA (branco) → Footer (creme)
2. **Espaçamento Consistente:** Todas as seções principais usam 120px (desktop) / 80px (mobile)
3. **Bordas Sutis:** Preferir `border: 1px solid rgba(0,0,0,0.08)` ao invés de sombras
4. **Transições:** Todas as interações usam 400ms
5. **Responsive:** Breakpoint principal em 968px e 768px

---

**Última Atualização:** 2026-01-27  
**Versão:** 1.0 - Redesign Minimalista
