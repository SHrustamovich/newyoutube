import { Icons } from "../assets/icons";

const Search = () => {
    return <div className='search'>
        <input type="text"  placeholder="search"/>
        <Icons.searchIcon/>
    </div>;
};

export default Search;
