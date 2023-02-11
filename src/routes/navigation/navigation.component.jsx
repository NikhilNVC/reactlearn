import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import { ReactComponent as Logo} from "./../../assets/crown.svg";

import './navigation.styles.scss';

const Navigation = () => {
    return(
      <>
        <div>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                </div> 
                <div className="nav-links-container">
                    <Link className="nav-link" to='/signin'>SIGN IN</Link>
                </div>             
            
            </div>

            <Outlet/>
            <Footer/>
        </div>
      </>
    );
  }

  export default Navigation;