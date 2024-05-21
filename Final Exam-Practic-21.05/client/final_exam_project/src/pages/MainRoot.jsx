import { Outlet } from "react-router-dom"
import Header from "../companents/Header"

const MainRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default MainRoot