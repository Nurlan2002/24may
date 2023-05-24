
import Add from "../pages/Add";
import DetailPage from "../pages/DetailPage";
import EditPage from "../pages/EditPage";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES = [
    {
        path: '',
        element: <MainRoot />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/add',
                element: <Add />
            },
            {
                path: '/country/:id',
                element: <DetailPage />
            },
            {
                path: '/country/edit/:id',
                element: <EditPage />
            }
        ]
    }
]