import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({aoEnviar}) {
  const [nome, SetNome] = useState("");
  const [sobrenome, SetSobrenome] = useState("");
  const [cpf, SetCpf] = useState("");
  const [promocoes, SetPromocoes] = useState(true);
  const [novidades, SetNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()){
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
      }
    }}>
      <TextField
        id="nome"
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        label="Nome"
        variant="outlined"
        margin="normal"
        name="nome"
        fullWidth
        value={nome}
        onChange={(event) => {
          SetNome(event.target.value);
        }}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        name="sobrenome"
        fullWidth
        value={sobrenome}
        onChange={(event) => {
          SetSobrenome(event.target.value);
        }}
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        value={cpf}
        onChange={(event) => {
          SetCpf(event.target.value);
        }}
        onBlur={validarCampos}
        name="cpf"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
      />


      <FormControlLabel
        label="Promoções"
        control={<Switch
          onChange={(event) => {
            SetPromocoes(event.target.checked);
          }}
          name="promocoes"
          color="primary" 
          checked={promocoes}/>}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch 
          onChange={(event) => {
            SetNovidades(event.target.checked);
          }}
          name="novidades" 
          color="primary"
          checked={novidades} />}
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
