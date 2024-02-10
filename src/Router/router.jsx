import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import AllUser from "../Component/AllUser/AllUser";
import SingleDetails from "../Component/SingleDetails/SingleDetails";


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
               },
               {
                    path:'/single-dt/:id',
                    element:<SingleDetails></SingleDetails>,
                    loader:({params})=>fetch(`https://dummyjson.com/users/${params.id}`)
               }
          ]
          
     }

]);
export default router;