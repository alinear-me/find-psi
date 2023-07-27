![find-psi](https://as1.ftcdn.net/v2/jpg/04/22/79/26/1000_F_422792693_9Y0ItAA1HJPS4WBW9oExd1g6bsFKDGhC.jpg "imagem disponível em freepik")

# Projeto Final | Find-Psi API | Encontre Psi - {Reprograma}  
Projeto de conclusão do curso de Desenvolvimento Back-end com B3 Social | On22 da [{reprograma}](https://reprograma.com.br/)

Aplicação disponível [aqui](https://find-psi.onrender.com/find-psi-documentacao/) 💜

 <p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#decreption">Descrição</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#instalacoes">Instalações</a> • 
 <a href="#routes">Rotas</a> •
 <a href="#autor">Autor</a>
</p>

## Objetivo
O projeto visa o mapeamento de atendimento psicológico a preços acessíveis e/ou gratuitos na cidade de São Paulo.

### Funcionalidades


- [x] A Schema dos psicólogos cadastrados deverá conter: id (autogerado), nome, instituição, email, endereço, região de atendimento (local), serviço oferecido e descrição sobre preços. 
- [x] A API deve permitir o cadastro de novos psicólogos
- [x] A API deve permitir a busca por região de atendimento
- [x] A API deve permitir a busca por tipo de serviço desejado
- [x] A API deve permitir a atualização cadastral dos psicólogos já cadastrados através do id autogerado
- [x] A API deve permitir a exclusão de um cadastro através do id autogerado


### Tecnologias e dependências

[JavaScript](https://www.javascript.com/) |
[Node.js](https://nodejs.org/en) |
[Git](https://git-scm.com/) |
[VSCode](https://code.visualstudio.com/) |
[Mongodb](https://www.mongodb.com/pt-br) |
[Postman](https://documenter.getpostman.com/view/16821311/UVRAHSEo)


Dependências:
[nodemon](https://www.npmjs.com/package/nodemon) 
[bcrypt](https://www.npmjs.com/package/bcrypt) 
[cors](https://www.npmjs.com/package/cors) 
[dotenv](https://www.npmjs.com/package/dotenv) 
[express](https://www.npmjs.com/package/express) 
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 
[mongoose](https://www.npmjs.com/package/mongoose) 
[swagger-autogen](https://www.npmjs.com/package/swagger-autogen) 
[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) 

### Instalações

```javascript
$ git clone https://github.com/alinear-me/find-psi

# Entrar na pasta do repositório
$ cd find-spi

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start
```
Caso esteja utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.

### Rotas/Endpoints

| Rotas        |                             |
| ---------    | ------                      |  
| GET/all      | Lista todos os cadastros    |
| GET/location | Busca por região            |
| GET/service  | Busca por serviço oferecido |
| POST/add     | Faz um novo cadastro        |
| PATCH/:id    | Atualiza cadastro existente |
| DELETE/:id   | Deleta um cadastro          |

### Autor

========================================================================

<footer>
  Desenvolvido com 💜
</footer>
