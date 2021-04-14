import * as S from "./styles";

const Button = ({ children, full = false, ...props }) => {
  return (
    <S.Wrapper full={full} {...props}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
