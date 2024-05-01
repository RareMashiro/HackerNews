/* eslint-disable react/jsx-key */
import { useGetItemByIdQuery } from "../../redux/services/api";
import { useState } from "react";

export const CommentsItem = ({id}) => {
    const { data: comment } = useGetItemByIdQuery(id);
    const [isOpen, setIsOpen] = useState(false);

    if(!comment) {
        return <>Loading...</>
    }
    
    function getComm(com) {
        return (
            <ul>
                <li>By: {com.by}</li>
                <li>Text: {com.text}</li>
                {com.kids && com.kids.map((num) => {
                    return (
                        <>
                            {com.kids && <button onClick={() => setIsOpen(!isOpen)}>Replies</button>}
                            {isOpen && <CommentsItem id={num}/>}
                        </>
                    );
                })}
            </ul>
        )
    }

    return (
        <>
            {getComm(comment)}
            <button onClick={() => setIsOpen(!isOpen)}>Replies</button>
        </>
    )
}