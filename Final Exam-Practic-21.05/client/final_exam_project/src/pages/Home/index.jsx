import React from 'react'
import styles from "./index.module.css"

const Home = () => {
  return (
    <>
      <main>
        <section>
          <div className={styles["home-div"]}>
            <div className={styles["text"]}>
              <h1 style={{fontSize:"80px", color:"white"}}>Welcome To EatWell</h1>
              <p style={{color:"darkGrey", padding:"20px 0", letterSpacing:"1px", fontSize:"20px"}}>Come and eat well with our delicious & healthy foods.</p>
              <button><h3 style={{fontWeight:"500"}}>Reservation</h3></button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home