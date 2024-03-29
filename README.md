Projeto full stack desenvolvido por EmmanuelBMS!

Requisitos: Node versão ^16.15.1

Passo a passo para rodar o projeto em sua máquina:

- Faça o clone do repositório com o comando $git clone git@github.com:EmmanuelBMS/Ebytr-desafio-tecnico.git
- Navegue até a pasta Ebytr-desafio-tecnico com o comando $cd Ebytr-desafio-tecnico && cd app
- Rode o comando $npm run install:back (esse comando vai instalar as dependecias do backend)
- Rode o comando $npm run install:front (esse comando vai instalar as dependecias do frontend)
- Após a instalação do frontend, navegue até o diretório /app/front_end e procure pelo arquivo .env.example preencha a variável de ambiente para o porta do seu backend ( Exemplo: REACT_APP_BACKEND=3001 ). Renomeie o arquivo .env.example para .env apenas
- Após a instalação do backend navegue até o diretório /app/app_backend procure o arquivo .env.example preencha as variáveis de ambiente de acordo com as suas configurações, em seguida renomeie o arquivo para .env (retirando o .example);
- Em seguida rode o comando $npm run start:back
- Após iniciar o backend, abra outra aba do seu terminal e rode o comando $npm run start:front
- Uma guia do seu navegador padrão vai abrir direto na página da aplicação.

Detalhes do projeto:

Backend: 
  - API REST - Arquitetura MSC
  - Api Desenvolvida em Nodejs com express
  - Banco de dados: MYSQL com ORM Sequelize
  - Biblioteca dotenv para setup de variaveis de ambiente
  - Eslint para garantir padronização de código

Frontend:
  - HTML5, CSS3, Javascript
  - Reactjs
  - Biblioteca dotenv para setup de variaveis de ambiente
  - Eslint para garantir padronização de código
  - Biblioteca  axios para fazer requisições ao backend


Agradecimentos: 
  - Rhuanna por me acomapanhar nessa jornada nova de dev !
  - Trybe por ter nos desafiado com esse projeto
  - Família por estar sempre presente!
