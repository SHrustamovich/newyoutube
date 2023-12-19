import { Link } from "react-router-dom";
import { cars } from "../../../store/cars";

const DrinkCompanent = () => {
    return (
        <div className='favarit'>
            <div className='favarite__header'>
                <img
                    src={
<<<<<<< HEAD
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0wspC0tdJVSIyDCoj-L97EVsBHRhtuPjlA&usqp=CAU"
=======
                        "https://static1.tgstat.ru/channels/_0/1c/1c5b44d687b889b1e39237b1dbaff800.jpg"
>>>>>>> 16e5b566cbd6c0e19210dcc04904a97e0c115fad
                    }
                    alt='avatar'
                />

<<<<<<< HEAD
                <h1>Cars & New Technologies</h1>
=======
                <h1>Leah Berry</h1>
>>>>>>> 16e5b566cbd6c0e19210dcc04904a97e0c115fad
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
    );
};

export default DrinkCompanent;
