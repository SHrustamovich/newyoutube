import Channel from "../pages/channel";
import HistoryPage from "../pages/history";
import HomePage from "../pages/home";
import LibraryPage from "../pages/library";
import SubsPage from "../pages/subs";
import TrendPage from "../pages/trending";
import WatchPage from "../pages/watch";

export const routes = [
    {
        id: 1,
        path: "/",
        element: <HomePage />,
    },
    {
        id: 2,
        path: "/trend",
        element: <TrendPage />,
    },
    {
        id: 3,
        path: "/subs",
        element: <SubsPage />,
    },
    {
        id: 4,
        path: "/library",
        element: <LibraryPage />,
    },
    {
        id: 5,
        path: "/history",
        element: <HistoryPage />,
    },
    {
        id: 6,
        path: "/watch",
        element: <WatchPage />,
    },
    {
        id: 7,
        path: "/channel",
        element: <Channel />,
    },
];
