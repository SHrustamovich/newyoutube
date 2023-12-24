import { Link } from "react-router-dom";
import { favariteDate } from "../../../store/video-data";

const FovariteVideos = () => {
    return (
        <div className='favarite'>
            <div className='favarite__header'>
                <img
                    src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJNNh7a2Ux_Dmo9kmP07dcXLpKhyLk5AbKw&usqp=CAU"
                    }
                    alt='avatar'
                />

                <h1>Dollie Blair</h1>
            </div>
            <div className='favarite__main'>
                <div className='favarite__list'>
                    {favariteDate.map((item) => (
                        <Link to={"/video"} className='favarite__list__item' key={item.id}>
                            <div className='favarite__img'>
                                {<img src={item.img} alt={item.title} />}
                            </div>
                            <div className="favarite__time">
                                <h3>{item.time}</h3>
                            </div>
                            <h1 className='favarite__title'>{item.title}</h1>
                            <div className='favarite__info'>
                                <span>
                                    {item.followers} . {item.date}
                                </span>
                                <span>{item.username}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FovariteVideos;
