import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1.5rem;
`;

export const Box = styled.div`
  padding: 30px;
  background: var(--full-white);
  max-width: 400px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-radius: 6px;

  &:hover {
    box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.05);
  }
`;

export const Error = styled.p`
  font-size: 1.3rem;
  color: red;
  margin-bottom: 15px;
`;
