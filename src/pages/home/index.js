import React, { useState } from "react";
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';


export default function App(props) {
  const navegate = useNavigate();
  const [ usuario, setUsuario ] = useState("");
  const [ erro, setErro ] = useState(false); //estado de erro
  const [ vazio, setVazio ] = useState(false); //repositorios vazio

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => { //axios.get para requisição 
      const repositories = response.data;
      const repositoriesName = []; //criei nova variavel para receber array
      repositories.map((repository) => { //leva só o nome dos repositórios pro repsitoriesName, aou inves de toda a informação do usuario
        return repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName)); //armazena a array com o nome dos repositorios. JOSON.stringfy() tranforma em string
      setErro(false);
      if (repositoriesName.length !== 0){
        navegate('/repositories');
      }else {
        navegate('/');
        setVazio(true);
      }
    })
      .catch(err =>
        setErro(true)
      )
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} 
        onChange={e => {setUsuario(e.target.value); setErro(false); setVazio(false)}} />
        <S.Button type="button" onClick={handlePesquisa} > Pesquisar </S.Button>

        { erro ? <S.ErrorMsg>Ocorreu um erro. Tente  Novamente.</S.ErrorMsg> : ''}
        { vazio ? <S.ErrorMsg>Repositório vazio.</S.ErrorMsg> : ''}
     
      </S.Content>
    </S.HomeContainer>
  );
}

// ternario ? para mensagem de erro