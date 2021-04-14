import styled from "styled-components";

export const OrderStatusHeader = styled.header`
  border-bottom: 1px solid #e3e3e6;
  padding: 10px 30px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    padding: 5px 20px;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text-secondary-color);
  }
`;

export const Wrapper = styled.section`
  margin: 20rem auto 10rem auto;
  max-width: 90rem;

  button {
    display: block;
    margin: 90px auto 0 auto;
  }
`;

export const OrderStatusWrapper = styled.ul`
  margin: 0 auto;
  width: 100%;
  background: var(--full-white);
  box-shadow: var(--primary-shadow);
  border-radius: 8px;
  overflow-y: auto;
  max-height: 50rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a1a1a1;
    border-radius: 10px;
  }
`;

export const OrderStatus = styled.li`
  background: var(--full-white);
  padding: 20px 30px;
  display: grid;
  grid-gap: 20px;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  color: var(--text-secondary-color);

  @media (max-width: 900px) {
    padding: 20px;
  }

  &:nth-child(even) {
    background-color: #f3f3f4;
  }
`;

export const OrderStatusTitle = styled.h5`
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--text-secondary-color);
`;

export const OrderStatusTime = styled.div`
  display: flex;
`;

export const Time = styled.p`
  margin: 3px 5px 0px 0px;
  font-size: 1.2rem;
  color: var(--text-secondary-color);
`;

export const OrderStatusMovementTitle = styled.h5`
  font-size: 1.4rem;
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const OrderStatusSubtitle = styled.p`
  font-size: 1.2rem;
`;

export const OrderNotFound = styled.h4`
  font-weight: 500;
  margin: 30px;
  font-size: 1.6rem;
`;
