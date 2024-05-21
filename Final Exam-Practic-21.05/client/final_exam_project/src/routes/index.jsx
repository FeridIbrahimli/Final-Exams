import { element } from "prop-types"
import Home from "../pages/Home"
import About from "../pages/About"
import Offer from "../pages/Offer"
import Contact from "../pages/Contact"
import Gallery from "../pages/Gallery"
import News from "../pages/News"
import Menu from "../pages/Menu"
import NotFound from "../pages/NotFount"
import MainRoot from "../pages/MainRoot"

export const ROUTES = [
    {
        element: <MainRoot/> ,
        path: "/" ,
        children: [
           {
            index: true ,
            element: <Home/>
           },
           {
            path: "/about",
            element: <About/>
           },
           {
            path: "/offer",
            element: <Offer/> 
           },
           {
            path: "/menu",
            element: <Menu/> 
           },
           {
            path: "/news",
            element: <News/> 
           },
           {
            path: "/gallery",
            element: <Gallery/>
           },
           {
            path: "/contact",
            element: <Contact/> 
           },
           {
            path: "*",
            element: <NotFound/> 
           }
        ]
    }
]