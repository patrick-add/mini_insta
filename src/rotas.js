const express = require('express')
const usuarios = require('./controladores/usuarios')
const login = require('./controladores/login')
const verificaLogin = require('./filtros/verificaLogin');
const { novaPostagem } = require('./controladores/postagens');

const rotas = express();

// cadastro de usuario 
rotas.post('/cadastro', usuarios.cadastrarUsuario);

// login 
rotas.post('/login', login.login)

// filtro para verificar usuario logado
rotas.use(verificaLogin);

// obter e atualizar perfil do usuario logado
rotas.get('/perfil', usuarios.obterPerfil)
rotas.put('/perfil', usuarios.atualizarPerfil)

// postagens
rotas.post('/postagem', novaPostagem)

module.exports = rotas;