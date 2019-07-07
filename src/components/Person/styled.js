import styled from 'styled-components';

export const PersonContainer = styled.div`
  h4 {
    margin: 6px 0px;
  }
`;

export const Image = styled.img`
  max-width: 200px;
  width: 160px;
  ${({ gray }) => gray && 'filter: grayscale(1);'}
  transition: width 1s ease-in-out, filter 1s ease;
  &.show {
    width: 200px;
  }
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
