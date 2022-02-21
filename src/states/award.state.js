import moment from "moment";
import {useMemo, useState} from "react";
import {articles} from "../content/articles";

function sortArticles(articles) {
    return articles.map(a => {
        a.date = moment(a.date);
        return a;
    }).sort((a, b) => {
        return moment(b.date).format('X') - moment(a.date).format('X');
    });
}

export function useAwardsState() {
    const [displayedNum, setDisplayedNum] = useState(6);
    
    const sortedArticles = useMemo(() => {
        const sorted = sortArticles(articles);
        return sorted.slice(0, displayedNum);
    }, [displayedNum]);
    
    const allLoaded = useMemo(() => articles.length <= displayedNum, [displayedNum]);
    
    return {
        updateDisplayedArticles: setDisplayedNum,
        articles: sortedArticles,
        allLoaded,
    };
}
