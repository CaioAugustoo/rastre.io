import * as S from "./styles";

const Input = ({ type, placeholder, ...props }) => {
  return <S.Wrapper type={type} placeholder={placeholder} {...props} />;
};

export default Input;
