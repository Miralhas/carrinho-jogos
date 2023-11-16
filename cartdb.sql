-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05/11/2023 às 22:37
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cartdb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `carrinho`
--

CREATE TABLE `carrinho` (
  `id` int(11) NOT NULL,
  `product` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`product`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(155) NOT NULL,
  `description` varchar(155) NOT NULL,
  `price` float NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `img`) VALUES
(1, 'Katana ZERO', 'Katana ZERO é um estiloso jogo de plataforma e ação neo-noir em uma velocidade eletrizante e combates com morte instantânea. Ataque, corra e manipule o tem', 39.99, 'imgs\\katana-zero.jpg'),
(2, 'Stardew Valley', 'Você herdou a antiga fazenda do seu avô, em Stardew Valley. Com ferramentas de segunda-mão e algumas moedas, você parte para dar início a sua nova vida. Se', 24.99, 'imgs\\stardew.jpg'),
(3, 'Street Fighter™ 6', 'Aí vem o mais novo desafiante da Capcom! Street Fighter™ 6 será lançado no mundo inteiro em 2 de junho de 2023 e representa a próxima evolução da série Str', 199.99, 'imgs\\sf6.png'),
(4, 'Raft', 'Raft™ lança você e seus amigos em uma aventura oceânica épica! Sozinhos ou juntos, os jogadores lutam para sobreviver a uma viagem perigosa através de um v', 29.99, 'imgs\\raft.jpg'),
(5, 'Overcooked! 2', 'O Overcooked voltou trazendo mais caos para a cozinha! Volte para o Reino da Cebola e monte sua equipe de chefs em um jogo cooperativo local ou on-line par', 49.99, 'imgs\\overcooked.jpg'),
(6, 'The Crew™ 2', 'Seja bem-vindo a Motornation! Enfrente desafios por terra, céu e mar e sinta a liberdade sem limites do nosso grande e belo mundo aberto recriado! Conquist', 149.99, 'imgs\\the-crew.jpg'),
(7, 'Hotline Miami 2: Wrong Number', 'Hotline Miami 2: Wrong Number é a conclusão brutal da saga Hotline Miami, tendo como pano de fundo uma escalada de violência e vingança pelo sangue derrama', 32.99, 'imgs\\hotline-miami-2.jpg'),
(8, 'Dead Cells', 'Dead Cells é um rogue-lite de ação em plataforma estilo Metroidvania. Você vai explorar um castelo extenso e em constante mutação, considerando que consiga', 47.49, 'imgs\\dead_cells.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user`
--

CREATE TABLE `user` (
  `email` varchar(155) NOT NULL,
  `password` varchar(155) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `user`
--

INSERT INTO `user` (`email`, `password`) VALUES
('test', 'aaaa'),
('', ''),
('', ''),
('aa', 'zz'),
('', ''),
('', ''),
('user', 'aasdfads'),
('fdasafdfdsa', 'saasas'),
('fdsafad', 'zczcvxvczzc'),
('dfsadfazzzz', 'cvxxcvvcxzzzzzzz');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `carrinho`
--
ALTER TABLE `carrinho`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `carrinho`
--
ALTER TABLE `carrinho`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
