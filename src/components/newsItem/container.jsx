/* eslint-disable react/prop-types */
import { useGetItemByIdQuery } from "../../redux/services/api"
import { NewsItem } from "./component"
import styles from './styles.module.scss';

export const NewsItemContainer = ({ id }) => {
    const { data: story, isLoading } = useGetItemByIdQuery(id);

    if(isLoading) {
        return <>Loading...</>
    }

    if(!story) {
        return (
            <div className={styles.warning}>
                <div>Oops! Something went wrong...</div>
            </div>
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
        <NewsItem 
            story={story} 
            year={year} 
            month={month} 
            day={day} 
            hour={hour} 
            minute={minute}
        />
    )
}