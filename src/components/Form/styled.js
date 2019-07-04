import styled from "styled-components";

export const Input = styled.input.attrs({
  placeholder: "Usuário do github..."
})`
  padding: 10px 12px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border: 1px solid gray;
  outline: none;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 6px 12px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border: 1px solid gray;
  outline: none;
  background: royalblue;
  color: white;
  font-weight: bold;
  margin-left: -2px;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`;
