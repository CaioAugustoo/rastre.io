import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/global";

import HomePage from "./pages/Home";
import OrderPage from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rastreio/:code" element={<OrderPage />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
