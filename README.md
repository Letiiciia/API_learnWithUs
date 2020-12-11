### Entendendo o projeto learnWithUs

<p align="center">
<img src="https://github.com/Letiiciia/API_learnWithUs/blob/master/img/image-asset.png">
</p>

<p>O projeto surge com a necessidade de, quem está aprendendo idiomas, encontrar exercícios relacionados aos conteúdos.
</p>



**Modelo Exercício**

```json
    [
        {
        "id": "5fd2a6052959af002434fb84",
        "author": "Letícia Lima",
        "profile_linkedin": "https://www.linkedin.com/in/leticia-flima/",
        "theme": "Present Perfect",
        "instructions": "Put the verbs into the correct form (present perfect simple).",
        "exercise_1": "I (not / work) _____ today.",
        "exercise_2": "We (buy) _____ a new lamp.",
        "exercise_3": "We (not / plan) _____ our holiday yet.",
        "exercise_4": "Where (be / you) ______ ?",
        "exercise_5": "He (write) ____ five letters.",
        "answer_1": "have not worked",
        "answer_2": "have bought",
        "answer_3": "have not planned",
        "answer_4": "have you been",
        "answer_5": "has written"
        }
    ] 
```
-   Pode inserir até 10 exercícios por formulário.



**A API possui:**
- ``Um CRUD `` com exercícios de tempos verbais e  vocabulários usuais
- ``Modelo Open Source `` para que professores e alunos contribuam com materiais e conteúdos no banco de dados 



**A Missão**

<p>Criar uma rede de apoio, incentivo e materiais para a prática constante até a perfeição, livre de custo financeiro. Aprender é prazeroso e aprender em conjunto é maravilhoso.
</p>



**Arquitetura**

        Arquitetura MVC
        |
        \--📂 API_learnWithUs
            |   README.md  
            |   .env
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   **server.js**
            \--📂 node_modules
            \--📂 img
            \--📂src
                |
                |   **app.js**
                |
                📂---database
                |   **coonect.js
                |
                📂---controller
                |       accountControllers.js
                |       exerciseControllers.js
                |       
                |       
                |
                📂---model
                |       accountSchema.js
                |       exerciseSchema.js
                |       
                |       
                |       
                |
                📂---routes
                |       accountRoutes.js
                |       exerciseRoutes.js
                |       
                |       
                |       
                📂---utils
                |       statusCode.js
                |       
                |       
                |       
                |__   




**CRUD do Exercício**
**Composto por:**
  
- [x] Post - cadastrar o exercício e o contato do criador do material, como nome e linkedin (A ideia é criar um network através dessa iniciativa)
- [x] Get - Trazer os exercícios cadastrados no banco de dados
- [x] Get - por Tema (ex: present perfect)
- [x] Get - por id (ex: _id:5486565, exercício específico)
- [x] Update - por id
- [x] Delete - por id
- [x]  Delete - por theme



**CRUD da Conta**
**Composta por:**

- [x]  Post - cadastrar o login do usuário/contribuinte
- [x]  Get  - cadastros
- [x]  Update - por id
- [x]  delete - por id



**EndPoints exercício**

| Recurso | Descrição |
| --- | --- |
| `/exercise/all` | Retorna todos os exercícios |

| Recurso | Descrição |
| --- | --- |
| `/exercise/new` | cadastra um novo exercício |

| Recurso | Descrição |
| --- | --- |
| `/exercise/:id` | Retorna exercício específico |

| Recurso | Descrição |
| --- | --- |
| `/exercise/theme` | Retorna exercício específico pelo tema|

| Recurso | Descrição |
| --- | --- |
| `/exercise/update/:id` | Atualiza exercício específico |

| Recurso | Descrição |
| --- | --- |
| `/exercise/delete/:id` || `/exercise/delete` | Deleta exercício específico |



**EndPoints conta**

| Recurso | Descrição |
| --- | --- |
| `/register` | Cadastra um usuário |

| Recurso | Descrição |
| --- | --- |
| `/accounts` | Retorna usuários dados sencíveis     |

| Recurso | Descrição |
| --- | --- |
| `/update/:id` | Atualiza usuário específico        |

| Recurso | Descrição |
| --- | --- |
| `/delete/:id` | Deleta usuário específico        |Server Local


### Rodando o Back End 

```bash
Server Local
# Com o git
# Clone este repositório
$ git clone <https://github.com/Letiiciia/API_learnWithUs>

# Acesse a pasta do projeto no terminal/cmd
$ cd API_learnWithUs

# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
# Mongo conectado em mongodb://localhost:27017/reprograma
```

```bash
Deploy
* Acesse o [link da API](https://lwus.herokuapp.com/)

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku
```
