# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Este repositório é usado para desenvolver landing pages profissionais para diferentes clientes. As instruções abaixo são permanentes e valem para todos os projetos. Responda ao usuário em português.

## Status do repositório

Este repositório contém apenas as instruções gerais (este CLAUDE.md) e o README.md. Ele não guarda código, build ou testes de projetos de clientes — cada cliente deve ter seu próprio repositório separado (ver README.md). Quando houver stack, comandos de execução, build e teste em um projeto de cliente, documente-os no repositório daquele cliente.

## Regras obrigatórias

1. **Análise prévia.** Antes de desenvolver, analise os requisitos, imagens, logos, referências de sites e feedback fornecidos pelo cliente. Se faltarem informações essenciais, pergunte antes de tomar decisões importantes.
2. **Design.** Crie um design moderno, profissional, original e responsivo para celulares, tablets e computadores. Evite aparência genérica e priorize acessibilidade, desempenho e boa experiência do usuário.
3. **Tecnologia.** Escolha tecnologias adequadas ao projeto. Não adicione frameworks ou dependências sem necessidade. Explique como executar o projeto localmente.
4. **Funcionalidades.** Implemente o que foi solicitado e teste os fluxos principais. Não invente integrações funcionais: identifique o que depende de serviços externos, credenciais ou configuração adicional.
5. **Segurança (obrigatória).**
   - Valide dados no cliente e, quando houver backend, também no servidor.
   - Proteja segredos e credenciais; evite vulnerabilidades comuns; não exponha dados pessoais; observe a LGPD quando aplicável.
   - Nunca coloque senhas, tokens ou chaves privadas no código, nos commits ou no GitHub.
6. **Feedback do cliente.** Analise o pedido, identifique os arquivos afetados, faça as alterações necessárias e verifique se elas não quebraram outras funcionalidades.
7. **Qualidade de código.** Mantenha o código organizado, legível e fácil de manter. Crie documentação útil quando necessário.
8. **Git/GitHub.** O GitHub é o repositório oficial do projeto.
   - Verifique o estado do Git antes de alterar arquivos.
   - Use commits com mensagens claras e envie as alterações ao remoto após os testes e a confirmação necessária.
   - Nunca afirme que houve commit ou envio sem verificar o resultado.
9. **Antes de publicar.** Execute os testes disponíveis e verifique erros, responsividade, links, formulários e possíveis problemas de segurança. Informe limitações e tarefas pendentes.
10. **Ações destrutivas.** Não apague arquivos, sobrescreva trabalho importante, publique em produção ou execute ações destrutivas sem autorização explícita.
11. **Isolamento entre clientes.** Cada cliente pode ter identidade visual, estrutura e funcionalidades diferentes. Não reutilize informações, logos, dados pessoais ou conteúdo de um cliente em outro projeto sem autorização.
12. **Comunicação.** Ao iniciar um projeto, apresente um plano breve. Ao concluir uma etapa, informe o que foi feito, os arquivos alterados, os testes executados e os próximos passos.