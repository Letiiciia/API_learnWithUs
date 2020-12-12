### Entendendo o projeto learnWithUs
### Understanding the learnWithUs project

---

<p align="center">
<img src="https://github.com/Letiiciia/API_learnWithUs/blob/master/img/image-asset.png">
</p>

<p>O projeto surge com a necessidade de, quem está aprendendo idiomas, encontrar exercícios relacionados aos conteúdos.
</p>

<p>The project was born with the necessity of those who are learning languages to find exercises about contents in English.
</p>

---

**Modelo Exercício** //
**Exercise Model**

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
-   We can insert up to 10 exercises for form.


---


**A API possui:** // 
**The API has:**
- ``Um CRUD `` com exercícios de tempos verbais e  vocabulários usuais
- ``Modelo Open Source `` para que professores e alunos contribuam com materiais e conteúdos no banco de dados 



- ``A CRUD `` with exercises about verb tenses and usual vocabularies
- ``Model Open Source `` for teachers and students to contribute with materials and contents on the database


---


**A Missão** // 
**The Mission**
<p>Criar uma rede de apoio, incentivo e materiais para a prática constante até a perfeição, livre de custo financeiro. Aprender é prazeroso e aprender em conjunto é maravilhoso.
</p>

<p>Creating a support network, encouragement and materials to practice regularly in order to reach perfection, without financial costs. Learning is pleasurable and learning with other people is awesome.
</p>

---


**Arquitetura** // 
**Architecture**

        MVC
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



---


**CRUD do Exercício**-
**Composto por:**

  
- [x] Post - Cadastrar o exercício e o contato do criador do material, como nome e linkedin (A ideia é criar um network através dessa iniciativa)
- [x] Get - Trazer os exercícios cadastrados no banco de dados
- [x] Get - Por Tema (ex: present perfect)
- [x] Get - Por id (ex: _id:5486565, exercício específico)
- [x] Update - Por id
- [x] Delete - Por id
- [x]  Delete - Por theme
  
---

**Exercise CRUD**-
**Made with:**
- [x] Post - Register the exercise and the user of the material creator, Such as name and linkedin profile (The idea is to creat a network through this initiative)
- [x] Get - To bring the registered exercises on data base
- [x] Get - For theme (eg: present perfect)
- [x] Get - For id (eg: _id:5486565, specific exercise)
- [x] Update - For id
- [x] Delete - For id


---



**CRUD da Conta**-
**Composta por:** 
- [x]  Post - Cadastrar o login do usuário/contribuinte
- [x]  Get  - Cadastros
- [x]  Update - Por id
- [x]  delete - Por id..
  
---
**Account CRUD**-
**Made with:**
- [x]  Post - Register user/contributor login
- [x]  Get  - Registers
- [x]  Update - For id
- [x]  delete - For id


---


**EndPoints exercício** //
**Exercises endpoints**

| Recurso/Resource | Descrição/Description |
| --- | --- |
| `/exercise/all` | Retorna todos os exercícios/Return all the exercises |

| Recurso/Resource | Descrição/Description |
| --- | --- |
| `/exercise/new` | Cadastra um novo exercício/Register a new exercise |

| Recurso/Resource | Descrição/Description |
| --- | --- |
| `/exercise/:id` | Retorna exercício específico/Return to a specific exercise |

| Recurso/Resource | Descrição/Description |
| --- | --- |
| `/exercise/theme` | Retorna exercício específico pelo tema/ Return to a specific theme |

| Recurso/Resource | Descrição/Description |
| --- | --- |
| `/exercise/update/:id` | Atualiza exercício específico/Update exercise |

| Recurso/Resource | Descrição/Description |
| --- | --- |
| `/exercise/delete/:id` | Deleta exercício específico/Delete a specific exercise |


---



**EndPoints conta** //
**Account endpoints**

| Recurso/Resource | Descrição/Description |
| --- | --- |
| `/register` | Cadastra um usuário/Register a user |

| Recurso/Resource | Descrição/Description |
| --- | --- |
| `/accounts` | Retorna usuários sem dados sencíveis/Return user without sensitive data  |

| Recurso/Resource | Descrição/Description |
| --- | --- |
| `/update/:id` | Atualiza usuário específico/Update a specific user |

| Recurso/Resource | Descrição/Description |
| --- | --- |
| `/delete/:id` | Deleta usuário específico/Delete a specific user  |


---


### Rodando o Back End 
### Running the Back End

```bash
Server Local
# Com o git/With git
# Clone este repositório/Clone this repository
$ git clone <https://github.com/Letiiciia/API_learnWithUs>

# Acesse a pasta do projeto no terminal - cmd/Access the mkdir of project on terminal
$ cd API_learnWithUs

# Instale as dependências/Install the dependencies
$ npm install
$ npm instal mongoose

# Execute o servidor/Run the server
$ npm start

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>/The server will start on port 8080
# Mongo conectado em mongodb://localhost:27017/reprograma / connected to mongodb
```


---


```bash
Deploy
* Acesse o [link da API](https://lwus.herokuapp.com/) /Access the link

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku / Utilize to return and test the API andpoints locally or via Heroku
```


```bash
Deploy
* Access [link da API](https://lwus.herokuapp.com/) 

* Utilize to [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) return and test the API andpoints locally or via Heroku
```



Clique para visualizar o desenho da [DiagramLearnWithUs.png](https://github.com/Letiiciia/API_learnWithUs/blob/master/img/Untitled%20Diagram.png)

Click to visualize the drawing of [DiagramLearnWithUs.png](https://github.com/Letiiciia/API_learnWithUs/blob/master/img/Untitled%20Diagram.png)



