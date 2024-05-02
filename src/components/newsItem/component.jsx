/* eslint-disable react/prop-types */
// import styles from './styles.module.scss';

export const NewsItem = ({ story, year, month, day, hour, minute }) => {
    return (
        <div>
            <div>Title: {story.title}</div>
            <div>Score: {story.score}</div>
            <div>Nickname: {story.by}</div>
            <div>Publish date: {`${day}/${month}/${year} ${hour}:${minute}`}</div>
        </div>
    )
}