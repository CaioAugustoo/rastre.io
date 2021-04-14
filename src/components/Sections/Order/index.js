import { useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/UI/Button";
import { Container } from "../../../styles/global";
import * as S from "./styles";

import useFetch from "../../../hooks/useFetch";

import { GET_ORDER_STATUS } from "../../../services/api";
import Loading from "../../Helper/Loading";

const OrderStatus = ({ code }) => {
  const { request, data, loading } = useFetch();

  useEffect(() => {
    const { endpoint, options } = GET_ORDER_STATUS(code);
    request(endpoint, options);
  }, [request, code]);

  if (loading) return <Loading />;
  return (
    <Container>
      <S.Wrapper>
        <div>
          <S.SectionTitle>Informações do rastreio</S.SectionTitle>
          <S.OrderStatusHeader>
            <h3>Status</h3>
            <h3>Movimentação</h3>
          </S.OrderStatusHeader>
          <S.OrderStatusWrapper>
            {!data?.success && (
              <S.OrderNotFound>{data?.message}</S.OrderNotFound>
            )}
            {data?.data?.events
              ?.sort((a, b) => (a.date < b.date ? 1 : -1))
              .map((status, index) => (
                <S.OrderStatus key={index}>
                  <div>
                    <S.OrderStatusTitle>{status.events}</S.OrderStatusTitle>
                    <S.OrderStatusTime>
                      <S.Time>
                        {new Date(status.date).toLocaleDateString()}
                      </S.Time>
                      <S.Time>
                        {new Date(status.date).toLocaleTimeString()}
                      </S.Time>
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
        </div>
        <Link to="/" title="Nova consulta">
          <Button>Nova consulta</Button>
        </Link>
      </S.Wrapper>
    </Container>
  );
};

export default OrderStatus;
