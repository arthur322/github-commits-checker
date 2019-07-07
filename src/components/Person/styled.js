import styled, { keyframes } from 'styled-components';

export const PersonContainer = styled.div`
  h4 {
    margin: 6px 0px;
  }
`;

const grow = keyframes`
  from {
    opacity: 0;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Image = styled.img`
  max-width: 200px;
  width: 200px;
  border-radius: 15px;
  transition: filter 1s ease;
  animation: 1s ${grow} ease-out;
  ${({ gray }) => gray && 'filter: grayscale(1);'}
`;

export const CloseButton = styled.button.attrs({
  title: 'Remover'
})`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 26px;
  height: 26px;
  border: none;
  background: red;
  color: white;
  z-index: 10;
  display: none;
`;

export const Container = styled.div`
  position: relative;

  &:hover ${CloseButton} {
    display: block;
  }
`;
