import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import Footer from "../../components/footer/footer.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as Logo} from "./../../assets/crown.svg";
import CartDropdown from './../../components/cart-dropdown/cart-dropdown.component';
import { NavigationContainer, LogoContainer, LinksContainer, LinkContainer } from "./navigation.styles";



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
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo className="logo"/>
                </LogoContainer>
                
                <LinksContainer>
                    <LinkContainer to='/shop'>SHOP</LinkContainer>
                    {
                        currentUser ? (<LinkContainer as='span' onClick={signOutHandler}>SIGN OUT</LinkContainer>): (<LinkContainer to='/auth'>SIGN IN</LinkContainer>)
                    }
                    <CartIcon />
                    
                </LinksContainer>
                

                {showCheckout && <CartDropdown/>  /** short circuit operator && */} 

                {/*<div className="nav-links-container">
                    <Link className="nav-link" to='/auth'>SIGN IN</Link>
            </div>             */}
            
            </NavigationContainer>

            <Outlet/>
            <Footer/>
        </div>
      </>
    );
  }

  export default Navigation;