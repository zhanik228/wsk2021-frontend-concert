import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import MainPage from "../pages/MainPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/booking/:id'
            }
        ]
    }
])

export default router