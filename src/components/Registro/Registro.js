import React, { useState } from "react";
import Axios from "axios";

export default function Registro() {
  const [nomeOng, setNomeOng] = useState("");
  const [enderecoOng, setEnderecoOng] = useState("");
  const [telefoneOng, setTelefoneOng] = useState(0);
  const [emailOng, setEmailOng] = useState("");
  const [senhaOng, setSenhaOngX] = useState("");

  const registroOng = () => {
    Axios.post("http://localhost:3000/registroOng", {
      nomeOng: nomeOng,
      enderecoOng: enderecoOng,
      telefoneOng: telefoneOng,
      emailOng: emailOng,
      senhaOng: senhaOng
    }).then(() => {
      console.log('Cadastrado com sucesso!');
    });
  }
 
  return (
    <div className="Registro">

      <div className="inputs">
        <label>Nome da Organização</label>
        <input type="text" onChange={(event) => (setNomeOng(event.target.value))} /> 

        <label>Endereço</label>
        <input type="text" onChange={(event) => (setEnderecoOng(event.target.value))} /> 

        <label>Telefone</label>
        <input type="number" onChange={(event) => (setTelefoneOng(event.target.value))} /> 

        <label>Email</label>
        <input type="email" onChange={(event) => (setEmailOng(event.target.value))} />

        <label>Senha</label>
        <input type="email" id='Senha' onChange={(event) => (setSenhaOng(event.target.value))} />

        <button type="submit" onClick={registroOng}> Registrar </button>
      </div>
      
    </div>
  );
}
