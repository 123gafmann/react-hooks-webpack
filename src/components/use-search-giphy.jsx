import {useState, useEffect} from 'react';

const api_key = "tP8kiwAh8f3tvtBAJJshGxSpn7zld7WT";
const useSearchGiphy = (searchKey) => {
    const [loading, setLoading] = useState(false);
    const [stickers, setStickers] = useState([]);

    useEffect(() => {
        try
        {
            const fetchGiphy = async () => {
                setLoading(true);
                const response = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${api_key}&q=${searchKey}&limit=20`);
                const json = await response.json();
                setStickers(json.data.map(item => item.images.preview_gif.url));
            }
            if(searchKey !== "") {
                fetchGiphy();
            }
        }
        catch(err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    },[searchKey]);

    return[loading, stickers];
}

export default useSearchGiphy;