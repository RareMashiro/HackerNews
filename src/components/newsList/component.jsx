/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { NavLink } from "react-router-dom"
import { NewsItemContainer } from "../newsItem/container"

export const NewsList = ({ newsList }) => {
    return (
        <ul>
            {
                newsList.slice(0, 100).map(id => {
                    return (
                        <NavLink to={`/${id}`}>
                            <li>
                                <NewsItemContainer id={id}/>
                            </li>
                        </NavLink>
                    )
                })
            }
        </ul>
    )
}