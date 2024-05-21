import React from 'react'
import { Link } from "react-router-dom"
import styles from "./index.module.css"

const Header = () => {
  return (
    <>
     <div style={{width:"50%", margin:"0 auto"}} className="container">
      <header>
        <div className={styles.navbar}>
          <div className="logo">
            <h2><Link style={{fontWeight:"400"}} >EATWELL</Link></h2>
          </div>
          <div className="links">
            <ul style={{display:"flex", gap:"40px"}} >
            <li><Link to={"/"} >Home</Link></li>
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