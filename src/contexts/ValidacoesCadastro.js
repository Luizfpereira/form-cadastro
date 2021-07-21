import React from 'react';
import { validarSenha } from '../models/cadastro';

const ValidacoesCadastro = React.createContext(
    { cpf: semValidacao, senha: semValidacao, nome: semValidacao}
);

function semValidacao(dados){
    return {valido: true, texto:""}
}
export default ValidacoesCadastro;