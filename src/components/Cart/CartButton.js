import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const count= useSelector((state)=>state.cart.totalQuantity)
  const dispatch= useDispatch()
  function handleOnClick(){
    console.log("hii")
    dispatch(uiActions.toggle())
  }
  return (
    <button onClick={handleOnClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
