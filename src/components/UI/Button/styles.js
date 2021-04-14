import styled, { css } from "styled-components";

const WrapperModifiers = {
  full: () => css`
    width: 100%;
  `,
};

export const Wrapper = styled.button`
  ${({ full }) => css`
    padding: 11px 30px;
    color: var(--full-white);
    background: var(--brand-primary-color);
    border: none;
    border-radius: 6px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0px 4px 15px rgba(137, 18, 255, 0.1);
      transform: scale(1.02);
    }

    ${!!full && WrapperModifiers.full()};
  `}
`;
