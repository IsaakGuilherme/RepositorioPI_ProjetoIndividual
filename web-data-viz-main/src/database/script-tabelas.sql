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
  idPerguntaQuiz int PRIMARY KEY auto_increment,
  textoPergunta TEXT NOT NULL,
  tipoPergunta VARCHAR(50) DEFAULT 'unica',
  ordem INT
);

create table respostaQuiz (
  idRespostaQuiz int PRIMARY KEY auto_increment,
  fkpergunta INT NOT NULL,
  textoResposta TEXT NOT NULL,
  ordem INT,
  constraint fk_pergunta foreign key (fkpergunta) references perguntaQuiz(idPerguntaQuiz)
);

create table respostaUsuario (
  fkusuario INT NOT NULL,
  fkpergunta INT NOT NULL,
  fkresposta INT NOT NULL,
  constraint pk_respostaUsuario PRIMARY KEY (fkusuario, fkpergunta),
  constraint fk_usuario foreign key (fkusuario) references usuario(idusuario),
  constraint fk_perguntaResposta foreign key (fkpergunta) references perguntaQuiz(idPerguntaQuiz),
  constraint fk_resposta foreign key (fkresposta) references respostaQuiz(idRespostaQuiz)
);

-- Inserção das perguntas
insert into perguntaQuiz (textoPergunta, ordem) values
('Qual jogador revelado pelo Santos é o seu preferido?', 1),
('Qual foi o título mais marcante para você como torcedor do Santos?', 2),
('Qual ídolo representa melhor a história do Santos FC?', 3),
('Qual dessas camisas do Santos você considera a mais bonita?', 4),
('Em qual estádio você mais sonha em assistir um jogo do Santos?', 5),
('Qual geração de jogadores do Santos mais te empolgou?', 6),
('Qual desses rivais você mais gosta de vencer?', 7),
('Qual foi o jogo mais emocionante do Santos que você já viu?', 8),
('Qual música ou canto da torcida você mais se identifica?', 9),
('Qual dessas revelações recentes você acredita que terá mais sucesso na Europa?', 10);

-- Inserção das respostas (respeitando fkpergunta e ordem de exibição)
insert into respostaQuiz (fkpergunta, textoResposta, ordem) values
(1, 'Pelé', 1), (1, 'Robinho', 2), (1, 'Neymar', 3), (1, 'Rodrygo', 4),
(2, 'Libertadores 2011', 1), (2, 'Brasileirão 2002', 2), (2, 'Mundial de 1962', 3), (2, 'Paulista 2015', 4),
(3, 'Pelé', 1), (3, 'Pepe', 2), (3, 'Robinho', 3), (3, 'Giovanni', 4),
(4, 'Tradicional branca', 1), (4, 'Listrada preta e branca', 2), (4, 'Camisa azul (terceiro uniforme)', 3), (4, 'Rosa comemorativa', 4),
(5, 'Vila Belmiro', 1), (5, 'Maracanã', 2), (5, 'Morumbi', 3), (5, 'Arena Corinthians', 4),
(6, 'Anos 60 (Pelé, Pepe...)', 1), (6, 'Anos 2000 (Robinho, Diego...)', 2), (6, 'Anos 2010 (Neymar, Ganso...)', 3), (6, 'Atual (Marcos Leonardo, Deivid...)', 4),
(7, 'Corinthians', 1), (7, 'Palmeiras', 2), (7, 'São Paulo', 3), (7, 'Flamengo', 4),
(8, 'Final da Libertadores 2011', 1), (8, 'Santos 5x4 Flamengo (2011)', 2), (8, 'Santos 3x1 Corinthians (Paulista 2015)', 3), (8, 'Outro', 4),
(9, '"Agora quem dá bola é o Santos"', 1), (9, '"Santos, Santos, gol!"', 2), (9, '"Vamos Santos, vamos ser campeão"', 3), (9, 'Outra', 4),
(10, 'Rodrygo', 1), (10, 'Kaiky', 2), (10, 'Marcos Leonardo', 3), (10, 'Ângelo', 4);

insert into usuario (nome, email, senha) values
('João', 'joao@santos.com', '1234'),
('Mariana', 'mariana@santos.com', 'abcd'),
('Carlos', 'carlos@santos.com', 'pass123');

-- João responde (respostas aleatórias)
insert into respostaUsuario (fkusuario, fkpergunta, fkresposta) values
(1, 1, 1),  -- Pelé
(1, 2, 5),  -- Libertadores
(1, 3, 9),  -- Pelé
(1, 4, 13), -- Tradicional
(1, 5, 17), -- Vila
(1, 6, 21), -- Anos 60
(1, 7, 25), -- Corinthians
(1, 8, 29), -- Final Liberta
(1, 9, 33), -- "Agora quem dá bola"
(1, 10, 37); -- Rodrygo

-- Mariana responde
insert into respostaUsuario (fkusuario, fkpergunta, fkresposta) values
(2, 1, 3),  -- Neymar
(2, 2, 6),  -- Brasileirão
(2, 3, 11), -- Robinho
(2, 4, 14), -- Listrada
(2, 5, 18), -- Maracanã
(2, 6, 23), -- Anos 2010
(2, 7, 28), -- Flamengo
(2, 8, 30), -- 5x4 Flamengo
(2, 9, 34), -- "Santos, Santos, gol!"
(2, 10, 38); -- Kaiky

-- Carlos responde
insert into respostaUsuario (fkusuario, fkpergunta, fkresposta) values
(3, 1, 4),  -- Rodrygo
(3, 2, 8),  -- Paulista
(3, 3, 12), -- Giovanni
(3, 4, 15), -- Azul
(3, 5, 20), -- Arena Corinthians
(3, 6, 24), -- Atual
(3, 7, 27), -- São Paulo
(3, 8, 32), -- Outro
(3, 9, 36), -- Outra
(3, 10, 40); -- Ângelo
