import styled from 'styled-components';

export const List = styled.ul`
padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const ButtonDelete = styled.button`
padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 15px;

&:hover 
  background-color: #45a049;
`

export const ContactItem = styled.li`
margin-top:20px;

`