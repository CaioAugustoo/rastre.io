import { useParams } from "react-router-dom";

import Header from "../../components/UI/Header";
import OrderStatus from "../../components/Sections/Order";
import Head from "../../components/Helper/Head";

const OrderPage = () => {
  const { code } = useParams();

  return (
    <>
      <Header code={code} />
      <Head title={`Encomenda ${code}`} />
      <OrderStatus code={code} />
    </>
  );
};

export default OrderPage;
