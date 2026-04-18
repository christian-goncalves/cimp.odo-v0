Segue o prompt final, direto para uso:

---

Atue como um especialista em parsing de HTML, reconstrução semântica de conteúdo e estruturação de dados conversacionais.

Sua tarefa é analisar um arquivo HTML completo (gerado via Ctrl+S de uma conversa) e converter esse conteúdo em um documento Markdown estruturado, com foco em registro de conversa.

OBJETIVO:

Transformar o HTML em dois outputs em Markdown:

1. Registro estruturado da conversa
2. Resumo da conversa (nível médio)

---

REGRAS GERAIS:

* Ignore completamente elementos de interface:
  menus, botões, sidebar, header, footer, estilos, scripts e qualquer conteúdo não relacionado diretamente à conversa

* Considere apenas:
  mensagens trocadas entre usuário e assistente

* Preserve a ordem cronológica exata da conversa

* Não copie o HTML bruto

* Não explique o que está fazendo

* Não invente conteúdo

* Não omita informações relevantes da conversa

---

ETAPA 1 — EXTRAÇÃO E NORMALIZAÇÃO

* Leia o HTML e extraia apenas o conteúdo textual da conversa

* Identifique corretamente:

  * quem está falando (Usuário vs Assistente)
  * blocos de texto
  * listas (se existirem)
  * códigos (se existirem)

* Normalize o conteúdo para uma linguagem clara e legível:

  * remover ruídos visuais
  * corrigir fragmentações
  * manter fidelidade semântica (não distorcer o sentido)

---

ETAPA 2 — GERAÇÃO DO MARKDOWN (REGISTRO)

Crie um documento com no máximo 200 linhas.

Formato obrigatório:

# Registro da Conversa

## Contexto

Breve descrição do tipo de conversa (ex: definição de tarefa, instrução técnica, planejamento, etc.)

---

## Conversa

### Usuário

[conteúdo da mensagem normalizado]

### Assistente

[conteúdo da resposta normalizado]

(repetir conforme necessário, mantendo ordem cronológica)

---

REGRAS DO REGISTRO:

* Linguagem limpa e objetiva
* Evitar repetições desnecessárias
* Manter clareza para leitura humana e interpretação por IA
* Não incluir elementos visuais irrelevantes
* Não ultrapassar 200 linhas no total

---

ETAPA 3 — RESUMO (NÍVEL MÉDIO)

Após o registro, gerar:

# Resumo da Conversa

## Objetivo

Descreva o objetivo principal da conversa

## Principais Pontos

Liste os pontos mais relevantes discutidos

## Decisões / Direcionamentos

Liste decisões, instruções ou definições feitas durante a conversa

## Resultado Final

Descreva o que foi produzido ou definido ao final

---

IMPORTANTE:

* O resumo deve ser claro, direto e informativo (nível médio — nem superficial, nem excessivamente detalhado)
* Não repetir o conteúdo completo da conversa
* Focar no que realmente importa

---

SAÍDA FINAL:

* Retornar tudo em Markdown
* Não incluir explicações fora do Markdown
* Estrutura limpa, organizada e pronta para leitura ou reutilização por IA

---
