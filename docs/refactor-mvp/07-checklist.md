# Checklist Operacional

- [x] Estrutura `docs/refactor-mvp` criada com os 8 arquivos obrigatorios.
- [x] Escopo visual consolidado e sem expansao de feature.
- [x] Diagnostico resumido em 6 areas, sem duplicacao desnecessaria.
- [x] Frentes de trabalho definidas por macroblocos.
- [x] Etapas e subetapas organizadas para execucao.
- [x] Regras visuais minimas registradas e acionaveis.
- [x] Criterios de validacao por etapa definidos.
- [x] Checklist final pronto para acompanhamento da execucao.
- [x] Documentacao alinhada ao objetivo de MVP visual local.
- [x] Nenhuma orientacao de alteracao de logica de negocio incluida.

## Status de Execucao

- [x] Etapa 1.1 concluida: secoes mapeadas e perimetro visual delimitado.
- [x] Etapa 1.2 concluida: base de hierarquia visual aplicada.
- [x] Etapa 1.3 concluida: padroes minimos de grid e ritmo vertical aplicados.
- [x] Etapa 2 iniciada.
- [x] Etapa 2.1 concluida: hero e primeira dobra refinados para clareza imediata.
- [x] Etapa 2.2 concluida: blocos de autoridade e especialidades refinados.
- [x] Etapa 2.3 concluida: blocos de diferenciais, casos e contato refinados sem alterar fluxo funcional.
- [x] Etapa 2 concluida.
- [x] Etapa 3 iniciada.
- [x] Etapa 3.1 concluida: tipografia, espacamento e superficies uniformizados.
- [x] Etapa 3.2 concluida: CTAs e componentes repetidos uniformizados.
- [x] Etapa 3.3 concluida: inconsistencias visuais entre secoes eliminadas.
- [x] Etapa 3 concluida.
- [x] Etapa 4 iniciada.
- [x] Etapa 4.1 concluida: composicao por breakpoint ajustada (mobile/tablet/desktop) sem alterar logica ou semantica.
- [x] Etapa 4.2 concluida: integridade visual ponta a ponta validada sem sobreposicao, quebra estrutural ou perda de prioridade visual.
- [x] Etapa 4.3 concluida: checklist operacional de MVP visual fechado.
- [x] Etapa 4 concluida.
- [x] Etapa 5 iniciada.
- [x] Etapa 5.1 concluida: baseline visual pos-MVP congelado com evidencias objetivas em mobile/tablet/desktop.
- [x] Etapa 5.2 concluida: hardening visual residual aplicado em composicao/consistencia sem alteracao de logica, fluxo ou semantica.
- [x] Etapa 5.3 concluida: handoff operacional final do MVP visual registrado com status e pendencias explicitas.
- [x] Etapa 5 concluida.
- [x] Etapa 6 iniciada.
- [x] Etapa 6.1 concluida: validacao recorrente de regressao visual institucionalizada com comando reexecutavel `npm run visual:governance` (build + mobile/tablet/desktop + relatorio objetivo).
- [x] Etapa 6.2 concluida: protocolo operacional pos-MVP formalizado com execucao, criterios de aceite e gatilhos de bloqueio/pendencia em `docs/refactor-mvp/08-governanca-pos-estabilizacao.md`.
- [x] Etapa 6.3 concluida: handoff final de manutencao visual registrado com status e pendencias explicitas neste checklist.
- [x] Etapa 6 concluida.

## Evidencias da Etapa 4

- [x] Build tecnico sem erro: `npm run build` concluido com sucesso.
- [x] Validacao responsiva automatizada em 3 viewports:
  - Mobile `390x844`: `sectionCount=8`, `horizontalOverflow=false`, `hasOverlap=false`, fluxo `hero -> contato`.
  - Tablet `834x1112`: `sectionCount=8`, `horizontalOverflow=false`, `hasOverlap=false`, fluxo `hero -> contato`.
  - Desktop `1440x900`: `sectionCount=8`, `horizontalOverflow=false`, `hasOverlap=false`, fluxo `hero -> contato`.
- [x] Capturas integrais por viewport registradas na validacao Playwright da Etapa 4.

## Evidencias da Etapa 5

- [x] Build tecnico sem erro: `npm run build` concluido com sucesso apos hardening residual.
- [x] Baseline visual pos-MVP congelado por automacao em `_tmp/stage5-visual-report.json`.
- [x] Validacao responsiva automatizada em 3 viewports:
  - Mobile `390x844`: `sectionCount=8`, `horizontalOverflow=false`, `hasOverlap=false`, fluxo `hero -> contato`, `heroSignals.headingAboveFold=true`, `heroSignals.ctaAboveFold=true`.
  - Tablet `834x1112`: `sectionCount=8`, `horizontalOverflow=false`, `hasOverlap=false`, fluxo `hero -> contato`, `heroSignals.headingAboveFold=true`, `heroSignals.ctaAboveFold=true`.
  - Desktop `1440x900`: `sectionCount=8`, `horizontalOverflow=false`, `hasOverlap=false`, fluxo `hero -> contato`, `heroSignals.headingAboveFold=true`, `heroSignals.ctaAboveFold=true`.
- [x] Capturas integrais por viewport registradas em `_tmp/stage5-visual-baseline/mobile-390x844.png`, `_tmp/stage5-visual-baseline/tablet-834x1112.png` e `_tmp/stage5-visual-baseline/desktop-1440x900.png`.
- [x] Hardening visual residual aplicado sem tocar logica: padronizacao de CTA principal do formulario em `components/contact.tsx` (remocao de `rounded-lg` para manter consistencia com `mvp-btn`).
- [x] Decisao conservadora registrada: sem ajustes adicionais fora desse refinamento para evitar regressao visual e expansao de escopo.

## Evidencias da Etapa 6

- [x] Build tecnico sem erro dentro da rotina recorrente: `npm run visual:governance` executado com sucesso em `2026-04-18T00:31:18.315Z` (UTC no relatorio).
- [x] Validacao recorrente institucionalizada com comando reexecutavel:
  - `npm run visual:regression` (somente validacao visual contra baseline da Etapa 5).
  - `npm run visual:governance` (build + start + validacao visual automatizada).
- [x] Evidencia objetiva consolidada em `_tmp/stage6-visual-validation/report.json` com `summary.passed=true` e `passedViewports=3/3`.
- [x] Validacao responsiva automatizada em 3 viewports:
  - Mobile `390x844`: `sectionCount=8`, `horizontalOverflow=false`, `hasOverlap=false`, `rootOverflowDelta=0`, fluxo `hero -> contato`, `heroSignals.headingAboveFold=true`, `heroSignals.ctaAboveFold=true`.
  - Tablet `834x1112`: `sectionCount=8`, `horizontalOverflow=false`, `hasOverlap=false`, `rootOverflowDelta=0`, fluxo `hero -> contato`, `heroSignals.headingAboveFold=true`, `heroSignals.ctaAboveFold=true`.
  - Desktop `1440x900`: `sectionCount=8`, `horizontalOverflow=false`, `hasOverlap=false`, `rootOverflowDelta=0`, fluxo `hero -> contato`, `heroSignals.headingAboveFold=true`, `heroSignals.ctaAboveFold=true`.
- [x] Capturas integrais por viewport registradas em `_tmp/stage6-visual-validation/screenshots/mobile-390x844.png`, `_tmp/stage6-visual-validation/screenshots/tablet-834x1112.png` e `_tmp/stage6-visual-validation/screenshots/desktop-1440x900.png`.
- [x] Protocolo operacional pos-MVP visual formalizado em `docs/refactor-mvp/08-governanca-pos-estabilizacao.md`, sem alteracao de produto/logica/semantica.
- [x] Decisao conservadora registrada: sem ajustes de UI nesta etapa, pois nao houve regressao visual comprovada por evidencia objetiva.

## Pendencias

- Nenhuma pendencia aberta para a Etapa 6.
