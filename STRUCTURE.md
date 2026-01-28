# Estrutura da Landing Page Klassy

Este documento mapeia todas as seções da landing page para facilitar modificações futuras sem afetar outras áreas.

---

## 📋 Índice de Seções

1. [Navegação](#1-navegação)
2. [Hero Section](#2-hero-section)
3. [Statistics Section](#3-statistics-section)
4. [Feature 1 - Gestão Financeira](#4-feature-1---gestão-financeira)
5. [Feature 2 - Retenção pelo Hábito](#5-feature-2---retenção-pelo-hábito)
6. [Feature 3 - Profissionalismo](#6-feature-3---profissionalismo)
7. [Professors Grid](#7-professors-grid)
8. [Pricing](#8-pricing)
9. [Final CTA](#9-final-cta)
10. [Footer](#10-footer)

---

## 1. Navegação

**Localização HTML:** Linhas 18-30  
**Classe CSS Principal:** `.nav`  
**Background:** `--neutral-50` (#f2f1ed)

### Conteúdo:
- Logo (ícone SVG + texto "Klassy")
- Botão "Começar" (`.btn-small`)

### Estilos Relacionados:
```css
.nav
.nav-content
.logo
.logo-icon
.logo-text
.btn-small
```

### Comportamento:
- Sticky no topo
- Sombra sutil ao rolar (via JavaScript)
- Borda inferior sutil

---

## 2. Hero Section

**Localização HTML:** Linhas 32-54  
**Classe CSS Principal:** `.hero`  
**Background:** `--neutral-50` (#f2f1ed)

### Conteúdo:
- **Headline:** "Transforme suas aulas particulares em uma Escola Digital completa."
- **Subheadline:** Texto explicativo sobre gestão financeira e área do aluno
- **CTA:** Botão "Começar Agora" (`.btn-primary`)
- **Mockups:** Grid 2:1 com dashboard desktop e app mobile

### Imagens Utilizadas:
- `feature_mockup_1_1769565802344.png` (Dashboard)
- `feature_mockup_2_1769565819402.png` (App Mobile)

### Estilos Relacionados:
```css
.hero
.hero-content
.hero-title
.hero-subtitle
.hero-mockups
.mockup-desktop
.mockup-mobile
```

### Layout:
- Padding: 120px vertical (desktop) / 80px (mobile)
- Conteúdo centralizado
- Grid de mockups: 2fr 1fr

---

## 3. Statistics Section

**Localização HTML:** Linhas 56-79  
**Classe CSS Principal:** `.stats`  
**Background:** `--neutral-0` (#FFFFFF)

### Conteúdo:
- **Grid de 4 Estatísticas:**
  - 500+ Professores
  - 15.000+ Alunos Ativos
  - 98% Taxa de Retenção
  - R$ 2M+ Processado/Mês
- **Gráfico Visual:** Imagem de crescimento minimalista

### Imagens Utilizadas:
- `statistics_graph_1769565782480.png`

### Estilos Relacionados:
```css
.stats
.stats-grid
.stat-item
.stat-number
.stat-label
.stats-visual
```

### Layout:
- Grid: 4 colunas (desktop) / 2 colunas (mobile)
- Números grandes em burgundy
- Labels em cinza neutro
- Bordas superior e inferior

---

## 4. Feature 1 - Gestão Financeira

**Localização HTML:** Linhas 81-102  
**Classe CSS Principal:** `.feature.feature-left`  
**Background:** `--neutral-50` (#f2f1ed)

### Conteúdo:
- **Título:** "O fim da caixa preta financeira"
- **Texto:** Descrição sobre previsibilidade financeira
- **Lista de Features:**
  - Controle de mensalidades automático
  - Relatórios de receita em tempo real
  - Previsão de faturamento mensal
  - Histórico completo de pagamentos
- **Imagem:** Dashboard financeiro (esquerda)

### Imagens Utilizadas:
- `dashboard_mockup_1769564880138.png`

### Estilos Relacionados:
```css
.feature
.feature-left
.feature-grid
.feature-image
.feature-content
.feature-title
.feature-text
.feature-list
```

### Layout:
- Grid 1:1 (imagem esquerda, texto direita)
- Espaçamento: 120px vertical
- Lista com checkmarks burgundy

---

## 5. Feature 2 - Retenção pelo Hábito

**Localização HTML:** Linhas 104-125  
**Classe CSS Principal:** `.feature.feature-right`  
**Background:** `--neutral-0` (#FFFFFF)

### Conteúdo:
- **Título:** "O diferencial que fideliza"
- **Texto:** Descrição sobre sistema de exercícios diários
- **Lista de Features:**
  - 5 exercícios liberados por dia
  - Sistema de streaks e conquistas
  - Feedback instantâneo de acertos
  - Gamificação que vicia
- **Imagem:** App mobile (direita)

### Imagens Utilizadas:
- `mobile_app_mockup_1769564897373.png`

### Estilos Relacionados:
```css
.feature
.feature-right
.feature-grid (com direction: rtl)
.feature-image
.feature-content
```

### Layout:
- Grid 1:1 (texto esquerda, imagem direita - invertido)
- Background alternado (branco)
- Mesmo espaçamento vertical

---

## 6. Feature 3 - Profissionalismo

**Localização HTML:** Linhas 127-148  
**Classe CSS Principal:** `.feature.feature-left`  
**Background:** `--neutral-50` (#f2f1ed)

### Conteúdo:
- **Título:** "Uma experiência de franquia"
- **Texto:** Descrição sobre portal profissional
- **Lista de Features:**
  - Perfil personalizável com avatar
  - Feed de notícias da turma
  - Sistema de níveis e badges
  - Área social entre alunos
- **Imagem:** Avatar e gamificação (esquerda)

### Imagens Utilizadas:
- `student_avatar_1769564959429.png`

### Estilos Relacionados:
```css
.feature
.feature-left
(mesmos estilos da Feature 1)
```

### Layout:
- Grid 1:1 (imagem esquerda, texto direita)
- Background alternado (creme)

---

## 7. Professors Grid

**Localização HTML:** Linhas 150-160  
**Classe CSS Principal:** `.professors`  
**Background:** `--neutral-0` (#FFFFFF)

### Conteúdo:
- **Título:** "Professores que confiam no Klassy"
- **Subtítulo:** "Mais de 500 educadores já transformaram suas aulas em escolas digitais"
- **Grid de Fotos:** Imagem 4x4 de professores

### Imagens Utilizadas:
- `professor_grid_1_1769565767622.png`

### Estilos Relacionados:
```css
.professors
.section-title
.section-subtitle
.professors-grid
.professors-image
```

### Layout:
- Centralizado
- Imagem com hover scale(1.02)
- Max-width: 900px

---

## 8. Pricing

**Localização HTML:** Linhas 162-235  
**Classe CSS Principal:** `.pricing`  
**Background:** `--neutral-50` (#f2f1ed)

### Conteúdo:
- **Título:** "Planos simples e transparentes"
- **Subtítulo:** "Escolha o plano ideal para o tamanho da sua escola"

### 3 Cards de Pricing:

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
- **Estilo:** Borda burgundy 2px

#### Card 3: Mentor
- **Preço:** R$ 397/mês
- **Descrição:** Para escolas pequenas
- **Features:**
  - Tudo do Pro
  - Múltiplos professores
  - API de integração
  - Suporte dedicado
  - Onboarding personalizado
- **CTA:** Botão outline "Falar com Vendas"

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
- Grid 3 colunas (desktop) / 1 coluna (mobile)
- Cards com bordas sutis
- Card Pro com destaque

---

## 9. Final CTA

**Localização HTML:** Linhas 237-243  
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

## 10. Footer

**Localização HTML:** Linhas 245-291  
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
| Stats | `#FFFFFF` | `#161616` | `#710014` |
| Feature 1 | `#f2f1ed` | `#161616` | `#710014` |
| Feature 2 | `#FFFFFF` | `#161616` | `#710014` |
| Feature 3 | `#f2f1ed` | `#161616` | `#710014` |
| Professors | `#FFFFFF` | `#161616` | - |
| Pricing | `#f2f1ed` | `#161616` | `#710014` |
| CTA | `#FFFFFF` | `#161616` | `#710014` |
| Footer | `#f2f1ed` | `#4a4a4a` | `#710014` |

---

## 📐 Espaçamento Vertical por Seção

| Seção | Padding Desktop | Padding Mobile |
|-------|----------------|----------------|
| Nav | 20px | 20px |
| Hero | 120px | 80px |
| Stats | 120px | 80px |
| Features | 120px | 80px |
| Professors | 120px | 80px |
| Pricing | 120px | 80px |
| CTA | 120px | 80px |
| Footer | 80px top / 48px bottom | 80px top / 48px bottom |

---

## 🖼️ Imagens Utilizadas

| Seção | Arquivo | Descrição |
|-------|---------|-----------|
| Hero | `feature_mockup_1_1769565802344.png` | Dashboard desktop |
| Hero | `feature_mockup_2_1769565819402.png` | App mobile |
| Stats | `statistics_graph_1769565782480.png` | Gráfico de crescimento |
| Feature 1 | `dashboard_mockup_1769564880138.png` | Dashboard financeiro |
| Feature 2 | `mobile_app_mockup_1769564897373.png` | App de exercícios |
| Feature 3 | `student_avatar_1769564959429.png` | Avatar e gamificação |
| Professors | `professor_grid_1_1769565767622.png` | Grid 4x4 professores |

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
- ✅ Stats (isolado)
- ⚠️ Features (compartilham `.feature`, mas `.feature-left` e `.feature-right` são específicos)
- ✅ Professors (isolado)
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

1. **Backgrounds Alternados:** As seções alternam entre `#f2f1ed` (creme) e `#FFFFFF` (branco)
2. **Espaçamento Consistente:** Todas as seções principais usam 120px (desktop) / 80px (mobile)
3. **Bordas Sutis:** Preferir `border: 1px solid rgba(0,0,0,0.08)` ao invés de sombras
4. **Transições:** Todas as interações usam 400ms
5. **Responsive:** Breakpoint principal em 968px e 768px

---

**Última Atualização:** 2026-01-27  
**Versão:** 1.0 - Redesign Minimalista
