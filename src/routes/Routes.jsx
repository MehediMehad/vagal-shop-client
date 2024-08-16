import {  createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ProductList from "../pages/ProductList";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/registration',
            element:<Register></Register>
        },
        {
            path:'/products',
            element:<ProductList></ProductList>
        },
    ]
    }
])

export default router