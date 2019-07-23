import styled, { keyframes } from "styled-components";

export const PersonContainer = styled.div`
  @media (max-width: 600px) {
    width: 50%;
  }
  h4 {
    margin: 6px 0px;
  }
`;

export const PersonWrapper = styled.div`
  margin: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
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

const leaving = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-500%);
  }
`;

export const Image = styled.img`
  max-width: 200px;
  width: 100%;
  border-radius: 15px;
  transition: filter 1s ease;
  animation: 1s ${grow} ease-out;
  ${({ gray }) => gray && "filter: grayscale(1);"}

  &.leaving {
    animation: 1s ${leaving} cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
`;

export const CloseButton = styled.button.attrs({
  title: "Remover"
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
  max-width: 200px;

  &:hover ${CloseButton} {
    display: block;
  }
`;
