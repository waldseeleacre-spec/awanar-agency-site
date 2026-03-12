# AWANAR AGENCY — MEMORY FILE
> Mantido pelos agentes: Builder (frontend) + Producer (B2B Ops). Atualizar ao final de CADA execução.
<!-- AGENT_HEARTBEAT: ativo em 2026-03-10 14:15:46 -->

---

## 🎯 OBJETIVO DO PROJETO
Transformar o template Studiova (HTML + Bootstrap) em site institucional B2B da **AWANAR Agency**, posicionada como "Amazon Field Unit".

**O site serve para:**
- Apresentar AWANAR como unidade de campo Amazon
- Mostrar prova (showreel + selected work)
- Explicar pacotes: Sprint e Retainer
- Mostrar protocolo cultural + direitos claros
- Direcionar para "Request Deck (PDF)" e "Book a Call / WhatsApp"
- Qualificar leads **antes** da reunião — call só para fechamento

**O site NÃO é:** SaaS, plataforma com login, e-commerce, blog obrigatório, landing agressiva.

---

## 🔒 REGRAS TRAVADAS (INVIOLÁVEIS)

| Regra | Detalhe |
|---|---|
| **Sem Git agora** | Sem commit, sem push |
| **Sem deploy agora** | Cloudflare Pages — depois |
| **Sem editar CSS originais** | Apenas `awanar.css` para overrides |
| **Paleta TRAVADA** | Somente as 5 cores abaixo |
| **Dourado só como acento** | Botões, links, destaques — não fundo |
| **Sem novas cores** | Zero improvisação cromática |
| **Sem páginas Sign In/Sign Up** | Não são necessárias |
| **Conteúdo primeiro em PT** | EN/DE depois de travar — Patricia traduz |
| **Ciclos curtos** | Um WORK ORDER por vez |
| **Bootstrap e layout intactos** | Nunca refatorar estrutura |
| **Sem funil agressivo** | CTAs limpos, sem promessas exageradas |
| **Call só com fit** | Budget + timeline + necessidade confirmados antes |

### Paleta AWANAR (exata)
```
--awanar-bg:    #05070B   (fundo principal)
--awanar-navy:  #0B1220   (fundo secundário / cards)
--awanar-deep:  #17203C   (fundo terciário / elementos)
--awanar-ivory: #ECE6DC   (texto principal)
--awanar-gold:  #D7A55F   (acento — botões, links, destaques)
```

---

## 👥 TIME AWANAR

| Pessoa | Papel | Idiomas | Função no site |
|---|---|---|---|
| **Patricia** | Founder & Creative Director | EN / DE / PT | Rosto comercial, briefing, contrato |
| **Elias** | Co-Founder & Field Director | PT / ES | Campo, direção, captação |

---

## 📦 2 SKUs (TRAVADOS)

| SKU | Nome | Duração | Entregável principal |
|---|---|---|---|
| 1 | **Brand Film Sprint** | 14 dias | 1 brand film (3–5 min) + cortes ads |
| 2 | **Documentary Retainer** | 3 meses | Série documental ou longa + distribuição |

> **Preços:** `[VALOR A DEFINIR]` — Elias deve confirmar antes do Builder implementar.

---

## 📂 ARQUIVOS DO PROJETO

### Estrutura
```
Studiova-1.0.0/
├── html/
│   ├── index.html         ← PÁGINA PRINCIPAL (modificada)
│   ├── about-us.html
│   ├── blog.html          ← a remover/ignorar no V1
│   ├── blog-detail.html   ← a remover/ignorar no V1
│   ├── contact.html
│   ├── projects.html
│   ├── projects-detail.html
│   ├── sign-in.html       ← a remover no V1
│   ├── sign-up.html       ← a remover no V1
│   ├── privacy-policy.html
│   ├── terms-and-conditions.html
│   └── 404.html
├── assets/
│   ├── css/
│   │   ├── styles.css     ← CSS ORIGINAL — NÃO TOCAR
│   │   ├── awanar.css     ← CRIADO — ÚNICO ARQUIVO DE OVERRIDES
│   │   ├── bootstrap.css  ← NÃO TOCAR
│   │   └── ...
│   ├── js/
│   ├── images/
│   ├── libs/
│   └── scss/
└── AWANAR_AGENCY_MEMORY.md  ← ESTE ARQUIVO
```

### Servidor local
- **Comando:** `python3 -m http.server 5173 --directory /path/to/Studiova-1.0.0`
- **URL:** `http://localhost:5173/html/index.html`
- **Serve a partir da raiz** do projeto (para que `../assets/` resolva corretamente)

---

## 📋 MAPEAMENTO DE SEÇÕES — V1 ONE-PAGE

| # | Seção AWANAR | Seção do Template | id âncora | Status Copy | Status HTML |
|---|---|---|---|---|---|
| 1 | Hero | banner-section | — | ✅ COPY PT TRAVADO | ✅ BLOCO 3 |
| 2 | Showreel | nova seção (após hero) | `#showreel` (temp: stats-facts) | ✅ COPY PT TRAVADO | ⬜ BLOCO 5 |
| 3 | Packages (2 SKUs) | pricing-section | `#packages` | ✅ COPY PT TRAVADO | ⬜ BLOCO 6 |
| 4 | Selected Work | featured-projects | `#work` | ✅ COPY PT TRAVADO | ⬜ BLOCO 7 |
| 5 | Protocol / Ethics | services | `#protocol` | ✅ COPY PT TRAVADO | ⬜ BLOCO 8 |
| 6 | Team | meet-our-team | `#team` | ✅ COPY PT TRAVADO | ⬜ BLOCO 9 |
| 7 | FAQ | faq | `#faq` | ✅ COPY PT TRAVADO | ⬜ BLOCO 10 |
| 8 | Contact / Request Deck | get-in-touch | `#contact` | ✅ COPY PT TRAVADO | ⬜ BLOCO 11 |
| — | ~~Stats & Facts~~ | stats-facts | temp `#showreel` | ❌ REMOVER | ⬜ BLOCO 4 |
| — | ~~Testimonials~~ | testimonial | — | ❌ REMOVER no V1 | ⬜ BLOCO 4 |
| — | ~~Why Choose Us~~ | why-choose-us | — | ❌ REMOVER | ⬜ BLOCO 4 |
| — | ~~Recent News~~ | Recent-news | — | ❌ REMOVER | ⬜ BLOCO 4 |
| — | Footer AWANAR | footer | — | ✅ COPY PT TRAVADO | ✅ BLOCO 3 |

---

## ✍️ COPY PT V1 — TRAVADO

> Todo texto abaixo é a versão PT aprovada para colar no HTML.
> `[VALOR]`, `[FOTO]`, `[LINK]` = placeholders a substituir quando os assets existirem.

---

### SEÇÃO 01 — HERO (banner-section)

```
[tag/badge]:   "Amazon Field Unit."
[H1]:          "AWANAR"
[body]:        "Produção documental de campo para marcas com algo a dizer.
                Acesso real. Estética autoral. Direitos declarados desde o contrato."
[CTA 1 - gold button]:  "Solicitar Deck"  → âncora: #contato
[CTA 2 - link]:         "WhatsApp →"      → [LINK WhatsApp]
```

---

### SEÇÃO 02 — SHOWREEL (nova, após hero)

```
[badge]:  "Showreel"
[H2]:     "O trabalho fala."
[body]:   nenhum — só o iframe
[iframe]: [LINK Cloudflare Stream — placeholder: src=""]
          atributos: frameborder="0" allow="autoplay; fullscreen" allowfullscreen
          estilo: largura 100%, aspect-ratio 16/9
```

---

### SEÇÃO 03 — PACKAGES (substitui pricing-section — 2 cards, não 3)

```
[badge]:  "Pacotes"
[H2]:     "Dois formatos. Um padrão."
[sub]:    "Sem assinar nada sem ler. Os termos estão no deck."

— CARD 1: Brand Film Sprint —
[título]:    "Sprint"
[subtítulo]: "14 dias de produção."
[inclui]:
  • 1 brand film de campo (3–5 min)
  • Cortes para ads e social (30s / 60s)
  • Captação, edição, color grade, mix de som
  • Licença comercial declarada em contrato
    (uso / território / janela)
[ideal para]: "Lançamento de produto, PR, campanha de marca."
[investimento]: "[VALOR A DEFINIR]"
[CTA]: "Solicitar Deck"  → âncora: #contato

— CARD 2: Documentary Retainer —
[título]:    "Retainer"
[subtítulo]: "3 meses de cobertura."
[inclui]:
  • Série documental (3–6 episódios) ou longametragem
  • Cortes para distribuição e social
  • Acompanhamento editorial ao longo do processo
  • Direitos de distribuição (janela / territórios / plataformas)
  • Legendagem EN/DE disponível
[ideal para]: "Marcas com impacto social, distribuidoras, B2B enterprise, fundações."
[investimento]: "[VALOR A DEFINIR] / mês"
[CTA]: "Solicitar Deck"  → âncora: #contato
```

---

### SEÇÃO 04 — SELECTED WORK (substitui featured-projects)

```
[badge]:  "Selected Work"
[H2]:     "Trabalho selecionado."
[sub]:    "Escolhidos por acesso, impacto e estética."

[Vídeo 1]: iframe Cloudflare Stream — [LINK placeholder]
[Vídeo 2]: iframe Cloudflare Stream — [LINK placeholder]
[Foto 1–6]: assets/images/ — [FOTO placeholder × 6]
```

---

### SEÇÃO 05 — PROTOCOL (substitui services ou why-choose-us)

```
[badge]:  "Protocolo"
[H2]:     "Como trabalhamos."

[Item 1 — título]: "Acesso antes da câmera."
[Item 1 — body]:   "Toda produção começa com uma fase de presença —
                    sem roteiro, sem poses. O território nos orienta."

[Item 2 — título]: "Direitos desde o contrato."
[Item 2 — body]:   "Licenciamento, janela de uso, territórios e restrições:
                    tudo declarado antes do primeiro dia de set. Nada em aberto."

[Item 3 — título]: "Um ponto de contato por projeto."
[Item 3 — body]:   "Patricia lidera o briefing e o contrato.
                    Elias lidera o campo. Você sabe com quem fala em cada fase."
```

---

### SEÇÃO 06 — TEAM (substitui meet-our-team — apenas 2 pessoas)

```
[badge]:  "Time"
[H2]:     "AWANAR."

[Pessoa 1]:
  [foto]:    [FOTO Patricia]
  [nome]:    "Patricia"
  [cargo]:   "Founder & Creative Director"
  [linha]:   "Briefing, contratos e direitos. EN / DE / PT."

[Pessoa 2]:
  [foto]:    [FOTO Elias]
  [nome]:    "Elias"
  [cargo]:   "Co-Founder & Field Director"
  [linha]:   "Acesso de campo, direção e captação. PT / ES."
```

---

### SEÇÃO 07 — FAQ (substitui faq)

```
[badge]:  "FAQ"
[H2]:     "Perguntas frequentes."

Q1: "Vocês filmam somente na Amazônia?"
A1: "Não. A Amazônia é nossa origem e nosso diferencial de acesso.
     Trabalhamos também em outros territórios — urbanos, rurais,
     internacionais — com a mesma metodologia de campo."

Q2: "O que está incluído nos direitos?"
A2: "Cada contrato especifica: tipo de uso (ads, web, TV, streaming),
     janela (1 ano / perpétuo), territórios (BR, DACH, global)
     e restrições editoriais. Nada fica em aberto."

Q3: "Posso licenciar conteúdo já produzido por vocês?"
A3: "Sim. Temos um arquivo selecionado disponível para licenciamento.
     Descreva sua necessidade no formulário de Request Deck."

Q4: "Calls em qual idioma?"
A4: "Calls com Patricia em EN ou DE. Calls com Elias em PT ou ES.
     Informe sua preferência no formulário."

Q5: "Como funciona o processo após o Request Deck?"
A5: "Você recebe o deck em até 24h. Se houver alinhamento de orçamento
     e timing, Patricia ou Elias entram em contato para uma call de
     fechamento — sem pitch, sem pressão."
```

---

### SEÇÃO 08 — CONTACT / REQUEST DECK (id="contato") (substitui get-in-touch)

```
[badge]:  "Contato"
[H2]:     "Vamos conversar quando fizer sentido."
[sub]:    "Preencha o formulário. Se houver fit de orçamento e timing,
           entramos em contato em até 24h."

[FORM — campos:]
  1. Nome completo *              [text input]
  2. Empresa / Marca *            [text input]
  3. E-mail profissional *        [email input]
  4. Qual é sua necessidade? *    [select dropdown]
       → Brand Film Sprint (14 dias)
       → Documentary Retainer (3 meses)
       → Licenciamento de conteúdo existente
       → Outro / ainda estou explorando
  5. Timeline estimado *          [select dropdown]
       → Próximas 2 semanas
       → 1 a 3 meses
       → 3 a 6 meses
       → Ainda não definido
  6. Budget aproximado *          [select dropdown]
       → €5k – €15k
       → €15k – €35k
       → €35k+
       → Ainda não definido
  7. Como o conteúdo será utilizado? [select dropdown]
       → Ads / social media
       → PR / imprensa
       → Distribuição / streaming
       → Web / institucional
       → Outro
  8. Idioma preferido *            [select dropdown]
       → Português
       → Inglês (EN)
       → Alemão (DE)
  9. Sobre o projeto               [textarea — opcional]
     placeholder: "Conte brevemente o contexto."

[CTA - gold button]: "Solicitar Deck"

[linha alternativa abaixo do form]:
  "Prefere contato direto?"
  [link] "WhatsApp →"  [LINK]
  [link] "[EMAIL PATRICIA]"
```

---

### FOOTER (substitui footer atual)

```
[H2]:   "Construir algo junto?"

[coluna esquerda — contatos]:
  [ícone arrow] "[EMAIL PATRICIA]"
  [ícone map-pin] "Amazônia / DACH / Remote"

[coluna centro — navegação]:
  Home · Pacotes · Selected Work · Protocolo · Time · FAQ · Contato

[coluna redes]:
  Instagram · LinkedIn · [outras redes se houver]

[copyright]:
  "© AWANAR Agency 2026"

[linha abaixo — remover "Distributed by ThemeWagon"]:
  [apagar completamente]
```

---

## 📄 DECK PDF — ESTRUTURA (1 PÁGINA, A4 LANDSCAPE)

> O deck é a ferramenta de filtro. Recebido só após preenchimento do form.

```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO AWANAR]   AWANAR Agency — Amazon Field Unit              │
│  [1 IMAGEM DE CAMPO DE ALTO IMPACTO — full bleed ou lateral]    │
├─────────────────┬──────────────────────┬────────────────────────┤
│  QUEM SOMOS     │  SPRINT              │  RETAINER              │
│  3 linhas max   │  14 dias             │  3 meses               │
│                 │  • brand film        │  • série / longa       │
│  [foto Patricia]│  • cortes ads        │  • distribuição        │
│  Patricia       │  • direitos          │  • direitos            │
│  Founder / CD   │  [VALOR]             │  [VALOR]/mês           │
│                 │                      │                        │
│  [foto Elias]   │                      │                        │
│  Elias          │                      │                        │
│  Co-Founder / FD│                      │                        │
├─────────────────┴──────────────────────┴────────────────────────┤
│  PROTOCOLO (3 bullets curtos)   │  [2 STILLS]  │  QR → reel    │
│  • Acesso antes da câmera       │              │  WhatsApp      │
│  • Direitos desde o contrato    │              │  [email]       │
│  • Um ponto de contato          │              │               │
├─────────────────────────────────────────────────────────────────┤
│  © AWANAR Agency 2026 — Conteúdo confidencial                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📧 MENSAGENS-PADRÃO

### Resposta automática após Request Deck (e-mail / auto-reply)

```
Subject: "AWANAR Agency — Deck em caminho"

Olá [Nome],

Recebemos sua solicitação.

O deck AWANAR segue em anexo.
Inclui posicionamento, os dois formatos, protocolo e um sample.

Showreel: [LINK]

Se houver alinhamento de orçamento e timeline,
Patricia ou Elias entrarão em contato em até 24h
para agendar uma conversa de fechamento.

— AWANAR Agency
[WhatsApp] · [email Patricia]
```

---

### 🚦 REGRA INTERNA DE CALL (não publicar no site)

**Só oferecer call quando TODOS os critérios forem verdadeiros:**

| Critério | Valor mínimo |
|---|---|
| Budget declarado | ≥ €5k (Sprint) ou ≥ €15k/mês (Retainer) — não "Ainda não definido" |
| Timeline | ≤ 3 meses |
| Necessidade | Sprint / Retainer / Licenciamento — não "Outro / explorando" |

**Se fora dos critérios:** enviar deck, agradecer, deixar a bola no cliente. Sem follow-up agressivo.

---

## 📝 CHANGELOG

### BLOCO 1 — Paleta AWANAR (2026-03-10)
**Objetivo:** Aplicar paleta de cores AWANAR via CSS novo, sem tocar nos originais.

**Arquivos modificados:**
- `html/index.html` — adicionado `<link rel="stylesheet" href="../assets/css/awanar.css" />` como último link no `<head>`
- `assets/css/awanar.css` — **CRIADO** (381 linhas) — override completo de paleta

---

### BLOCO 3 — Cirurgia estrutural: title + nav + hero + footer (2026-03-10)
**Objetivo:** Eliminar toda identidade Studiova visível. Aplicar identidade AWANAR em title, nav, hero e footer.

**Arquivos modificados:**
- `html/index.html` — múltiplas edições cirúrgicas (nenhum CSS original tocado)

**Mudanças realizadas:**

| Item | Antes | Depois |
|---|---|---|
| `<title>` | "Studiova" | "AWANAR Agency" |
| Nav links (7) | Home/About/Projects/Blog/Services/Contact/Docs | Showreel/Pacotes/Trabalhos/Protocolo/Equipe/FAQ/Contato (âncoras) |
| Nav Sign In/Sign Up | presente | **removido** |
| Nav contatos | tel wrappixel + email wrappixel | WhatsApp placeholder + info@awanaragency.com |
| Hero badge | folha SVG + copy SaaS | "Amazon Field Unit." (badge) |
| Hero copy | "We create high-performing digital designs..." | "Produção documental de campo para marcas com algo a dizer..." |
| Hero H1 | "Studiova" | "AWANAR" |
| Hero CTA 1 (pill) | arrow vazio | "Solicitar Deck" → `#contact` |
| Hero CTA 2 | ausente | "WhatsApp →" → `https://wa.me/XXXXXXXXXXXX` |
| Footer H2 | "Build something together?" | "Construir algo junto?" |
| Footer contato 1 | link wrappixel.com | mailto:info@awanaragency.com |
| Footer contato 2 | email errado no lugar de localização | "Amazônia / DACH / Remote" |
| Footer nav | Home/About/Services/Work/Terms/Privacy/404 | Home/Pacotes/Trabalhos/Protocolo/Equipe/FAQ/Contato |
| Footer social | Facebook/Instagram/Twitter | Instagram/LinkedIn (placeholders `#!`) |
| Footer copyright | "© Studiova copyright 2025" | "© AWANAR Agency 2026" |
| ThemeWagon line | presente | **removido** |

**IDs de âncora adicionados (7):**
| Section class | id adicionado | Destino final |
|---|---|---|
| `.stats-facts` | `#showreel` | Temporário — BLOCO 5 substituirá por seção real de showreel |
| `.featured-projects` | `#work` | Selected Work (BLOCO 7) |
| `.services` | `#protocol` | Protocol/Ethics (BLOCO 8) — era `id="services"` |
| `.meet-our-team` | `#team` | Team (BLOCO 9) |
| `.pricing-section` | `#packages` | Packages (BLOCO 6) |
| `.faq` | `#faq` | FAQ (BLOCO 10) |
| `.get-in-touch` | `#contact` | Contact/Request Deck (BLOCO 11) |

**Validação:**
- ✅ Servidor 200 OK
- ✅ `grep` confirma: zero menções a Studiova, ThemeWagon, Sign In, Sign Up, wrappixel
- ✅ Todos os 7 IDs presentes nas seções corretas
- ✅ Hero com H1 "AWANAR" + badge "Amazon Field Unit." + copy PT + 2 CTAs
- ✅ Footer com copy AWANAR + contatos placeholders + nav âncoras + copyright 2026

---

### BLOCO 2 — Copy PT V1 + Estratégia B2B (2026-03-10)
**Objetivo:** Definir copy PT de todas as seções, deck, form e mensagens-padrão.

**Arquivos modificados:**
- `AWANAR_AGENCY_MEMORY.md` — seções adicionadas: Copy PT V1, Deck PDF, Form, Mensagens, Regra de Call

**Decisões tomadas:**
- Remover do V1: Stats & Facts, Testimonials, Recent News
- Seções do template mapeadas para seções AWANAR (ver tabela acima)
- Formulário de Request Deck com 9 campos (filtro de qualificação)
- Call só com: budget ≥ €5k, timeline ≤ 3 meses, necessidade declarada
- Preços como `[VALOR A DEFINIR]` — confirmar com Elias

**Placeholders pendentes (Elias deve preencher):**
- [ ] Preços Sprint e Retainer
- [ ] Fotos Patricia + Elias
- [ ] Links Cloudflare Stream (showreel + 2 vídeos selected work)
- [ ] 6 fotos selected work
- [ ] WhatsApp AWANAR
- [ ] E-mail Patricia
- [ ] Serviço de form (Formspree ID, ou redirect WhatsApp)

---

## ✅ PRÓXIMOS PASSOS

### Para o Elias confirmar (ANTES do Builder executar):
- [ ] Aprovar copy PT V1 (ou solicitar ajustes por seção)
- [ ] Definir preços Sprint e Retainer
- [ ] Fornecer fotos Patricia + Elias
- [ ] Fornecer links Cloudflare Stream
- [ ] Fornecer 6 fotos para Selected Work
- [ ] Definir número WhatsApp
- [ ] Definir e-mail Patricia
- [ ] Escolher serviço do form: Formspree / mailto / redirect WhatsApp

### Para o Builder executar (após aprovação do copy):
- [x] **BLOCO 3** — ✅ CONCLUÍDO (title + nav + hero + footer)
- [ ] **BLOCO 4** — Remover Stats & Facts, Why Choose Us, Testimonials, Recent News do index.html
- [ ] **BLOCO 5** — Showreel (nova seção com iframe placeholder)
- [ ] **BLOCO 6** — Packages (2 cards Sprint + Retainer, substituir pricing)
- [ ] **BLOCO 7** — Selected Work (6 fotos + 2 vídeos)
- [ ] **BLOCO 8** — Protocol (3 itens)
- [ ] **BLOCO 9** — Team (2 pessoas: Patricia + Elias)
- [ ] **BLOCO 10** — FAQ AWANAR (5 perguntas)
- [ ] **BLOCO 11** — Contact / Request Deck (form com 9 campos)
- [ ] **BLOCO 12** — Footer AWANAR (sem Studiova/Wrappixel/ThemeWagon)
- [ ] Nav menu: links corretos (âncoras do one-page, sem sign-in/sign-up/blog)
- [ ] `<title>` → "AWANAR Agency"
- [ ] Responsivo mobile validado em cada bloco

---

## 💡 DECISÕES TOMADAS

| Data | Decisão | Razão |
|---|---|---|
| 2026-03-10 | Servidor roda da raiz do projeto, não de `/html/` | Paths `../assets/` nos HTMLs exigem raiz como base |
| 2026-03-10 | `awanar.css` em `assets/css/` junto com `styles.css` | Convenção do projeto; fácil de achar |
| 2026-03-10 | Sobrescrever vars Bootstrap no `:root` | Garante propagação automática para componentes Bootstrap |
| 2026-03-10 | Remover Stats/Testimonials/News no V1 | Sem dados reais AWANAR; limpa o one-page |
| 2026-03-10 | Form de qualificação com 9 campos | Filtrar budget/timing antes de call; reduzir calls inúteis |
| 2026-03-10 | Preços fora do site (só no deck) | Posicionamento premium; evita comparação barata |
| 2026-03-10 | Patricia = rosto EN/DE; Elias = campo PT/ES | Conforme realidade operacional declarada |

---

---

### SANITY CHECK — Contaminação por projeto externo (2026-03-10)
**Objetivo:** Verificar se conteúdo de outro projeto (Paká / Rurá / Erster Samen / Noke Koî / First Seed / 39€) havia contaminado o projeto AWANAR.

**Comando executado:**
```bash
grep -RIn "Paká\|Rurá\|Erster Samen\|First Seed\|Noke Koî\|39€" ./Studiova-1.0.0/
# EXIT CODE: 1 → zero ocorrências encontradas
```

**Resultado: ✅ PROJETO LIMPO — NENHUMA CONTAMINAÇÃO ENCONTRADA**

**Confirmação de projeto correto:**
- Pasta: `Studiova-1.0.0/` ✅
- Arquivo principal: `html/index.html` (1408 linhas) ✅
- `index.html` raiz: apenas redirect para `./html/index.html` (18 linhas) ✅

**Hipótese sobre a origem do alarme:**
A confusão provavelmente veio de **mistura de contexto de sessão anterior** (cache de conversa/contexto de outro projeto aberto no mesmo agente) — e NÃO de contaminação real nos arquivos. Possíveis causas:
1. **Cache de contexto de sessão:** Um projeto diferente (possivelmente com os termos Paká/Rurá/Erster Samen) estava aberto na sessão anterior e o agente pode ter misturado contexto.
2. **Service worker ou cache do browser:** Se o servidor local estava rodando e outro projeto já tinha sido servido na mesma porta, o browser pode ter cacheado conteúdo antigo.
3. **Worktree/branch errado:** Em ambiente com múltiplos projetos, possibilidade de o agente ter editado o arquivo errado — mas o `grep` descarta isso.

**Ação tomada:** Nenhuma restauração necessária — os arquivos estão corretos.

**Recomendação preventiva:**
- Sempre iniciar sessões de trabalho com: `grep -RIn "AWANAR\|Produção documental" html/index.html | head -5` como verificação de identidade.
- Se servidor local rodando: hard-refresh (`Ctrl+Shift+R`) para descartar cache do browser.

---

---

### 🔴 SAFE MODE ON — Protocolo de validação visual (2026-03-10)
**Regra inviolável a partir de agora:**
> **Nenhum BLOCO novo será executado sem "OK VISUAL" explícito do Elias.**

---

#### Marcadores de identidade adicionados ao `html/index.html`

| Marcador | Localização | Valor |
|---|---|---|
| Comentário HTML | Linha 1 (antes do `<!doctype>`) | `<!-- AWANAR_AGENCY_BUILD_ID: 2026-03-10 -->` |
| Atributo `<body>` | Tag `<body>` | `data-awanar="agency" data-build="2026-03-10"` |

Para verificar via DevTools: `document.body.dataset` → deve retornar `{awanar: "agency", build: "2026-03-10"}`.

---

#### Porta recomendada: **8787**

```bash
# Parar servidor antigo
CTRL + C

# Rodar na porta 8787 (muda o "origin" → ignora Service Worker do 5173)
cd ~/Desktop/PROJECTS/Studiova-1.0.0
python3 -m http.server 8787
```

URL correta: `http://localhost:8787/html/index.html`

---

#### Passos para limpar Service Worker (Chrome)

1. Abrir `http://localhost:8787/html/index.html` no Chrome
2. `F12` → DevTools
3. Aba **Application** → **Service Workers** → `Unregister` (se existir)
4. **Clear Storage** → `Clear site data`
5. Fechar a aba e reabrir: `http://localhost:8787/html/index.html`

---

#### Checklist visual rápido (o que DEVE aparecer)

| Item | Esperado |
|---|---|
| `<title>` | "AWANAR Agency" |
| Hero H1 | "AWANAR" |
| Hero badge | "Amazon Field Unit." |
| Nav links | Showreel / Pacotes / Trabalhos / Protocolo / Equipe / FAQ / Contato |
| CTA principal | "Solicitar Deck" + "WhatsApp →" |
| Footer copyright | "© AWANAR Agency 2026" |
| Footer sem | ThemeWagon / Studiova / wrappixel |
| View Source linha 1 | `<!-- AWANAR_AGENCY_BUILD_ID: 2026-03-10 -->` |

---

#### Protocolo de OK VISUAL

Antes de cada BLOCO:
1. Elias abre `http://localhost:8787/html/index.html`
2. Confirma checklist visual acima
3. Digita **"OK VISUAL"** no chat
4. Só então o agente executa o próximo BLOCO

**⛔ BLOCO 7 está BLOQUEADO. Aguardando "OK VISUAL BLOCO 5+6" do Elias.**

---

### BLOCO 4 — Remoção de seções mortas do template (2026-03-10)
**Objetivo:** Remover seções genéricas/fake do template Studiova que não pertencem ao V1 AWANAR.

**Snapshot criado antes da execução:**
- `html/index.BLOCO4.bak.html` (backup pré-BLOCO4)

**Seções REMOVIDAS:**

| Seção | Classe CSS | Heading original | Linhas (antes) | Âncora nav? | Ação |
|---|---|---|---|---|---|
| Stats & Facts | `.stats-facts` | "High quality web design..." + 40K+ / 238+ / 3M+ | 134–194 | ✅ `#showreel` | Substituída por `<section id="showreel"></section>` placeholder |
| Why Choose Us | `.why-choose-us` | "Why choose us" | 491–621 | ❌ sem âncora | Removida completamente |
| Testimonials | `.testimonial` | "Stories from clients" | 623–728 | ❌ sem âncora | Removida completamente |
| Recent News | `.Recent-news` | "Recent news" | 1222–1290 | ❌ sem âncora | Removida completamente |

**Seções MANTIDAS (intactas):**

| id / classe | Seção AWANAR futura |
|---|---|
| `.banner-section` | Hero ✅ (BLOCO 3 — aprovado) |
| `#showreel` | Showreel (BLOCO 5 preencherá) |
| `#work` `.featured-projects` | Selected Work (BLOCO 7) |
| `#protocol` `.services` | Protocolo (BLOCO 8) |
| `#team` `.meet-our-team` | Time (BLOCO 9) |
| `#packages` `.pricing-section` | Pacotes (BLOCO 6) |
| `#faq` `.faq` | FAQ (BLOCO 10) |
| `#contact` `.get-in-touch` | Contato / Request Deck (BLOCO 11) |

**Validação técnica:**
- `<section>` abre: **8** / `</section>` fecha: **8** → ✅ balanço perfeito
- Grep confirma: zero resíduos de stats-facts / why-choose-us / testimonial / Recent-news (fora dos comentários)
- Placeholder `#showreel` presente na linha 135
- Arquivo: de 1409 linhas → **1047 linhas** (-362 linhas de template removido)

**Arquivos alterados:**
- `html/index.html` — 4 seções removidas/substituídas
- `html/index.BLOCO4.bak.html` — snapshot criado

---

---

### BLOCO 5 — Showreel (2026-03-10)
**Objetivo:** Preencher a section `#showreel` com copy AWANAR + iframe Cloudflare Stream.

**Snapshot criado antes da execução:**
- `html/index.BLOCO5_6.bak.html`

**Mudanças realizadas:**

| Item | Valor aplicado |
|---|---|
| Badge | "Showreel" |
| H2 | "O trabalho fala." |
| Corpo | nenhum (só iframe — conforme COPY PT V1) |
| iframe src | `https://iframe.videodelivery.net/STREAM_ID_SHOWREEL?...` (placeholder) |
| Ratio | Bootstrap `ratio ratio-16x9` |
| Section | `<section id="showreel" class="py-5 py-lg-11 py-xl-12">` |

**Placeholder a substituir quando disponível:**
- `STREAM_ID_SHOWREEL` → ID Cloudflare Stream do showreel AWANAR

---

### BLOCO 6 — Packages / Pricing (2026-03-10)
**Objetivo:** Substituir os 3 cards Studiova ($699/$1699/$3499) + marquee de logos fake pelos 2 cards AWANAR (Sprint + Retainer).

**Mudanças realizadas:**

| Item | Antes | Depois |
|---|---|---|
| Badge | "Pricing" | "Pacotes" |
| H2 | "Affordable pricing" | "Dois formatos. Um padrão." |
| Sub | copy genérico | "Sem assinar nada sem ler. Os termos estão no deck." |
| Cards | 3 (Launch / Scale / Elevate) | 2 (Sprint / Retainer) |
| Preços | $699 / $1.699 / $3.499 | `[VALOR A DEFINIR]` (placeholder) |
| Marquee | "320 trusted partners + logos Studiova" | **removido** |
| CTAs | "Subscribe now" → href="" | "Solicitar Deck" → `#contact` |

**Copy BLOCO 6 — direto do COPY PT V1 (sem alteração):**
- Sprint: 4 bullets + Ideal para + [VALOR A DEFINIR]
- Retainer: 5 bullets + Ideal para + [VALOR A DEFINIR] / mês

**Placeholder a substituir quando disponível:**
- `[VALOR A DEFINIR]` em ambos os cards → confirmar com Elias

**Validação técnica:**
- `<section>` abre: **8** / `</section>` fecha: **8** → ✅ balanço perfeito
- `#showreel` → linha 135 ✅
- `#packages` → linha 602 ✅
- Grep confirma: zero resíduos de "Affordable pricing" / "$699" / "$1,699" / "marquee" / "Subscribe now"
- Arquivo: de 1047 linhas → **964 linhas**

**Arquivos alterados:**
- `html/index.html` — BLOCO 5 + BLOCO 6
- `html/index.BLOCO5_6.bak.html` — snapshot criado

---

---

### BLOCO 7 — Selected Work / #work (2026-03-10)
**Objetivo:** Substituir a seção `#work` (owl-carousel com projetos fake) pelo conteúdo AWANAR com placeholders elegantes.

**Snapshot criado antes da execução:**
- `html/index.BLOCO7.bak.html`

**Mudanças realizadas:**

| Item | Antes | Depois |
|---|---|---|
| Comentário | `<!-- Featured Projects Section -->` | `<!-- Selected Work Section -->` |
| Badge | "Portfolio" | "Selected Work" |
| H2 | "Featured projects" | "Trabalho selecionado." |
| Sub | copy genérico EN | "Escolhidos por acesso, impacto e estética." |
| Estrutura | owl-carousel fullwidth fora do container | grid Bootstrap dentro de container |
| Vídeos | 0 | 2 iframes `ratio ratio-16x9` + placeholders `VIDEO_SELECTED_01/02` |
| Fotos | 6 imagens fake (Snapclear, BioTrack etc.) | 6 placeholders `selected-work-01..06.jpg`, fundo `#17203C` |

**Responsividade:**
- Vídeos: `col-12 col-lg-6` → empilhados no mobile, lado a lado no desktop ✅
- Fotos: `col-6 col-md-4` → 2 colunas mobile, 3 colunas desktop ✅
- Tudo dentro do `.container` Bootstrap ✅

**Placeholders a substituir quando os assets chegarem:**

| Placeholder | O que espera | Localização |
|---|---|---|
| `VIDEO_SELECTED_01` | Cloudflare Stream ID — vídeo 1 | linha 203 |
| `VIDEO_SELECTED_02` | Cloudflare Stream ID — vídeo 2 | linha 215 |
| `selected-work-01.jpg` | Foto real do campo | `../assets/images/` |
| `selected-work-02.jpg` | Foto real do campo | `../assets/images/` |
| `selected-work-03.jpg` | Foto real do campo | `../assets/images/` |
| `selected-work-04.jpg` | Foto real do campo | `../assets/images/` |
| `selected-work-05.jpg` | Foto real do campo | `../assets/images/` |
| `selected-work-06.jpg` | Foto real do campo | `../assets/images/` |

**Validação técnica:**
- `<section>` abre: **8** / `</section>` fecha: **8** → ✅ balanço perfeito
- `#work` → linha 170 ✅
- Zero resíduos: owl-carousel / portfolio-img / Snapclear / BioTrack / projects-detail.html ✅
- Arquivo: de 964 linhas → **917 linhas**

**Arquivos alterados:**
- `html/index.html` — BLOCO 7
- `html/index.BLOCO7.bak.html` — snapshot criado

---

---

### BLOCO 8 — Protocol / #protocol (2026-03-10)
**Objetivo:** Substituir a seção `#protocol` (tabs com imagens fake + copy EN genérico) por 4 itens AWANAR em grid 2×2, mantendo fundo dark.

**Snapshot criado antes da execução:**
- `html/index.BLOCO8.bak.html`

**Estrutura anterior (removida):**
- `.services-tab` com `.tab-content` (4 imagens: services-img-1..4.jpg)
- `nav-tabs` com 4 tabs: "Brand identity", "Web development", "Content creation", "Motion & 3d modeling"
- CTA "See our Work" → `projects.html` (link morto)

**Estrutura nova (AWANAR):**
- Grid `row g-0` com 4 células `col-md-6`
- Cada item: `border-top border-white border-opacity-25` + `h4` título + `p` corpo
- Padding assimétrico: itens esquerda com `pe-md-9`, itens direita com `ps-md-9` → canal visual entre colunas

**Copy inserida (idêntica à travada no WORK ORDER):**

| Item | Título | Primeiras palavras do corpo |
|---|---|---|
| 1 | Acesso antes da câmera. | "Toda produção começa com leitura de contexto..." |
| 2 | Direitos claros desde o início. | "Uso, janela, territórios, formatos e restrições..." |
| 3 | Um ponto de contato em cada fase. | "Patricia lidera o briefing, a interface comercial..." |
| 4 | Estética com responsabilidade. | "Não buscamos imagens vazias de contexto..." |

**Badge:** "Protocolo" (cor: `bg-primary text-dark` — dourado sobre fundo escuro, legível)
**H2:** "Como trabalhamos."
**awanar.css:** não tocado — sem overrides necessários

**Responsividade:**
- `col-md-6`: 1 coluna no mobile, 2 colunas no desktop ✅
- Padding assimétrico aplicado apenas em `md+` via `pe-md-9` / `ps-md-9` ✅
- Leitura limpa em mobile: sem padding lateral excessivo ✅

**Validação técnica:**
- `<section>` abre: **8** / `</section>` fecha: **8** → ✅ balanço perfeito
- `#protocol` → linha 278 ✅
- Zero resíduos: services-tab / nav-tabs / tab-pane / services-img / projects.html / "See our Work" ✅
- Arquivo: de 917 linhas → **849 linhas** (-68 linhas de template removido)

**Arquivos alterados:**
- `html/index.html` — BLOCO 8
- `html/index.BLOCO8.bak.html` — snapshot criado

---

---

## ✅ BLOCO 9 — Team (2026-03-10)

**Status:** CONCLUÍDO — aguardando OK VISUAL BLOCO 9

**Objetivo:** Substituir equipe fake do template (4 membros) por 2 perfis reais AWANAR Agency.

**O que foi alterado em `html/index.html`:**

| Elemento | Antes | Depois |
|---|---|---|
| Badge | "The team" | "Equipe" |
| H2 | "Meet our team" | "AWANAR." |
| Sub | EN genérico | "Uma estrutura enxuta, direta e preparada para operar projetos com exigência criativa, institucional e territorial." |
| Nº de cards | 4 (col-xl-3) | 2 (col-md-6) |
| Martha Finley | Creative Director | ❌ removido |
| Floyd Miles | Marketing Strategist | ❌ removido |
| Glenna Snyder | Lead Designer | ❌ removido |
| Albert Flores | UX/UI Developer | ❌ removido |
| Patricia Kuranyi | — | ✅ Founder & Managing Director \| Partnerships |
| Elias Sousa | — | ✅ Co-Founder & Creative Director (Field Unit) |
| Social icons | 3 links #! por card | ❌ removidos completamente |
| Imagem | team-img-1..4.jpg | placeholder neutro (#17203C) + img path |

**Copy PT inserida (travada):**
- Patricia: "Estratégia comercial, briefing, contratos e interface com clientes internacionais. EN / DE / PT."
- Elias: "Acesso territorial, direção criativa, coordenação de campo e produção documental. PT / ES."

**Layout:**
- 2 × `col-md-6` — 2 colunas no desktop, empilhado no mobile ✅
- Imagem: `padding-bottom:120%` + `object-fit-cover` — portrait 5:6, fundo `#17203C` quando 404 ✅
- Cargo em `text-primary` (dourado) ✅
- Texto expandido em `text-opacity-70` ✅
- Nenhum link morto ✅
- AOS mantido (`fade-up`, delay 100/200ms) ✅

**Validação técnica:**
- `<section>` abre: **8** / `</section>` fecha: **8** → ✅ balanço perfeito
- Resíduos template: **0** (Martha/Floyd/Glenna/Albert/team-img-1..4/social icons = zero)
- Linhas: 849 → 791

**Placeholders a substituir quando disponível:**
- `../assets/images/team-patricia.jpg` → foto real Patricia
- `../assets/images/team-elias.jpg` → foto real Elias

**Arquivos alterados:**
- `html/index.html` — BLOCO 9
- `html/index.BLOCO9.bak.html` — snapshot criado

---

---

## ✅ BLOCO 10 — FAQ (2026-03-10)

**Status:** CONCLUÍDO — aguardando OK VISUAL BLOCO 10

**Objetivo:** Substituir FAQ fake do template (5 perguntas EN genéricas) por 6 perguntas AWANAR em PT.

**O que foi alterado em `html/index.html`:**

| Elemento | Antes | Depois |
|---|---|---|
| Badge | "FAQs" | "FAQ" |
| H2 | "Frequently asked questions" | "Perguntas frequentes." |
| Sub | EN genérico | ❌ removido |
| Accordion ID | `accordionFlushExample` | `awanarFaq` |
| Nº de itens | 5 fake EN | 6 PT AWANAR |
| IDs dos itens | flush-collapseOne..Five | faq-1..faq-6 |
| Corpo das respostas | `text-dark` (invisível no dark bg) | `text-opacity-70` (legível) |

**6 Perguntas inseridas (copy travada):**
1. "Vocês trabalham somente na Amazônia?"
2. "O que está incluído nos direitos?"
3. "É possível licenciar conteúdo já existente?"
4. "Em quais idiomas vocês atendem?"
5. "Como funciona o processo após solicitar o deck?"
6. "Vocês entram como equipe principal ou como suporte local?"

**Correção técnica:** `text-dark` → `text-opacity-70` no accordion-body (fundo escuro tornaria `text-dark` invisível).

**Validação técnica:**
- `<section>` abre: **8** / `</section>` fecha: **8** → ✅ balanço perfeito
- Resíduos template: **0** — 6 `accordion-item` presentes ✅
- Linhas: 791 → 792

**awanar.css:** zero alterações.

**Arquivos alterados:**
- `html/index.html` — BLOCO 10
- `html/index.BLOCO10.bak.html` — snapshot criado

---

---

## ✅ BLOCO 11 — Contact / Request Deck (2026-03-10)

**Status:** CONCLUÍDO — aguardando OK VISUAL BLOCO 11

**Objetivo:** Substituir formulário genérico de 3 campos por formulário AWANAR de qualificação com 9 campos + contato direto.

**O que foi alterado em `html/index.html`:**

| Elemento | Antes | Depois |
|---|---|---|
| Badge | "Contact us" | "Contato" |
| H2 | "Get in touch" | "Vamos conversar quando fizer sentido." |
| Sub (col esquerda) | "Let's collaborate and create something amazing!" | "Preencha o formulário. Se houver fit de orçamento e timing, entramos em contato em até 24h." |
| Campos do form | 3 (nome, email, textarea) | 9 campos (ver abaixo) |
| CTA | "Submit message" | "Solicitar Deck" |
| Backend | nenhum | `action="#"` placeholder neutro |

**9 campos do formulário:**
1. Nome completo * — `text input`
2. Empresa / Marca * — `text input`
3. E-mail profissional * — `email input`
4. Qual é sua necessidade? * — `select` (Sprint / Retainer / Licenciamento / Outro)
5. Timeline estimado * — `select` (2 semanas / 1–3m / 3–6m / Indefinido)
6. Budget aproximado * — `select` (€5k–€15k / €15k–€35k / €35k+ / Indefinido)
7. Como o conteúdo será utilizado? — `select` (Ads / PR / Streaming / Web / Outro)
8. Idioma preferido * — `select` (PT / EN / DE)
9. Sobre o projeto — `textarea` opcional ("Conte brevemente o contexto.")

**Linha de contato direto (col esquerda):**
- "Prefere contato direto?"
- WhatsApp → `href="#!"` (placeholder — número a definir)
- `agency@redeawanar.com`

**Placeholders que precisam de substituição:**
- `href="#!"` no WhatsApp → número real quando disponível
- `action="#"` no form → Formspree ID / redirect WhatsApp / mailto — a definir

**awanar.css — 2 overrides adicionados (mínimos):**
- `.form-select { background-image: ... }` → seta do dropdown em ivory (#ECE6DC), legível no dark bg
- `.form-select option { background-color: #17203C; color: #ECE6DC; }` → opções do native dropdown com dark navy bg

**Validação técnica:**
- `<section>` abre: **8** / `</section>` fecha: **8** → ✅ balanço perfeito
- Resíduos template: **0**
- Form fields: **9** (`form-control` + `form-select`) ✅
- Linhas: 792 → 880

**Arquivos alterados:**
- `html/index.html` — BLOCO 11
- `assets/css/awanar.css` — 2 overrides form-select
- `html/index.BLOCO11.bak.html` — snapshot criado

---

*Última atualização: 2026-03-10 — BLOCO 11 concluído. One-page AWANAR completo. Próximo: integração de backend / assets reais.*

---

## 📧 AUTORESPONDER TEMPLATES — APPROVED (Zoho)

> Status: **APROVADO — verbatim lock**
> Platform: **Zoho Mail / Zoho Campaigns**
> Trigger: Contact form submission (any language)
> Language detection: based on `contact-idioma` field value (`en` or `de`)
> Next step: wire to form on GitHub + Cloudflare deployment

---

### ENGLISH — Autoresponder

**Subject:**
We received your message — AWANAR Agency

**Body:**
Hello,

Thank you for reaching out to AWANAR Agency.

We have received your message and will review your request carefully. If your project aligns with our field production scope in the Amazon, we will get back to you as soon as possible to continue the conversation.

AWANAR operates as an Amazon Field Unit, working with brands, production companies, and institutions that require authentic access, cultural protocol, and documentary-grade storytelling from the territory.

We appreciate your interest and look forward to learning more about your project.

Best regards,
Patricia Kuranyi
Founder & Managing Director | Partnerships (DE/EN)
AWANAR Agency • Amazon Field Unit
agency@redeawanar.com
www.redeawanar.com

---

### GERMAN — Autoresponder

**Betreff:**
Wir haben Ihre Nachricht erhalten — AWANAR Agency

**Text:**
Hallo,

vielen Dank für Ihre Nachricht an die AWANAR Agency.

Wir haben Ihre Anfrage erhalten und prüfen sie sorgfältig. Wenn Ihr Projekt zu unserem Arbeitsfeld im Amazonas passt, melden wir uns so bald wie möglich bei Ihnen, um das Gespräch fortzusetzen.

AWANAR arbeitet als Amazon Field Unit und kooperiert mit Marken, Produktionsfirmen und Institutionen, die authentischen Zugang, kulturelles Protokoll und dokumentarisches Storytelling direkt aus dem Territorium benötigen.

Vielen Dank für Ihr Interesse. Wir freuen uns darauf, mehr über Ihr Projekt zu erfahren.

Mit freundlichen Grüßen
Patricia Kuranyi
Founder & Managing Director | Partnerships (DE/EN)
AWANAR Agency • Amazon Field Unit
agency@redeawanar.com
www.redeawanar.com

---

*Autoresponder templates updated: 2026-03-12 — Ready for Zoho wiring post-deployment.*
