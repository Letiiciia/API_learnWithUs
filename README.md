### Entendendo o projeto learnWithUs

<p align="center">
<img src="https://github.com/Letiiciia/API_learnWithUs/blob/master/img/image-asset.png">
</p>

O projeto surge com a necessidade de, quem está aprendendo idiomas, encontrar exercícios relacionados aos conteúdos.

**Exercícios**

```json
    [
        {
        "id": 5fd2a6052959af002434fb84,
        "author": "Letícia Lima",
        "profile_linkedin": "https://www.linkedin.com/in/leticia-flima/",
        "theme": "Present Perfect",
        "instructions": {
            "id": 154,
            "name": "Do Tamanho Do Nosso Amor",
            "release_date": "2013-01-01",
            "total_tracks": 14,
            "url": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce"
        },
        "artists": {
            "id": "7gfkYbxpguEc9bm6m8TpAr",
            "name": "Chitãozinho & Xororó"
        }
        }, 
        ...
    ] 
```

A API é Básicamente:

Um CRUD com exercícios de tempos verbais e  vocabulários usuais;
Um modelo open source para que professores e alunos contribuem com materiais e conteúdos no banco de dados;
O diferencial dos exercícios é que existe um tópico de dicas valiosas, como sugestão de músicas no tempo verbal aprendido, aplicativos, filmes, dentre outros.



missão:
Criar uma rede de apoio, incentivo e materiais para a prática constante até a perfeição, livre de custo financeiro. Aprender é prazeroso e aprender em conjunto é maravilhoso.


Entregável
Post - cadastrar o exercício e o contato do criador do material, como nome e linkedin (A ideia é criar um network através dessa iniciativa)
Get - Trazer os exercícios cadastrados no banco de dados
Get por Tema (ex: present perfect)
Get por id (ex: _id:5486565, exercício específico)
Update por id
Delete por id



Desejável
Evoluir para um aplicativo
Aceitando ideias
Ideias para o projeto learnWithUs

O projeto surge com a necessidade de, quem está aprendendo idiomas, encontrar exercícios relacionados aos conteúdos.

A API é Básicamente:

Um CRUD com exercícios de tempos verbais e  vocabulários usuais;
Um modelo open source para que professores e alunos contribuem com materiais e conteúdos no banco de dados;
O diferencial dos exercícios é que existe um tópico de dicas valiosas, como sugestão de músicas no tempo verbal aprendido, aplicativos, filmes, dentre outros.



missão:
Criar uma rede de apoio, incentivo e materiais para a prática constante até a perfeição, livre de custo financeiro. Aprender é prazeroso e aprender em conjunto é maravilhoso.


Entregável
Post - cadastrar o exercício e o contato do criador do material, como nome e linkedin (A ideia é criar um network através dessa iniciativa)
Get - Trazer os exercícios cadastrados no banco de dados
Get por Tema (ex: present perfect)
Get por id (ex: _id:5486565, exercício específico)
Update por id
Delete por id



Desejável
Evoluir para um aplicativo
Aceitando ideias


db.exercisesForms.insert({"author": "Letícia Lima","profile_linkedin": "https://www.linkedin.com/in/leticia-flima/","theme": "Present Perfect","clue_of_gold": "Song: Love Of My Life - Queen","instructions": "Put the verbs into the correct form (present perfect simple).","exercise_1": "I (not / work) _____ today.","exercise_2": "We (buy) _____ a new lamp.","exercise_3": "We (not / plan) _____ our holiday yet.","exercise_4": "Where (be / you) ______ ?","exercise_5": "He (write) ____ five letters.","answer_1": "have not worked","answer_2": "have bought","answer_3": "have not planned","answer_4": "have you been","answer_5": "has written"})