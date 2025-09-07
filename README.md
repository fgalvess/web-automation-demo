# Web Automation Demo

Projeto de automação de testes utilizando [Playwright](https://playwright.dev/).

## Estrutura do Projeto

```
web-automation-demo/
├── fixtures/           # Dados de teste (ex: domínios, usuários, arquivos para upload)
│   ├── domains.json
│   ├── users.json
│   └── files/          
├── tests/              # Scripts de testes automatizados
│   ├── Register.spec.js
│   ├── login.spec.js
│   ├── fileUpload.spec.js
│   ├── alertasJS.spec.js
│   └── iframes.spec.js
├── utils/              # Funções utilitárias para os testes
│   └── commons.js
├── playwright.config.js # Configuração do Playwright
├── package.json         # Dependências e scripts do projeto
└── Readme.md            # Documentação do projeto
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18 ou superior)
- npm (gerenciador de pacotes do Node)

## Instalação

No diretório do projeto, execute:

```bash
npm install
```

## Executando os Testes

- **Todos os testes (modo headless):**
  ```bash
  npm test
  ```
- **Executar um teste específico em modo visual (headed):**
  ```bash
  npm run test-headed --test-name="NOME_DO_TESTE"
  ```
  Substitua `"NOME_DO_TESTE"` pelo nome do teste ou parte do nome (exemplo: `"Login"`).

- **Abrir o relatório HTML dos testes:**
  ```bash
  npm run report
  ```

## Scripts disponíveis

- `npm test`  
  Executa todos os testes em modo headless.

- `npm run test-headed --test-name="NOME"`  
  Executa testes que contenham `"NOME"` no título, em modo visual (útil para depuração).

- `npm run report`  
  Abre o relatório HTML gerado após a execução dos testes.

---

**Autor:** Fábio Guerra

---

## 📑 Casos de Teste - Web

Abaixo estão descritos os casos de teste planejados para a aplicação **Automation Testing Demo**.  
⚠️ **Observação importante:** alguns casos não foram automatizados devido a bugs encontrados na aplicação, conforme detalhado abaixo.

---

### ⚠️ WEB-001 – Cadastro de Usuário (não automatizado)
- **Motivo:** O campo **Country** apresenta um bug — nenhuma opção é exibida para seleção.  
- Como o campo é **obrigatório**, não foi possível concluir o cadastro de usuário.  
- **Impacto:** Esse problema bloqueia não só este caso de teste, mas também outros que dependem do cadastro.  

---

### ✅ WEB-002 – Submeter formulário de cadastro sem preencher campos obrigatórios
- **Passos:**
  1. Acessar formulário de registro.
  2. Submeter formulário.
- **Resultado Esperado:** Alertas de validação destacando os campos obrigatórios não preenchidos.

---


### ⚠️ WEB-003 – Login com dados válidos (não automatizado)
- **Motivo:** Esse teste depende da criação de um usuário válido.  
- Como o **cadastro não pôde ser executado** devido ao bug no campo Country, não foi possível gerar massa de dados para execução deste caso.  

---

### ✅ WEB-004 – Login com dados inválidos
- **Passos:**
  1. Acessar página de login.
  2. Inserir usuário/senha inválidos.
  3. Clicar em "Enter".
- **Resultado Esperado:** Mensagem de erro exibida, acesso negado.

---

### ✅ WEB-005 – Upload de arquivo
- **Passos:**
  1. Acessar página de upload.
  2. Selecionar um arquivo.
  3. Submeter.
- **Resultado Esperado:** Upload realizado com sucesso.

---

### ✅ WEB-006 – Interação com alertas JS
- **Passos:**
  1. Acionar alerta.
  2. Aceitar/Cancelar.
- **Resultado Esperado:** Ação refletida corretamente.

---

### ✅ WEB-007 – Interação com iframes
- **Passos:**
  1. Acessar página de iframes.
  2. Interagir com elemento dentro do frame.
- **Resultado Esperado:** Interação realizada com sucesso.
