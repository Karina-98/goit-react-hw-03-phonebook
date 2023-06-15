import styled from 'styled-components';

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

export const Conteiner = styled.div`
width: 400px;
padding: 10px;
margin: 0 auto;
display: flex;
flexdirection: column;
alignItems: center;
`
