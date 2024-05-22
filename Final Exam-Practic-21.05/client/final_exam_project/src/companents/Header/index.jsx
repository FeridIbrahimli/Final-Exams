import React from 'react'
import { Link } from "react-router-dom"
import styles from "./index.module.css"

const Header = () => {
  return (
    <>
     <div style={{width:"100%", margin:" 0 auto"}} className="container">
      <header>
        <div className={styles.navbar}>
          <div className="logo">
            <h3><Link style={{fontWeight:"400", color:"white", letterSpacing:"2px"}} >EATWELL</Link></h3>
          </div>
          <div className="links">
            <ul style={{display:"flex", gap:"60px",  letterSpacing:"2px"}} >
            <li><Link style={{color:"white"}} to={"/"} >Home</Link></li>
            <li><Link to={"/about"} >About</Link></li>
            <li><Link to={"/offer"} >Offer</Link></li>
            <li><Link to={"/menu"} >Menu</Link></li>
            <li><Link to={"/news"} >News</Link></li>
            <li><Link to={"/gallery"} >Gallery</Link></li>
            <li><Link to={"/contact"} >Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>
     </div>
    </>
  )
}

export default Header