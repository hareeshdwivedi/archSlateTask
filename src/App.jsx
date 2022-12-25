import "./App.css";
import Cart from "./components/Cart";
import CartPoster from "./components/CartPoster";
import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <HeaderTwo />
      <Cart />

      <div className="d-flex justify-content-evenly mt-5">
        <Main />
        <CartPoster />
      </div>
    </>
  );
}

export default App;
