import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Icons } from "../assets/icons";
import { Setting, fmenuBar, menubar } from "../constants/menuBar";
import { routes } from "../constants/routes";
import Search from "./search";

const Root = () => {
    return (
        <div className='root'>
            <div className='root__menu'>
                <div className='root__logo'>
                    <Icons.burger />
                    <Link to='/'>
                        <Icons.logo />
                    </Link>
                </div>
                <div className='root__list'>
                    {menubar.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className='root__link'>
                            {item.icon} {item.title}
                        </NavLink>
                    ))}
                </div>
                <h3 className="root__s">Subscriptions</h3>
                <div className='root__listf'>
                    {fmenuBar.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className='root__linkF'>
                            <img src={item.img} alt={item.title} /> {item.title}
                        </NavLink>
                    ))}
                </div>
                <div className="root__setting">
                    {Setting.map(item => (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className='root__setting'>
                            <img src={item.img} alt={item.title} /> {item.title} 
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className='root__main'>
                <div className='root__header'>
                    <Search />
                    <div className='root__case'>
                        <Link to={"/"}>
                            <Icons.liveChatIcon />
                        </Link>
                        <Link to={"/"}>
                            <Icons.headerMenuIcon />
                        </Link>
                        <Link to={"/"}>
                            <Icons.natification />
                        </Link>
                        <div className='avatar'>
                            <img
                                src={
                                    "https://wallpapers.com/images/hd/man-face-american-actor-ian-somerhalder-ufjcvc6dhyyatwoo.jpg"
                                }
                                alt='avatar'
                            />
                        </div>
                    </div>
                </div>
                <div className='root__pages'>
                    <Routes>
                        {routes.map((item) => (
                            <Route
                                path={item.path}
                                key={item.id}
                                element={item.element}
                            />
                        ))}
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Root;
