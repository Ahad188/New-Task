import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import AllUser from "../Component/AllUser/AllUser";


const router = createBrowserRouter([
     {
          path:'/',
          element:<Layout></Layout>,
          children:[
               {
                    path:'/',
                    element:<Home></Home>
               },
               {
                    path:'/all-user',
                    element:<AllUser></AllUser>
               }
          ]
          
     }

]);
export default router;