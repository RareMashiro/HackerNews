/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { CommentsItem } from "../commentsItem/component";
import { NavLink } from "react-router-dom";


export const CommentsList = ({ story, refetch }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    if(!story) {
        return (
            <>Loading...</>
        )
    }

    const date = new Date(story.time * 1000);

    return (
        <>
            <NavLink to={"/"}>
                <button>
                    Return
                </button>
            </NavLink>
            <div>
                <p><a href={story.url}>Источник</a></p>
                <p>Заголовок: {story.title}</p>
                <p>Дата: {date.toString()}</p>
                <p>Автор: {story.by}</p>
            </div>
            <button onClick={() => setIsOpen(!isOpen)}>Comments:</button>
            <button onClick={() => refetch()}>Refresh</button>
            {
                isOpen && (story.kids ? story.kids.map((id) => <CommentsItem id={id}/>) 
                : <div>No comments here...</div>)
            }
        </>
    )
}