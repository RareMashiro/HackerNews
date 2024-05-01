import { useGetItemByIdQuery } from "../../redux/services/api";
import { CommentsList } from "./component"

export const CommentsListContainer = ({id}) => {
    const { data: story, refetch, isFetching } = useGetItemByIdQuery(id);
    
    if(isFetching) {
        return (
            <>Loading...</>
        )
    }

    return (
        <CommentsList story={story} refetch={refetch} />
    )
}