import Header from "../../components/UI/Header";
import { useParams } from "react-router-dom";

import OrderStatus from "../../components/Sections/Order";

const OrderPage = () => {
  const { code } = useParams();

  return (
    <>
      <Header code={code} />
      <OrderStatus code={code} />
    </>
  );
};

export default OrderPage;
