---
https://github.com/Iuryppedrosa/REST-API-Course/assets/89420889/91351537-b052-4065-9537-297c9be884a1

# 📚 API RESTfull Java SpringBoot

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)

Bem-vindo ao **Projeto em Spring Java nivél 3 RESTFull**! Este projeto tem como objetivo **implementar todos os níveis de uma API Rest** de maneira eficiente e eficaz. 🚀
---
Além disso, o projeto conta com uma parte implementada no frontend, podendo visualizar os livros cadastrados. 😎
---

## 📖 Documentação Swagger

A documentação da API é gerada automaticamente utilizando o **Swagger**, uma ferramenta poderosa para criar, documentar e testar APIs de forma fácil e eficiente.

### Principais Funcionalidades do Swagger

- **Interface Interativa**: O Swagger gera uma interface interativa que permite explorar todos os endpoints da API, seus parâmetros e respostas.
- **Documentação Automática**: A documentação é gerada automaticamente com base nos comentários do código-fonte, garantindo consistência e precisão.
- **Teste de API**: É possível testar os endpoints diretamente na interface do Swagger, facilitando a validação e depuração da API.

Com o Swagger, sua API fica bem documentada e de fácil entendimento para os desenvolvedores e usuários finais.

![screencapture-localhost-8080-swagger-ui-index-html-2024-05-31-10_25_10](https://github.com/Iuryppedrosa/REST-API-Course/assets/89420889/11b810cb-90dc-485c-a3dc-b27e1d626d91)
---

## 🌐 Front-end

O front-end do projeto é desenvolvido utilizando **React**, uma biblioteca JavaScript popular para construção de interfaces de usuário. 

### Tecnologias e Ferramentas

- **React Router**: Utilizado para gerenciar as rotas da aplicação, permitindo a navegação entre diferentes páginas de forma eficiente.
- **Axios**: Biblioteca usada para fazer requisições HTTP para a API, facilitando a comunicação com o back-end.

### Principais Funcionalidades do Front-end

- **Componentização**: A interface é construída com componentes reutilizáveis, garantindo um código modular e fácil de manter.
- **Gerenciamento de Estado**: Utilização de hooks e context API para gerenciar o estado global da aplicação.
- **Integração com a API**: As requisições para o back-end são feitas utilizando o Axios, permitindo operações como busca, criação, atualização e deleção de dados.

Essa abordagem garante uma aplicação front-end moderna, responsiva e eficiente, facilitando a experiência do usuário ao interagir com a aplicação.

---

## ⚙️ Funcionamento do Projeto no Backend em Java

A API é estruturada da seguinte maneira:

1. **Linguagem de Programação e Frameworks**: O projeto é desenvolvido em Java, utilizando o framework Spring Boot para a criação de uma aplicação web. Além disso, é usado SQL para interagir com o banco de dados.

2. **Gerenciamento de Dependências**: O Maven é usado para gerenciar as dependências do projeto.

3. **Banco de Dados**: O projeto utiliza MySQL como sistema de gerenciamento de banco de dados. A conexão com o banco de dados é gerenciada pelo Spring Boot, com as credenciais e a URL do JDBC definidas no arquivo `docker-compose.yml`.

4. **Segurança**: O projeto utiliza o Spring Security para a segurança da aplicação. O código em `ProjectApplication.java` mostra que o projeto está usando um `DelegatingPasswordEncoder` para codificar senhas, com `Pbkdf2PasswordEncoder` como o codificador de senhas.

5. **Docker**: O projeto utiliza Docker para criar um ambiente isolado e consistente para a execução da aplicação. O arquivo `Dockerfile` define a imagem Docker para a aplicação, enquanto o arquivo `docker-compose.yml` define os serviços para a aplicação e o banco de dados.

6. **Estrutura de Diretórios**: O código da aplicação está localizado no diretório `src/main/java/dev/iury/project`. O arquivo `ProjectApplication.java` é a classe principal da aplicação Spring Boot.

7. **Execução da Aplicação**: A aplicação pode ser iniciada usando o comando `docker-compose up`. Isso iniciará os contêineres do banco de dados e da aplicação, e a aplicação estará acessível na porta 8080 do host.

## 🌟 Funcionalidades visíveis no front end

- ✅ Add Book: Adiciona livros.
- ✅ Delete Book: Deleta livros.
- ✅ Lista de Books: Lista todos os livros com paginação.
- ✅ Edit Books: Edita o livro selecionado.

## Estruturação dos endpoints Requests:

### 📚 BookController:

- `findAll()`: Este método **GET** lista todos os livros do banco de dados.
- `findById(Long id)`: Este método **GET** busca um livro específico pelo seu **ID**.
- `create(BookVO book)`: Este método **POST** cria um novo livro e o insere no banco de dados.
- `update(BookVO book, Long id)`: Este método **PUT** atualiza um livro existente no banco de dados.
- `delete(Long id)`: Este método **DELETE** remove um livro do banco de dados pelo seu **ID**.

### 🧑‍🤝‍🧑 PersonController:

- `findAll(Integer page, Integer size, String direction)`: Este método **GET** lista todas as pessoas do banco de dados, com suporte à paginação e ordenação.
- `findById(Long id)`: Este método **GET** busca uma pessoa específica pelo seu **ID**.
- `create(PersonVO person)`: Este método **POST** cria uma nova pessoa e a insere no banco de dados.
- `createv2(PersonVOV2 person)`: Este método **POST** cria uma nova pessoa com um formato de dados diferente e a insere no banco de dados.
- `update(PersonVO person, Long id)`: Este método **PUT** atualiza uma pessoa existente no banco de dados.
- `disablePerson(Long id)`: Este método **PATCH** desativa uma pessoa no banco de dados.
- `delete(Long id)`: Este método **DELETE** remove uma pessoa do banco de dados pelo seu **ID**.

### 📁 FileController:

- `uploadFile(MultipartFile file)`: Este método **POST** carrega um arquivo e o armazena no servidor.
- `uploadFileMultipleFiles(MultipartFile[] files)`: Este método **POST** carrega vários arquivos e os armazena no servidor.
- `downloadFile(String filename, HttpServletRequest request)`: Este método **GET** baixa um arquivo do servidor.

### 🔑 AuthController:

- `signin(AccountCredentialsVO data)`: Este método **POST** autentica um usuário e retorna um token.
- `refreshToken(String username, String refreshToken)`: Este método **PUT** atualiza o token de um usuário autenticado.

---
## 🐳 Implementação no Docker

Este projeto utiliza Docker para criar um ambiente isolado e consistente. Com Docker, você pode facilmente criar, implantar e executar a aplicação em contêineres.

### Arquivos Importantes

- **Dockerfile**: Define a imagem Docker para a aplicação Java, começando com a imagem base `openjdk:17-jdk-slim`, copiando o arquivo JAR gerado pelo Maven e definindo o comando de entrada para iniciar a aplicação.
- **docker-compose.yml**: Define dois serviços:
  - `db`: Utiliza a imagem `mysql:8.0` para criar um contêiner MySQL, configurando variáveis de ambiente e expondo a porta 3306.
  - `app`: Utiliza a imagem definida no `Dockerfile`, depende do serviço `db`, expõe a porta 8080, define variáveis de ambiente para o Spring Boot e monta o diretório atual do host como um volume.
 ![Captura de Tela 2024-05-31 às 10 24 25](https://github.com/Iuryppedrosa/REST-API-Course/assets/89420889/635d99cb-51ac-4bf9-8b01-86555b5159d4)

## 🛠️ Tecnologias Aplicadas

O projeto aplica as seguintes tecnologias:

- **HATEOAS**: Para enriquecer as respostas da API com links de navegação.
- **Paginação**: Implementada para gerenciar grandes volumes de dados nas respostas da API.
- **JWT Token**: Utilizado para geração de tokens para acesso seguro aos endpoints.
- **Mappers**: Usados para transformar dados entre camadas da aplicação.
- **Migrations Flyway**: Para gerenciar versões do banco de dados e aplicar migrações de forma automatizada.
- **Testes Unitários**: Bateria de testes unitários implementados para todos os endpoints.
- **Testes Automatizados e Containerizados**: Para garantir a qualidade e consistência do código, com testes executados em ambientes isolados via Docker.

---

### Comandos

Para iniciar a aplicação, execute:
```bash
docker-compose up
```
Isso iniciará os contêineres do banco de dados e da aplicação, tornando a aplicação acessível na porta 8080 do host.

Para mais detalhes, visite o meu [Docker Hub](https://hub.docker.com/r/iuryppedrosa/restfullapi).

## 🚀 Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clone o repositório:
    ```bash
    git clone https://github.com/iuryppedrosa/rest-api.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd rest-api
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## 🛠️ Uso
Aqui estão alguns exemplos de como utilizar o projeto:

```javascript
const meuProjeto = require('meu-projeto-incrivel');

meuProjeto.fazerAlgoIncrivel();
```

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 👨‍💻 Autores

- **Iury Pedrosa** - *Desenvolvedor Principal* - [Seu GitHub](https://github.com/iuryppedrosa)

## 🛠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [React.js](https://expressjs.com/)
- [Mysql](https://www.mongodb.com/)
- [Axios](https://nodejs.org/)
- [Javascript](https://expressjs.com/)
- [Java 17](https://www.mongodb.com/)
- [Docker](https://www.mongodb.com/)

## 📋 Pré-requisitos

- Node.js instalado
- Mysql configurado
- Java jdk 17
- Docker logado
- React e Node instalados

## 📄 Informações Adicionais
```
### Estrutura de Diretórios


meu-projeto-incrivel/
├── main/
│   ├── java/
│       ├── project/
│           ├── config/
│               ├── FileStorageConfig
│               ├── OpanAPIConfig
│               ├── SecurityConfig
│               ├── WebConfig
│           ├── controllers/
│               ├── AuthController
│               ├── BookController
│               ├── FileController
│               ├── PersonController
│           ├── dataVO/
│               ├── security/
│                   ├── BookVO
│                   ├── PersonVO
│                   ├── UploadFileResponseVO
│               ├── dataVO2/
│                   ├── PersonVOV2
│           ├── Exceptions/
│               ├── handler/
│                   ├── CustomizeRespondeEntityExceptionHandler
│               ├── ExceptionResponse
│               ├── FileStorageException
│               ├── InvalidJwtAuthenticationException
│               ├── MyFileNotFoundException
│               ├── ResourceNotFoundException
│               ├── RiqueredObjectsNullException
│               ├── UnsuportedMathOperationException
│           ├── mapper/
│               ├── custom/
│                   ├── DozerMapper
│           ├── model/
│               ├── Book
│               ├── Permission
│               ├── Person
│               ├── User
│           ├── repository/
│               ├── BookRepository
│               ├── PersonRepository
│               ├── UserRepository
│           ├── jwt/
│               ├── JwtTokenFilter
│               ├── JwtTokenProvider
│           ├── serializaitonconverter/
│               ├── YamlJackson2HttpMesageConverter
│           ├── service/
│               ├── AuthServices
│               ├── BookServices
│               ├── FileStorageService
│               ├── PersonServices
│               ├── UserServices
│           ├── util/
│               ├── ProjectApplication

```

### Contato

Para mais informações, entre em contato com [iurypedrosa@gmail.com](mailto:iurypedrosa@gmail.com).

---

