import App from "../App.tsx";
import {createBrowserRouter} from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: '',
        element: <App />
    },
    {
        path: 'saving/new',
        element: <App />
    }
])


