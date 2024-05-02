/* eslint-disable react/prop-types */
import styles from './styles.module.scss';

export const Header =() => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>Top 100 Hacker-News fresh stories</div>
            <div>
                <div id="refresh-button" className={styles.refreshButton}></div> 
                <div id="return-button" className={styles.returnButton}></div>
            </div>
        </div>
    )
}