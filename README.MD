# API de controle de finanças 

## intro 

&emsp;&emsp; Este repositório tem o objetivo de mostrar uma aplicação de controle de finanças para auxiliar aqueles que desejam melhorar o relacionamento com o seu "bolso".

## Requisitos Funcionais: 
- [ ] Deve haver login e logout do usuário na plataforma
- [x] O usuário deve poder criar uma conta que irá conter seus ganhos e gastos.
- [x] Haverão 5 áreas de gastos: Entretenimento, Alimentação, Educação, Saúde e Transporte.
- [x] Deve ser possível adicionar, remover, atualizar e listar os gastos e ganhos.
- [x] O usuário deve conseguir ter uma visão geral da sua saúde financeira a qualquer momento. para isso, gere um extrato financeiro mostrando todos os gastos (seguindo as 5 áreas supracitadas), seus ganhos e o saldo de sua carteira.

## Como rodar a aplicação? 
&emsp;&emsp;Siga Esses Passos com atenção e tudo rodará como planejado 💀  (•◡•) /

1. Faça a Clonagem do repositorio no github.
2. Tenha o Docker instalado no seu computador para que rode a base de dados postgres que contem no projeto.
3. Execute o comando no seu terminal :
```
docker-compose up --build
```
4. use Yarn ou Npm install para que o projeto para que a pasta nodemodules seja criada
5. use o comando a seguir para que a base de dados seja criada:
```
yarn typeorm migration:run
```
6. use o comando a seguir para que o seed basico de dados seja criado:
```
yarn seed
```
7. use o comando a seguir para rodar a aplicação em ambient dev
```
yarn dev
```

## Rotas da aplicação 
&emsp;&emsp;A Aplicação conta com 5 rotas sendo 4 de operações e uma de login *session* abaixo fica listado qual das rotas você pode colocar no seu insomina ou postman:
```
http://localhost:3333/users
http://localhost:3333/spends
http://localhost:3333/sessions
http://localhost:3333/categories
http://localhost:3333/profits
```
&emsp;&emsp; Além das rotas a aplicação conta com uma documentação feita pelo swagger onde ela pode ser acessada a partir da rota:
```
http://localhost:3333/api-docs/#/
```
&emsp;&emsp; Essa rota fara os testes dos verbos POST, GET, PUT e DELETE além de contar com os jsons que cada uma das rotas precisam para que elas sejam validas sem ter que olhar no codigo fonte.


## tecnologias 
Esse projeto foi desenvolvido com as seguintes tecnologias:
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Express](https://github.com/expressjs/express)
- [Typeorm](https://typeorm.io/)

## Ferramentas

- [Visual Studio Code](https://code.visualstudio.com)
- [Insomnia](https://insomnia.rest)
- [Docker](https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png)
