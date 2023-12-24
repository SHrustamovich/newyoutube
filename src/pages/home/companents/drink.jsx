import { Link } from "react-router-dom";
import { cars } from "../../../store/cars";

const DrinkCompanent = () => {
    return (
        <div className='favarit'>
            <div className='favarite__header'>
                <img
                    src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpMQ0UjuN63hb9KkHPO4Cdvr0Ea_KnucCbw&usqp=CAU"
                    }
                    alt='avatar'
                />

                <h1>Cars & New Technologies</h1>
                    <button className="favarite__btn">Subscribe 2.3m</button>
            </div>
            <div className='favarite__main'>
                <div className='favarite__list'>
                    {cars.map((item) => (
                        <Link
                            to={"/video"}
                            className='favarite__list__item'
                            key={item.id}>
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
    )
}

export default DrinkCompanent;
