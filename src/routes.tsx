import { createBrowserRouter } from "react-router-dom";
import { Home } from "./assets/pages/home";
import { Detail } from "./assets/pages/detail";
import { NotFound } from "./assets/pages/error";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/coin/:id',
                element: <Detail />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);

export default router;