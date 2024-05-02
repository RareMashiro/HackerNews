/* eslint-disable react/prop-types */
import { useGetItemByIdQuery } from "../../redux/services/api";
import { CommentsList } from "./component"
import styles from './styles.module.scss';

export const CommentsListContainer = ({id}) => {
    const { data: story, refetch, isFetching } = useGetItemByIdQuery(id);
    
    if(isFetching) {
        return (
            <p className={styles.loader}>Loading...</p>
        )
    }

    const date = new Date(story.time * 1000);
    
    const year = date.getFullYear();
    
    let month = (date.getMonth()+1).toString();
    if(month < 10) month = 0 + month;

    let day = (date.getDate()).toString();
    if(day < 10) day = 0 + day;

    let hour = (date.getHours()).toString();
    if(hour < 10) hour = 0 + hour;

    let minute = (date.getMinutes()).toString();
    if(minute < 10) minute = 0 + minute;

    return (
        <CommentsList 
            story={story} 
            refetch={refetch}
            year={year} 
            month={month} 
            day={day} 
            hour={hour} 
            minute={minute} 
        />
    )
}