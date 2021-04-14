import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
`;

export const Wrapper = styled.header`
  width: 100%;

  background: var(--full-white);
  box-shadow: var(--primary-shadow);

  position: fixed;
  top: 0;
`;

export const Code = styled.h1`
  font-size: 1.5rem;
  padding: 11px 0;
  font-weight: 600;
  color: var(--text-secondary-color);
`;
