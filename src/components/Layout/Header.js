import {Fragment} from "react";
import HeaderCartButton from './HeaderCartButton';
import mealImg from '../../assets/crypto.jpeg';
import classes from './Header.module.css';


const Header = (props) => {
    return ( 
        <Fragment>
            <header className={classes.header}>
                <h1>Food Order App</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt='table full of food'></img>
            </div>
        </Fragment>
)};

export default Header;