import styled from "styled-components"

export const Caixa_principal = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle, rgba(25,25,25,1) 0%, rgba(0,0,0,1) 100%);
    align-items: center;
    justify-content: center;

`;

export const Todolist = styled.div`
    display: columns;
    background: radial-gradient(circle, rgba(71,71,71,1) 0%, rgba(38,38,38,1) 100%);
    border: black;
    
    padding: 60px;
    border-radius: 50px;
`;

 export const Itens = styled.ul`
   
    padding: 0px;


`;


export const Item = styled.li`
    color: black;
    list-style: none;
    font-size: 20px;
    background-color: #e6e6ff;
    border-radius: 10px;
    margin-top: 5px;
    padding: 5px;
    text-align: center;
    margin-top: 20px;
`;

export const Seletor = styled.input`
    border-radius: 20px;
    border: 2px solid rgba(209,211,212, 0.4);

`;

export const Button = styled.button`
    background-color: blue;
    cursor: pointer;
    margin-left: 40px;
    border-radius: 20px;
    font-weight: 10px;
    color: white;
    font-size: 15px;

`;
