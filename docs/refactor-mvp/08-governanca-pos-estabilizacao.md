# Governanca Pos-Estabilizacao Visual (Etapa 6)

## Objetivo
Institucionalizar validacao recorrente de regressao visual pos-MVP com evidencia objetiva, sem alterar logica de negocio, sem criar feature e sem mudar semantica de conteudo.

## Comando oficial reexecutavel
`npm run visual:governance`

Este comando executa:
1. Build tecnico (`npm run build`).
2. Start local da aplicacao em `127.0.0.1:3001`.
3. Validacao visual automatizada em mobile/tablet/desktop com comparacao ao baseline da Etapa 5.

## Evidencias geradas por execucao
- Relatorio consolidado: `_tmp/stage6-visual-validation/report.json`
- Capturas por viewport:
  - `_tmp/stage6-visual-validation/screenshots/mobile-390x844.png`
  - `_tmp/stage6-visual-validation/screenshots/tablet-834x1112.png`
  - `_tmp/stage6-visual-validation/screenshots/desktop-1440x900.png`

## Criterios de aceite (aprovacao)
Para aprovar a rodada:
1. Build sem erro.
2. `summary.passed=true` no relatorio da Etapa 6.
3. Em cada viewport:
   - `hasOverlap=false`
   - `horizontalOverflow=false`
   - `rootOverflowDelta<=1`
   - `sectionOrder` e `sectionFlow` estaveis contra baseline da Etapa 5
   - `heroSignals.headingAboveFold=true`
   - `heroSignals.ctaAboveFold=true`

## Gatilhos de bloqueio
Bloqueia entrega/merge quando ocorrer qualquer item:
1. Falha de build.
2. Falha do comando `npm run visual:governance`.
3. `summary.passed=false` no relatorio.
4. Sobreposicao, overflow horizontal, quebra estrutural ou perda de prioridade visual no hero.

## Gatilhos de pendencia formal
Registrar pendencia explicita quando:
1. Nao for possivel gerar evidencia objetiva (relatorio/capturas ausentes).
2. Ambiente impedir reproducao confiavel da validacao (porta indisponivel, baseline ausente, erro intermitente de infra local).
3. Houver anomalia nao reproduzivel em segunda tentativa imediata.

## Rotina operacional minima
1. Rodar `npm run visual:governance` antes de liberar alteracao visual.
2. Anexar caminho do relatorio e resultado no checklist (`docs/refactor-mvp/07-checklist.md`).
3. Se houver falha, abrir pendencia e nao ajustar UI alem do necessario para corrigir regressao comprovada.
