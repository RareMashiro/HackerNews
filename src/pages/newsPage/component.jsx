import { NewsListContainer } from "../../components/newsList/container";
import styles from './styles.module.scss';

export const NewsPage = () => {
    return (
        <>
            <NewsListContainer />
            <div id="refresh-button" className={styles.refreshButton}></div>
        </>
    );
}