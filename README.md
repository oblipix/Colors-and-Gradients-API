







## 💻 API de Cores e Gradientes


**Descrição**

A API de Cores e Gradientes é uma interface RESTful que permite aos desenvolvedores acessar informações sobre cores e gradientes. 
Ela oferece funcionalidades para listar cores disponíveis, gradientes e sugestões de combinações de cores. É especialmente útil para desenvolvedores front-end 
que desejam integrar paletas de cores em seus projetos.




## Endpoints

### 1. Listar Cores

◾ URL: /api/colors

◾ Método: GET

#### Exemplo de Requisição: 

` GET https://api-cores-gradientes-73qrc073v-oblipixproject.vercel.app/api/colors
`
#### Exemplo de Resposta: 
                    

![Captura de tela 2024-10-31 222614](https://github.com/user-attachments/assets/6ab88467-ddaf-4a04-8be2-88b20e64f9c3)




 ### 2. Listar Gradientes

 
◾ URL: /api/gradients

◾ Método: GET

◾ Descrição: Retorna uma lista de gradientes disponíveis.



#### Exemplo de Requisição: 

` 
GET https://api-cores-gradientes-73qrc073v-oblipixproject.vercel.app/api/gradients
`

#### Exemplo de Requisição: 


![Captura de tela 2024-10-31 222741](https://github.com/user-attachments/assets/321f7c00-2fe2-464a-b0ce-e13aa93b6130)



### 3. Sugestões de Combinação de Cores:


◾ URL: /api/combinations

◾ Método: GET

◾ Parâmetros: `color` (obrigatório): A cor em formato HEX para a qual deseja sugestões de combinação. Exemplo: `#0077be`.

◾ Descrição: Retorna uma lista de sugestões de combinações de cores, excluindo a cor fornecida.

#### Exemplo de Requisição: 

`GET https://api-cores-gradientes-73qrc073v-oblipixproject.vercel.app/api/combinations?color=FF5733` 
>
>(substitua `FF5733` por qualquer cor HEX que você queira testar, `sem usar o #`)


#### Exemplo de Resposta: 


![Captura de tela 2024-10-31 222830](https://github.com/user-attachments/assets/12fad901-3042-4b82-b93a-aed155ac76ad)



___
## ⚙️ Como Clonar este Repositório



### Pré-requisitos:

> [!IMPORTANT]
> 
> Antes de executar este projeto, certifique-se de que você possui as seguintes ferramentas instaladas em sua máquina:
> 
>  <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Logo" width="20"/> Ter o Git instalado no seu computador. Se ainda não tiver, baixe e instale o Git.
>
> 
>
>
><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" width="20"/> Uma conta no GitHub (opcional, mas recomendado).
> 
>
> <img src="https://img.icons8.com/ios-filled/50/000000/package.png" alt="Package Icon" width="20"/> Instale Dependências: ` npm install `
> 
> 
>  <img src="https://img.icons8.com/ios/50/000000/code-fork.png" alt="Fork Icon" width="20"/>  Faça um Fork do repositório, assim nada será alterado do repositório original.
>
> <img src="https://img.icons8.com/color/50/000000/nodejs.png" alt="Node.js Icon" width="30"/>  A API foi desenvolvida utilizando o Node.js. É recomendável instalar a versão mais recente do Node.js. 
>
> 
>
>
>  
>
> 

> [!TIP]
>
> **Cliente HTTP (opcional):** Para testar a API, você pode usar um cliente HTTP como Postman ou Insomnia, ou até mesmo o terminal com curl.
>

  
  

**Clone o repositório:**

```diff
git clone https://github.com/oblipix/Colors-and-Gradients-API.git
```


<sub> Agora você tem uma cópia local do repositório que pode ser modificada conforme necessário. </sub>




___


## 📜 Licença
Esse projeto está licenciado sob a MIT License.






