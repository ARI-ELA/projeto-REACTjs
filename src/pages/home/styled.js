import styled from 'styled-components';

export const HomeContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background: linear-gradient(to right, #ee9ca7, #ffdde1);
`;

export const Content = styled.div`
diplay: flex;
justify-content: center;
align-items: center;
padding: 100px;
border-radius: 15px;
background: white;
`;

export const Input = styled.input`
border: 1px solid #9e4168;
height: 2.5rem;
padding: 0 .5rem;
border-radius: .25rem 0 0 .25rem;
color: #9e4168;

&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`;

export const Button = styled.button`
border: 1px solid #9e4168;
height: 2.5rem;
background: #9e4168;
color: #fff;
border-radius: 0 .25rem .25rem 0;

&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`;

export const ErrorMsg = styled.span`
display: block;
font-size: 0.7rem;
color: red;
font-weight: 600;
margin-top: 1rem;
`;