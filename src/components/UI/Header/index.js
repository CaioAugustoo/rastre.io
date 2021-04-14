import { Link, useLocation } from "react-router-dom";

import * as S from "./styles";

import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import Button from "../Button";

import { Container } from "../../../styles/global";

const Header = ({ code }) => {
  const { pathname } = useLocation();

  return (
    <S.Wrapper>
      <Container>
        <S.Nav>
          <Link to="/">
            <Logo width="100" />
          </Link>
          {pathname === "/" && !code ? (
            <Button>Código fonte</Button>
          ) : (
            <S.Code>{code}</S.Code>
          )}
        </S.Nav>
      </Container>
    </S.Wrapper>
  );
};

export default Header;
