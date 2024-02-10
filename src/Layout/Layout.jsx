import { Outlet } from "react-router-dom"
import Footer from "../Component/Footer/Footer"
import Header from "../Component/Header/Header"

 

const Layout = () => {
  return (
    <div>
     <Header></Header>
     <div className='min-h-[calc(100vh - 350px)] my-28'>
          <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </div>
  )
}

export default Layout