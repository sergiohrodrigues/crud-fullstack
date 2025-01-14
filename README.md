# Olá, seja muito bem vindo ao meu projeto Crud fullstack.

## Esse é um projeto com back-end(C#), banco de dados (SQL Server), e no front-end(Angular), então para conseguir usar o projeto todo precisar colocar o back-end para rodar..

## Primeiro passo, clonar ou baixar arquivos para seu computador
Copiar pasta completa com back e front-end para seu computador, com:<br/> git clone "link repositorio" <br/>ou<br/> baixar com winrar e descompactar pasta.<br/>

## Segundo passo, Conectar ao Banco de dados
No SQL Server, copie o nome do servidor, e cole em ConnectionStrings > DefaultConnect > server = "aqui" no arquivo "appsettings.json", acredito que nao precise criar um migration, então vá em Ferramentas > Gerenciador de Pacotes do Nuget > Console do gerenciador do Nuget e de o comando "update-database", pronto, acredito que isso irá conectar sua web Api com seu banco de dados..

## Segundo passo, rodar back-end
Como eu usei o Visual Studio para fazer o back-end aconselho usar ele para rodar, mas caso conheça outra maneira de rodar fiquei acontede..

## Terceiro passo, rodar front-end
Abra a pasta "front-end" em seu sua IDE de desenvolvimento(visual studio code, sublime text, etc.. ) dê o comando "npm i" no terminar e logo depois coloque para rodar com "ng serve".
<br/>
## Pronto agora voce poderá testar o projeto

<br/><br/>
# Sobre o projeto
### Basicamente é um projeto CRUD, onde você consegue criar(create) um item, ver(read) os dados que tem nesse item, alterar(update) alguma informação no item, e deletar(Delete) esse item..

<br/><br/>
### E é esse meu projeto, espero que gostem, vou deixar algumas imagens desse projeto logo abaixo :)

![create](https://github.com/user-attachments/assets/54b84a95-d4ac-4566-a909-fb899eb5cff4)
![read](https://github.com/user-attachments/assets/b114043d-6411-4928-a751-433c1c116594)
![read2](https://github.com/user-attachments/assets/0c03496e-5f67-424b-9924-3d8713cc484f)
![search](https://github.com/user-attachments/assets/63faa0bc-ce21-40ed-ab36-2ea78d27746c)
![update](https://github.com/user-attachments/assets/2254a6e7-0882-4be6-8078-801d361a3554)
