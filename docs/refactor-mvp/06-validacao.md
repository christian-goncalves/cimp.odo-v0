# Validacao

## Objetivo
Garantir que cada etapa entregue ganho visual real sem regressao de consistencia, leitura e responsividade.

## Criterios objetivos por etapa

### Etapa 1
- Estrutura visual mapeada e delimitada.
- Prioridade de leitura definida por secao.
- Grid e ritmo vertical definidos para uso continuo.

### Etapa 2
- Hero com mensagem e CTA visualmente claros.
- Blocos principais com hierarquia e escaneabilidade melhores.
- Nenhuma secao critica com conflito de composicao.

### Etapa 3
- Tipografia, espacamento e superficies unificados.
- Componentes repetidos sem variacao arbitraria.
- Consistencia visual comprovada entre secoes.

### Etapa 4
- Layout estavel em mobile, tablet e desktop.
- Sem sobreposicao, quebra estrutural ou perda de prioridade visual.
- Fluxo visual continuo da primeira a ultima secao.

### Etapa 6 (governanca pos-estabilizacao)
- Validacao recorrente institucionalizada em comando reexecutavel (`npm run visual:governance`).
- Evidencia objetiva por rodada registrada em `_tmp/stage6-visual-validation/report.json` com capturas em mobile/tablet/desktop.
- Criterios de bloqueio e pendencia formalizados em `docs/refactor-mvp/08-governanca-pos-estabilizacao.md`.

## Validacao final do MVP visual
- Integridade visual: aprovada.
- Hierarquia de informacao: aprovada.
- Responsividade: aprovada.
- Consistencia sistemica: aprovada.

## Regra de continuidade pos-MVP
- Toda alteracao visual deve rodar governanca recorrente antes de fechamento.
- Nao aprovar mudanca sem build verde e sem relatorio objetivo em 3 viewports.
- Em caso de falha nao reproduzivel, registrar pendencia explicita no checklist com evidencia disponivel.
