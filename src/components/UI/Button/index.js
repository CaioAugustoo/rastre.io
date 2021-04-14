import * as S from "./styles";

const Button = ({ children, full = false }) => {
  return <S.Wrapper full={full}>{children}</S.Wrapper>;
};

export default Button;
