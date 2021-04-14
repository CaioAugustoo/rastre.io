import Header from "../../components/UI/Header";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const { code } = useParams();
  console.log(code);

  return (
    <>
      <Header code={code} />
      <div>dasdsa</div>
    </>
  );
};

export default OrderPage;
