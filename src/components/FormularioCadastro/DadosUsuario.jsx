import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField
                value={email}
                onChange={(event) => {
                    event.preventDefault();
                    setEmail(event.target.value);
                }}
                id="email"
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                name="email" />
            <TextField
                value={senha}
                onChange={(event) => {
                    event.preventDefault();
                    setSenha(event.target.value);
                }}
                id="senha"
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                label="senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required 
                name="senha"/>
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosUsuario;