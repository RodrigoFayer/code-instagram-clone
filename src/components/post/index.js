import Comment from "./../comment";
import styles from './styles.module.css';
import Avatar from "./../avatar";

const Post = (props) => {
    console.log("post props",props);
    return (
        <article className={styles.post}>
            <Avatar 
                userName={props.userName}
                userImageUrl={props.userImageUrl}
            />
           <img
                src={props.imageUrl}
                className={styles.image}
                alt={"post-image-"+props.imageTitle}
            />
            <p>{props.imageTitle}</p>
            <small>{props.imageDescription}</small>
            <footer className={styles.footer}>
                <Comment/>
            </footer>
        </article>
    );
}

export default Post;