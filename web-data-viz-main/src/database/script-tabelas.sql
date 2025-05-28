-- database para o projeto individual
create database ProjetoIndividual;

use ProjetoIndividual;

create table usuario (
idusuario int primary key auto_increment,
nome varchar(20) not null,
email varchar(64) not null,
senha varchar(20) not null,
index ix_usuario (idusuario)
);

create table perguntaQuiz (
  id SERIAL PRIMARY KEY,
  textoPergunta TEXT NOT NULL,
  tipoPergunta VARCHAR(50) DEFAULT 'unica',
  ordem INT
);

create table respostaQuiz (
  id SERIAL PRIMARY KEY,
  fkpergunta INT NOT NULL,
  textoResposta TEXT NOT NULL,
  ordem INT,
  constraint fk_pergunta foreign key (fkpergunta) references perguntaQuiz(id)
);
