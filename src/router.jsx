import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ListDetail from "./pages/ListDetail";
import Lists from "./pages/Lists";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import { getList, getLists } from "./utilities/typicode";
import Loading from "./components/loading/Loading";
import { ErrorBoundary } from "./components/error/ErrorBoundary";
import Layout from "./Layout";
import { handleSubmit } from "./utilities/actions";
import Login from "./pages/Login";
import RequireAuth from "./components/requireauth/RequireAuth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "statements",
                element: <Lists />,
                loader: getLists,
            },
            {
                path: "secrets",
                element: (
                    <RequireAuth >
                        <ListDetail />
                    </RequireAuth>
                ),
                loader: getList,
            },
            {
                path: "signup",
                element: <Signup />,
                action: handleSubmit,
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export default router



