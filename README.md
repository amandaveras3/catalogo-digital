# Catálogo Digital - Sistema de Gestão de Produtos

![Status](https://img.shields.io/badge/Status-Concluído-success)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Licença](https://img.shields.io/badge/Licença-MIT-green)

## Sobre o Projeto

O **Catálogo Digital** é uma aplicação web desenvolvida para gerenciar produtos, clientes e vendas de forma simples e eficiente.

O sistema permite o cadastro e consulta de produtos, gerenciamento de clientes, controle de vendas, geração de relatórios e visualização de indicadores através de um dashboard moderno e intuitivo.

---

## Objetivos

* Facilitar o gerenciamento de produtos.
* Organizar informações de clientes.
* Registrar vendas realizadas.
* Gerar relatórios administrativos.
* Disponibilizar um catálogo digital moderno e responsivo.

---

# Funcionalidades

## Autenticação

* Login de usuários
* Cadastro de usuários
* Login com Google (integrável via Firebase)
* Controle de sessão

---

## Dashboard

Exibe indicadores em tempo real:

* Total de produtos cadastrados
* Total de clientes cadastrados
* Quantidade de vendas realizadas
* Faturamento total
* Produtos mais vendidos

---

## Gestão de Produtos

* Cadastro de produtos
* Edição de produtos
* Exclusão de produtos
* Pesquisa por nome
* Filtro de categorias
* Controle de estoque

---

## Gestão de Clientes

* Cadastro de clientes
* Consulta de clientes
* Atualização de dados
* Exclusão de clientes

---

## Gestão de Vendas

* Registro de vendas
* Histórico de vendas
* Controle financeiro
* Relatórios de faturamento

---

## Sistema de Busca

Permite pesquisar:

* Produtos
* Clientes
* Vendas

em tempo real.

---

## Relatórios

Geração automática de relatórios contendo:

* Produtos cadastrados
* Produtos vendidos
* Clientes cadastrados
* Faturamento
* Períodos de venda

Exemplo:

> "A loja vendeu 120 produtos em 30 dias, gerando um faturamento de R$ 8.450,00."

---

# Tecnologias Utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript ES6

### Banco de Dados

* LocalStorage (versão acadêmica)
* Compatível com:

  * MySQL
  * PostgreSQL
  * Firebase Firestore
  * MongoDB

### Bibliotecas

* Chart.js
* Font Awesome
* jsPDF

---

# Estrutura do Projeto

```plaintext
catalogo-digital/
│
├── index.html
├── login.html
├── cadastro.html
├── dashboard.html
│
├── css/
│   ├── style.css
│   ├── login.css
│   └── dashboard.css
│
├── js/
│   ├── auth.js
│   ├── dashboard.js
│   ├── produtos.js
│   ├── clientes.js
│   ├── vendas.js
│   └── relatorios.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo.png
│
├── docs/
│   ├── DOCUMENTACAO.pdf
│   └── RELATORIO.pdf
│
└── README.md
```

---

# Instalação

## 1. Clonar Repositório

```bash
git clone https://github.com/seuusuario/catalogo-digital.git
```

## 2. Entrar na Pasta

```bash
cd catalogo-digital
```

## 3. Abrir o Projeto

Abra o arquivo:

```plaintext
index.html
```

ou utilize:

```bash
Live Server
```

no VS Code.

---

# Integração com Google Login

Para ativar o login real com Google:

1. Criar projeto no Firebase.
2. Ativar Authentication.
3. Ativar Google Provider.
4. Adicionar as credenciais em:

```javascript
firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
```

---

# Banco de Dados

## Modelo Entidade Relacionamento

### Usuários

| Campo | Tipo    |
| ----- | ------- |
| id    | INT     |
| nome  | VARCHAR |
| email | VARCHAR |
| senha | VARCHAR |

### Produtos

| Campo     | Tipo    |
| --------- | ------- |
| id        | INT     |
| nome      | VARCHAR |
| categoria | VARCHAR |
| preco     | DECIMAL |
| estoque   | INT     |

### Clientes

| Campo    | Tipo    |
| -------- | ------- |
| id       | INT     |
| nome     | VARCHAR |
| email    | VARCHAR |
| telefone | VARCHAR |

### Vendas

| Campo       | Tipo    |
| ----------- | ------- |
| id          | INT     |
| cliente_id  | INT     |
| produto_id  | INT     |
| quantidade  | INT     |
| valor_total | DECIMAL |
| data_venda  | DATE    |

---

# Relatórios Gerados

O sistema gera automaticamente:

### Relatório de Produtos

* Quantidade cadastrada
* Produtos em estoque
* Produtos mais vendidos

### Relatório de Clientes

* Clientes ativos
* Clientes cadastrados

### Relatório Financeiro

* Receita total
* Ticket médio
* Quantidade de vendas

### Relatório por Período

* Diário
* Semanal
* Mensal
* Personalizado

---

# Responsividade

Compatível com:

* Desktop
* Notebook
* Tablet
* Smartphone

---

# Desenvolvido por

**Amanda Félix Veras**
Curso Técnico em Desenvolvimento de Sistemas
EEEP Alfredo Nunes de Melo

---

# Licença

Este projeto está licenciado sob a Licença MIT.

```text
MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

**Versão:** 1.0.0
**Ano:** 2026
**Projeto Acadêmico – Desenvolvimento de Sistemas**
