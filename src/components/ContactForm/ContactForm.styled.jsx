import styled from 'styled-components';

export const Conteiner = styled.div`
width: 400px;
padding: 10px;
margin: 0 auto;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
padding: 20px 30px;
padding-bottom: 25px;
border-radius: 5px;
margin-bottom: 35px;
box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
border-radius: 10px;
background-color: white;

`

export const Input = styled.input`
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
border: 1px solid #ccc;
padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #f2f2f2;
  margin-bottom:15px;
  margin-left:10px;
  color: #333;
  &:focus 
    border-bottom: 2px solid #4CAF50;
`

export const ButtonAdd = styled.button`
padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

&:hover 
  background-color: #45a049;`