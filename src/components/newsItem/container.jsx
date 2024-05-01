/* eslint-disable react/prop-types */
import { useGetItemByIdQuery } from "../../redux/services/api"
import { NewsItem } from "./component"

export const NewsItemContainer = ({ id }) => {
    const { data: story, isLoading } = useGetItemByIdQuery(id);

    if(isLoading) {
        return <>Loading...</>
    }
    
    return (
        <NewsItem story={story}/>
    )
}