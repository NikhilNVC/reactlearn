import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import Footer from "../../components/footer/footer.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as Logo} from "./../../assets/crown.svg";
import CartDropdown from './../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss';

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    const {showCheckout, setShowCheckout} = useContext(CartContext);

    const signOutHandler = async() => {
        await signOutUser();
        //setCurrentUser(null);

    }

    return(
      <>
        <div>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo className="logo"/>
                </Link>
                
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>): (<Link className="nav-link" to='/auth'>SIGN IN</Link>)
                    }
                    <CartIcon />
                    
                </div>
                

                {showCheckout && <CartDropdown/>  /** short circuit operator && */} 

                {/*<div className="nav-links-container">
                    <Link className="nav-link" to='/auth'>SIGN IN</Link>
            </div>             */}
            
            </div>

            <Outlet/>
            <Footer/>
        </div>
      </>
    );
  }

  export default Navigation;