import DrinkCompanent from "./companents/drink";
import FovariteVideos from "./companents/favarite-videos-block";
import Recommend from "./companents/recommend";

const HomePage = () => {
    return <div className="home">
        <FovariteVideos />
        <Recommend />
        <DrinkCompanent/>
    </div>;
};

export default HomePage;
