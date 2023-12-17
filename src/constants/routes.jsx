import Arrows from "../pages/arrows";
import Channel from "../pages/channel";
import FavouritePage from "../pages/favourite";
import Game from "../pages/game";
import HistoryPage from "../pages/history";
import HomePage from "../pages/home";
import LibraryPage from "../pages/library";
import Like from "../pages/like";
import Music from "../pages/music";
import Show from "../pages/show";
import SubsPage from "../pages/subs";
import TrendPage from "../pages/trending";
import WatchPage from "../pages/watch";
import { Setting } from "./menuBar";

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
    {
        id: 8,
        path: "/favourite",
        element: <FavouritePage />,
    },
    {
        id: 9,
        path: "/like",
        element: <Like />,
    },
    {
        id: 10,
        path: "/music",
        element: <Music />,
    },
    {
        id: 11,
        path: "/game",
        element: <Game />,
    },
    {
        id: 12,
        path: "/show",
        element: <Show />,
    },
    {
        id: 13,
        path: "/settings",
        element: <Setting />,
    },
    {
        id: 14,
        path: "/arrows",
        element: <Arrows />,
    },
];
