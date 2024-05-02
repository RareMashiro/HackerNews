/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useContext, useState } from "react";
import { CommentsItem } from "../commentsItem/component";
import { NavLink } from "react-router-dom";
import styles from './styles.module.scss';
import { createPortal } from "react-dom";
import { CountContext } from "../../contexts/count";


export const CommentsList = ({ story, refetch, year, month, day, hour, minute }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { sum } = useContext(CountContext);

    if(!story) {
        return (
            <>Loading...</>
        )
    }

    return (
        <>
            {
                createPortal(
                    <NavLink to={"/"}>
                        <button>
                            Return
                        </button>
                    </NavLink>,
                    document.getElementById('return-button')
                )
            }
            <div>
                <p><a href={story.url}>Source</a></p>
                <p>Title: {story.title}</p>
                <p>Publish date: {`${day}/${month}/${year} ${hour}:${minute}`}</p>
                <p>By: {story.by}</p>
            </div>
            <div className={styles.commsControl}>
                <button onClick={() => setIsOpen(!isOpen)}>Comments: {sum}</button>
                <button onClick={() => refetch()}>Refresh</button>
            </div>
            {
                isOpen && (story.kids ? story.kids.map((id) => <CommentsItem id={id}/>) 
                : <div>No comments here...</div>)
            }
        </>
    )
}