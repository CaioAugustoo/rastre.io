import { useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../../Helper/Loading";
import Button from "../../../components/UI/Button";
import { Container } from "../../../styles/global";
import * as S from "./styles";

import useFetch from "../../../hooks/useFetch";

import { GET_ORDER_STATUS } from "../../../services/api";

const OrderStatus = ({ code }) => {
  const { request, data, loading } = useFetch();

  useEffect(() => {
    const { endpoint, options } = GET_ORDER_STATUS(code);
    request(endpoint, options);
  }, [request, code]);

  if (loading) return null;
  return (
    <Container>
      <S.Wrapper>
        <S.OrderStatusWrapper>
          <S.OrderStatusHeader>
            <h5>Status</h5>
            <h5>Movimentação</h5>
          </S.OrderStatusHeader>
          {data?.data?.events?.map((status, index) => (
            <S.OrderStatus key={index}>
              <div>
                <S.OrderStatusTitle>{status.events}</S.OrderStatusTitle>
                <S.OrderStatusTime>
                  <S.Time>{new Date(status.date).toLocaleDateString()}</S.Time>
                  <S.Time>{new Date(status.date).toLocaleTimeString()}</S.Time>
                </S.OrderStatusTime>
              </div>

              <div>
                {status.tag === "movement" && (
                  <S.OrderStatusMovementTitle>
                    Em trânsito para {status.destination_local} -{" "}
                    {status.destination_city} - {status.uf}
                  </S.OrderStatusMovementTitle>
                )}
                <S.OrderStatusSubtitle>
                  {status.local} - {status.city}/{status.uf}
                </S.OrderStatusSubtitle>
              </div>
            </S.OrderStatus>
          ))}
        </S.OrderStatusWrapper>
        <Link to="/">
          <Button>Nova consulta</Button>
        </Link>
      </S.Wrapper>
    </Container>
  );
};

export default OrderStatus;
