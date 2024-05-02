/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { NavLink } from "react-router-dom"
import { NewsItemContainer } from "../newsItem/container"
import styles from './styles.module.scss';

export const NewsList = ({ newsList }) => {
    return (
        <ul className={styles.newsList}>
            {
                newsList.slice(0, 100).map(id => {
                    return (
                        <NavLink to={`/${id}`}>
                            <li className={styles.newsItem}>
                                <NewsItemContainer id={id}/>
                            </li>
                        </NavLink>
                    )
                })
            }
        </ul>
    )
}