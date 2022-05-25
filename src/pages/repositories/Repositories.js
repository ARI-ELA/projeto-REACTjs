import React, { useEffect, useState } from "react";
import * as S from './styled';
import { useNavigate } from 'react-router-dom';



function Repositories() {
    const navegate = useNavigate();
    const [ repositories, setRepositories ] = useState([]);

    //levando os repositorios do usuario pra pagina de repositorios
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            //UTILIZAR useNavegate para redirecionar pra home ao atualizar
            navegate('/');
        }
      }, [navegate]);

    return(
        <S.Container>
            <S.Title> Repositórios </S.Title>
            <S.List>
                { repositories.map( repository => {
                    return (
                    <S.ListItem>Repositório: { repository } </S.ListItem>
                    )
                } )}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    );
}

export default Repositories;