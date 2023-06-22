# StoreCatalogApp
#Configuração de ambiente
- Para salvar as entidades no banco é necessário ter o SQL management studio (https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)
- No Sql management studio é necessário criar um database denominado StoreCatalogDb (Assim como está presente no appsettings) ![image](https://github.com/Yurikamagoe/StoreCatalogApp/assets/31245434/2d7c5d7c-1f9d-4df7-9cb4-4f8d0df0da3b)
- Para rodar as migrations do projeto é necessário entrar na pasta da API (StoreCatalogAPI) e digitar no terminal o comando **dotnet ef migrations update**
- Após rodar as migrations execute a solução da API em .Net utilizando o comando **dotnet watch run**
- Por fim entre na pasta do projeto angular e execute o projeto utilizando o comando **ng serve**
- Entre na rota **http://localhost:4200/products** para ter acesso às funcionalidades.
