import { Outlet } from "react-router-dom"
import Header from "./templates/header/Header"

const App = () => {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default App