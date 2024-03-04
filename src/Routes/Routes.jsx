
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('news.json')
            },
            {
                path : '/news/:newsId',
                element : <NewsDetails></NewsDetails>
            },
            {
                path : '/about',
                element : <PrivateRoute> <About></About> </PrivateRoute>
            },
            {
                path : '/career',
                element : <PrivateRoute> <Career></Career> </PrivateRoute>
            },
            {
                path : '/dashboard',
                element : <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
        ]
    }
])

export default routes;