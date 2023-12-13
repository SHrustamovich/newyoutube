import { recomData } from "../../../store/recom";

const Recommend = () => {
    return (
        <div className='recom'>
            <h1>Recommended</h1>
            <div className="recom__list">
                {
                    recomData.map(item => (
                        <div className="recom__item" key={item.id}>
                            <div className="recom__img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h1 className="recom__title">{item.title}</h1>
                            <div className="recom__info">
                                <span>{item.followers} {item.date}</span>
                                <span>{item.username}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Recommend;
