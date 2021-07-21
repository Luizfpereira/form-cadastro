import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({aoEnviar}) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar({cep, endereco, numero, estado, cidade});
        }}>
            <TextField
                value={cep}
                onChange={(event) => {
                    event.preventDefault();
                    setCep(event.target.value);
                }}
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                name="cep"
            />
            <TextField
                value={endereco}
                onChange={(event) => {
                    event.preventDefault();
                    setEndereco(event.target.value);
                }}
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                name="endereco"
            />
            <TextField
                value={numero}
                onChange={(event) => {
                    event.preventDefault();
                    setNumero(event.target.value);
                }}
                id="numero"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
                name="numero"
            />
            <TextField
                value={estado}
                onChange={(event) => {
                    event.preventDefault();
                    setEstado(event.target.value);
                }}
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                name="estado"
            />
            <TextField
                value={cidade}
                onChange={(event) => {
                    event.preventDefault();
                    setCidade(event.target.value);
                }}
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                name="cidade"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Cadastrar</Button>
        </form>
    );
}

export default DadosEntrega;