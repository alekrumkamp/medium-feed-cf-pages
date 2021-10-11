import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard/ArticleCard";

const fetchFeed = async () => {
    const response = await fetch('https://medium-feed.alekrumkamp.workers.dev')
    const responseJson = await response.json();
    return responseJson.data;
}

const Feed = () => {
    const [feed, setFeed] = useState('Loading feed...');
    useEffect( async () => {
        const rawFeed = await fetchFeed();
        setFeed(rawFeed
            .posts
            .map(post => <ArticleCard post={post}/>))
    },[])
    return feed;
}

export default Feed;