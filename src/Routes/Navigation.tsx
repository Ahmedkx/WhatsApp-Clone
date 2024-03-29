import { Routes as RouterRoutes, Route } from "react-router-dom"
import { Routes } from "./Routes"

// Pages
import Login from "../Pages/Login/Login"
import Home from "../Pages/Home/Home"
import Background from "../Components/Background/Background"
import Register from "../Components/Register/Register"

export default function Navigation() {
    return (
        <RouterRoutes>
            <Route element={<Background />}>
                <Route path={Routes.login} element={<Login />} />
                <Route path={Routes.register} element={<Register />} />
                <Route path={Routes.home} element={<Home />} />
            </Route>
        </RouterRoutes>
    )
}
