import { useGetNewStoryIdsQuery } from "../../redux/services/api"
import { NewsList } from "./component"
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from './styles.module.scss';

export const NewsListContainer = () => {
    const { data: newsList, isFetching, refetch } = useGetNewStoryIdsQuery();
    
    useEffect(() => {
        setInterval(() => {
            refetch();
        }, 1000 * 60);
    }, [refetch]);

    if(isFetching) {
        return <p className={styles.loader}>Loading...</p>
    }
    
    return (
        <>
            <NewsList newsList={newsList}/>
            {!isFetching && createPortal(
                <button onClick={refetch}>Refresh</button>,
                document.getElementById('refresh-button')
            )}
        </>
    )
}