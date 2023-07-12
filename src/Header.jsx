
import React, { useState,useEffect} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { useStateValue } from "./StateProvider";
//import { auth } from './firebaseConfig'


function Header() {  
  const [{ basket, user }, dispatch] = useStateValue();
  const [login,setlogin]=useState("Sign in")
  useEffect(()=>{
      let isLogin =user?"Logout":"Sign in"
      setlogin(isLogin)
  },[user])
  
  return (
    <div className="header">
      
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>


      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
          <PersonIcon/>
            <span className="header__optionLineTwo">{login}</span>
          </div>
        </Link>
        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__option2">& Orders</span>
          </div>
        
        
      <Link to="/">
        <div className="header__option">
          <HomeIcon/>
          <span className="header__optionLineTwo">Home</span>
        </div>
      </Link>
        
          <div className="header__optionBasket">
          <Link to="/cart"><ShoppingCartOutlinedIcon sx={{color: "white",fontSize: 33}}/></Link>
            <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;