import { useParams } from "react-router-dom";
import { CommentsListContainer } from "../../components/commentsList/container";

export const DescPage = () => {
    const { commentId } = useParams(); 
    
    return (
        <CommentsListContainer id={commentId} />
    )
}