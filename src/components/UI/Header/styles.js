import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.header`
  width: 100%;
  padding: 15px 0;

  background: var(--full-white);
  box-shadow: var(--primary-shadow);

  position: fixed;
  top: 0;
`;

export const Code = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-secondary-color);
`;
