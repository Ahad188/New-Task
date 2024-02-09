import { Outlet } from "react-router-dom"
import Footer from "../Component/Footer/Footer"
import Header from "../Component/Header/Header"

 

const Layout = () => {
  return (
    <div>
     <Header></Header>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  )
}

export default Layout