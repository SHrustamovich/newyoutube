import { Link } from "react-router-dom";
import {channelData, videos} from "../../../store/channels";


const ChHome = () => {
  return (
    <div>
      {channelData.map(item => (
        <Link to={"/video"} className="channel__link_item" key={item.id}>
          <div className="channel__link_img">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="channel__link_time">
                <h3>{item.time}</h3>
          </div>
          <div className="channel__link_texts">
          <h1 className="channel__link_title">{item.title}</h1>
          <p className="channel__link_text">{item.text}</p>
                    <div className="channel__link_info">
                    <span>{item.followers} {item.date}</span>
                </div>
          </div>
        </Link>
      ))}
      <h1 className="channel__heading">Margeret Phelps videos</h1>
      <div className="videos">
        
        {videos.map(item => (
        <Link to={"/video"} className="video__link" key={item.id}>
          <div className="video__link_img">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="video__link_time">
            <h3>{item.time}</h3>
          </div>
          <div className="video__link_texts">
            <h1 className="video__link_title">{item.title}</h1>
            <p className="video__link_text">{item.text}</p>
            <div className="video__link_info">
              <span>{item.follower} {item.date}</span>
              <span>{item.username}</span>
            </div>
          </div>
        </Link>
      ))}
      <h3 className="recom__channel">Recommended channel</h3>
      <div className="channels__recom_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6Hly-rLSEuor_g0CUPYQBozsnJaLcVe0WA&usqp=CAU" alt="Steve Jobs"/><p className="channels__recom_title">Steve Jobs</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwcrVaHi9-bDn6e4xXHHFWvqTYdkg38zTvA&usqp=CAU" alt="Mark Zukerbeg"/><p className="channels__recom_title">Mark Zukerbeg</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbq_PwpQReg1_JmXYvEwNL3BrgA9eMx1AAQ&usqp=CAU" alt="Mark Zukerbeg"/><p className="channels__recom_title">Bill Gates</p>
      </div>
                  
      </div>
    </div>

  )
}

export default ChHome;
