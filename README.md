
----------------------
Bem vindo ao backend do meu projeto!
Para rodar o backend, você precisa primeiro ter o XAMPP e o MySQL Workbench instalados no seu computador.



ADENDOS DO MEU PROJETO
-------------------------


Meu projeto roda com o Mysql utilizando o Xampp. Então é necessário abrir o MySql e criar o banco de dados de modo que seja igual ao especificado no Springboot.
Enquanto não possuo domínio de ferramentas como Docker, segui o desenvolvimento desse projeto desse modo.


--------------------------
No xampp, precisa ligar o MySql, para que rode na porta 3306.


No Workbench:


File → New Query Tab


Reconnect to DBMS


Linha do SQL: 


CREATE DATABASE banco_spring;


USE banco_spring;


CREATE TABLE consulta(
	id INT PRIMARY KEY AUTO_INCREMENT,
	date DATETIME,
	available BOOLEAN
);

LEMBRE-SE QUE O USUÁRIO DO BANCO DE DADOS DEVE SEGUIR ESSE PADRÃO:



spring.datasource.username=root




spring.datasource.password=




> Pronto! Banco de dados criado. Ao rodar o Backend, apenas rodando o arquivo BackendConsultasApplication.java, o banco de dados já estará integrado e a API funcionando.
