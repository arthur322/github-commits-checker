import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0px 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
`;

export const Wrapper = styled.div`
  ${({ padding }) => (padding ? `padding: ${padding};` : "padding: 0;")};
  ${({ margin }) => (margin ? `margin: ${margin};` : "margin: 0;")};
`;
