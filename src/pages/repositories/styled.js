import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
max-width: 991px;
margin: 0 auto;
background: linear-gradient(to right, #ee9ca7, #ffdde1);
padding: 15px;
border-radius: 15px;
font-family: sans-serif;
`;

export const Title = styled.h1`
text-align: center;
fonte-size: 2rem;
color: #9e4168;
`;

export const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`;

export const ListItem = styled.li`
margin: .5rm 0;
background: #9e4168;
color: #fff;
padding: .5rem;
margin: .5rem;
`;

export const LinkHome = styled(Link)`
display: block;
text-align: center;
margin: 2rem 25rem;
background-color: #9e4168;
padding: .5rem 0;
color: #fff;
text-decoration: none;
`;
