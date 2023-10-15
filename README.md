# API DE CONTROLE DE USUÁRIOS E/OU PRODUTOS

## Sobre

Desenvolvida para estudar os fundamentos do uso do Typescript com Nodejs, com a persistência no MongoDB. Consta também com o versionamento de API (v1 e v2), na v2 da API segue-se o padrão de projeto Repository Pattern e sua arquitetura.  

### 📋 Lista de features

- [x] Versionamento de API
- [x] Persistência em Banco de Dados
- [x] Tipagem dos Dados
- [x] Repository Pattern
- [x] Separação de Responsabilidades
- [x] Principios de Injeção de Dependências & Inversão de Dependências.


### 🗺️​ Rotas da API 
- [x] "/": Rota inicial de apresentação
- [x] "/api/v1": Rota inicial da v1 da api
- [x] "/api/v2": Rota inicial da v2 da api
- [x] "/api/v1/users": Rota para listar todos usuários na v1
- [x] "/api/v2/users": Rota para listar todos usuários na v2 da api.
- [x] "/api/v1/users/:id": Rota para listar um usuário específico na v1 da api.
- [x] "/api/v2/users/:id": Rota para listar um usuário específico na v2 da api.
- [x] "/api/v1/products": Rota para listar todos produtos na v1.
- [x] "/api/v1/products/:id": Rota para um produto específico na v1 da api.
**Detalhe Importante:** As demais requisições HTTP (PUT/PATCH, POST & DELETE) também são a partir da mesma rota do GET de cada versão, mudando apenas o verbo HTTP.


### 🔧 Instalação

Instalando as dependencias:

```
npm install
```

Rodando o projeto:

```
npm run start
```

### 💭​ Observações

De acordo com a regra de negócio para o dominio escolhido, é possivel a implementação de novas features bem como a refatoração das features existentes.

## ✒️ Autor

* **Daniel Nogueira** - *Web Developer* - [Github](https://github.com/NogueiraDan)

