import { Link } from "react-router-dom";
import { favariteDate } from "../../../store/video-data";

const FovariteVideos = () => {
    return (
        <div className='favarit'>
            <div className='favarite__header'>
                <img
                    src={
                        "https://sportishka.com/uploads/posts/2022-11/1667564038_1-sportishka-com-p-gollandiya-dostoprimechatelnosti-krasivo-1.jpg"
                    }
                    alt='avatar'
                />

                <h1>Dollie Blair</h1>
            </div>
            <div className='favarite__main'>
                <div className='favarite__list'>
                    {favariteDate.map((item) => (
                        <Link to={"/video"} className='favarite__list__item'>
                            <div className='favarite__img'>
                                {<img src={item.img} alt={item.title} />}
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
