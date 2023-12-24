import { Icons } from "../assets/icons";

const Search = () => {
    return <div className='search'>
        <input type="text"  placeholder="Search"/>
        <Icons.searchIcon/>
        
    </div>;
};

export default Search;
