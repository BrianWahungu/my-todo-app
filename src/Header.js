import React from "react";
import "./Header.css";


function Header() {  
  return (
    <div className="header">
     
        <img
          className="header__logo"
          src="https://assets.materialup.com/uploads/66f90e03-d02a-4975-b66b-6ff73ff8923a/preview"
        
        /> 
          <h3>MyTodo</h3>


      <div className="header__nav">
      
          <div className="header__option">
            <h1> Brian Todo</h1>
            
          </div>  
      </div>
    </div>
  );
}

export default Header;