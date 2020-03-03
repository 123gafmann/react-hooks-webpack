import React, {useState} from 'react';
import useSearchGiphy from "./use-search-giphy";


const SearchGiphy = () => {
    const [query, setQuery] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [isLoading, stickers] = useSearchGiphy(searchKey);

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchKey(query);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search for Gifs!" />
                <button type="submit">Search</button>
                {isLoading? <h1>loading...</h1> : 
                stickers.map(item => {
                    return(<img src={item} />);
                })}
            </form>
        </div>
    )
}

export default SearchGiphy;