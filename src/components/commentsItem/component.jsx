/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useGetItemByIdQuery } from "../../redux/services/api";
import styles from './styles.module.scss';

export const CommentsItem = ({id, onClick}) => {
    const { data: comment } = useGetItemByIdQuery(id);
    const [isOpen, setIsOpen] = useState(false);

    if(!comment) {
        return <>Loading...</>
    }
    
    function getComm(com) {
        return (
            <ul className={styles.comItem}>
                {(com.by && com.text) ? 
                    <>
                        <li>By: {com.by}</li>
                        <li>Text: {com.text}</li>
                        {com.kids && com.kids.map((num) => {
                            return (
                                <>
                                    {isOpen && <CommentsItem onClick={() => setIsOpen(!isOpen)} id={num}/>}
                                </>
                            );
                        })}
                    </> :
                    <>Comment deleted!</>
                }
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