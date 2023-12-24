import { Link } from "react-router-dom";
import { recomData } from "../../../store/recom";

const Recommend = () => {
    return (
        <div className='recom'>
            <h1 className="recom__title">Recommended</h1>
            <div className="recom__list">
                {
                    recomData.map(item => (
                        <Link to={"/video"} className="recom__item" key={item.id}>
                            <div className="recom__img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="recom__time">
                                <h3>{item.time}</h3>
                            </div>
                            <h1 className="recom__title">{item.title}</h1>
                            <div className="recom__info">
                                <span>{item.followers} {item.date}</span>
                                <span className="recom__username">{item.username}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Recommend;
