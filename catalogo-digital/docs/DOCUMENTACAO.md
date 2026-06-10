# Documentação do Projeto - Catálogo Digital

## 1. Objetivo

O Catálogo Digital foi desenvolvido para organizar produtos, clientes, vendas e atendimentos de uma loja, permitindo controle operacional e emissão de relatórios com dados reais registrados no sistema.

## 2. Público-alvo

Pequenos empreendedores, lojas escolares, projetos acadêmicos, bazares, comércios locais e qualquer pessoa que precise apresentar seus produtos de forma digital e organizada.

## 3. Estrutura do sistema

O sistema possui as seguintes telas:

1. Login
2. Cadastro de usuário
3. Dashboard
4. Catálogo público
5. Gestão de produtos
6. Gestão de clientes
7. Registro de vendas
8. Registro de atendimentos
9. Relatórios

## 4. Banco de dados

O banco de dados é funcional e utiliza LocalStorage. Ele armazena os dados no navegador em formato JSON.

Entidades principais:

- Usuário: id, nome, e-mail, senha e provedor.
- Produto: id, nome, categoria, preço, estoque e imagem.
- Cliente: id, nome, telefone e e-mail.
- Venda: id, cliente, produto, quantidade, total e data.
- Atendimento: id, cliente, canal, status, observação e data.

## 5. Fluxo de uso

O usuário acessa o sistema, realiza login ou cadastro, visualiza o dashboard, cadastra produtos e clientes, registra vendas e atendimentos e gera relatórios por período.

## 6. Relatórios gerados

O sistema apresenta:

- Quantidade de produtos cadastrados.
- Quantidade de clientes cadastrados.
- Quantidade de produtos vendidos.
- Total faturado.
- Atendimentos registrados.
- Ticket médio.
- Resumo por período.

Exemplo gerado:

A loja vendeu X produtos em X dias, com faturamento total de R$ X.

## 7. Responsividade

A interface se adapta a telas de computador e celular, usando CSS Grid, Flexbox e media queries.

## 8. Segurança

Como se trata de um projeto acadêmico front-end, os dados ficam no navegador. Em uma versão profissional, recomenda-se usar back-end com autenticação segura, banco de dados SQL ou NoSQL e criptografia de senha.

## 9. Login com Google

O botão de login com Google funciona de forma simulada. Para login real, é necessário configurar OAuth no Google Cloud Console.

## 10. Melhorias futuras

- Integração com Firebase.
- Login Google real.
- Exportação de relatórios em PDF sem usar impressão do navegador.
- Filtros avançados por categoria.
- Controle de permissões por usuário.
