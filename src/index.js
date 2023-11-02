import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import './_settings/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from "./App"
import router from "./router/router"


const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <RouterProvider router={router} />
)