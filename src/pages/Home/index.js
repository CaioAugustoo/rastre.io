import * as S from "./styles";

import Header from "../../components/UI/Header";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

import { Container } from "../../styles/global";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const validSearchOrder = /^[A-Z]{2}\d{9}[A-Z]{2}$/gm;

  function handleSearchOrder(submitEvent) {
    submitEvent.preventDefault();
    if (search.trim().length === 0 || !validSearchOrder.test(search)) {
      setError("Digite um código válido.");
    } else navigate(`/rastreio/${search}`);
  }

  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.Box>
            <S.Title>Rastrear encomenda</S.Title>
            <S.Description>
              Informe o código de rastreio abaixo para rastreamento
            </S.Description>
            <form onSubmit={handleSearchOrder}>
              <Input
                type="text"
                value={search}
                onChange={({ target }) => setSearch(target.value)}
                placeholder="EX: ON123456789BR"
                style={{ border: error ? "1px solid red" : "" }}
              />
              {!!error && <S.Error>{error}</S.Error>}
              {
                <Button full disabled={!search}>
                  Rastrear agora!
                </Button>
              }
            </form>
          </S.Box>
        </S.Wrapper>
      </Container>
    </>
  );
};

export default HomePage;
