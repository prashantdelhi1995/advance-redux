import Cart from "./components/Cart/Cart";
import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-action";
import { useRef } from "react";
import { fetchCartData } from "./store/cart-action";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  
  let isInitial = useRef(true);
  useEffect(()=>{
    dispatch(fetchCartData())

  },[dispatch])
  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    dispatch(sendCartData(cart));
   
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
