/* eslint-disable react/prop-types */
export const NewsItem = ({ story }) => {
    if(!story) {
        return;
    }

    const date = new Date(story.time * 1000);

    return (
        <div>
            <div>title: {story.title}</div>
            <div>score: {story.score}</div>
            <div>nickname: {story.by}</div>
            <div>time: {date.toString()}</div>
        </div>
    )
}