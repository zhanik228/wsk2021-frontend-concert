import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import MainPage from "../pages/MainPage"
import BookingPage from "../pages/BookingPage"

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
                path: '/booking/concert/:concertId/show/:showId',
                element: <BookingPage />
            }
        ]
    }
])

export default router