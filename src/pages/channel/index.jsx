import { Link } from "react-router-dom";
import ChannelPics from "../../../public/Cover.png"
import { Icons } from "../../assets/icons";
import { channelLinks, channelLogo } from "../../store/channels";
import ChHome from "./chHome";

const ChannelPages = () => {
    return (
        <div className='channel'>
            <div className='channel__img'>
                <img src={ChannelPics} alt='' />
            </div>
            <div className="channel__info">
                {channelLogo.map(item => (
                    <>
                    <div className="channel__logo">

                        <div className="channel__logo_img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        
                    <span className="channel__logo_title">
                    {item.title}
                    </span>
                    <span className="channel__logo_text">
                        {item.text}
                    </span>
                    </div>
                    <div className="channel__notification">
                        <Icons.natification/>
                    </div>
                        
                        <button className="channel__btn">Subscribe 2.3m</button>

                        <div className="channel__home">
                    {channelLinks.map(item => (
                        <Link key={item.id}
                        to="/"
                        className="channel__links">
                            {item.title}
                        </Link>
                    ))}
                     <Icons.searchIcon className="channel__search"/>
                        </div>
                       <ChHome/> 
                    </>
                ))}
            </div>
        </div>
    );
};

export default ChannelPages;
