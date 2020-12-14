import { useState } from "react";
import Comment from "./../comment";
import LikeButton from "../likeButton";
import styles from './styles.module.css';
import Avatar from "./../avatar";


const Post = (props) => {
    const [comments,SetComments] = useState(props.post.comments);
    const [commentQuantity,setCommentQuantity] = useState(2);

    const addNewComment = (comment) => {
        const commentList = [...comments];
        commentList.push(comment);
        SetComments(commentList);
    }
    
    return (
        <article className={styles.post}>
            <Avatar 
                userName={props.post.user.name}
                userImageUrl={props.post.user.avatar}
            />
           <img
                src={props.post.imageUrl}
                className={styles.image}
                alt={"post-image-"+props.post.title}
            />
            <div >
                <LikeButton postId={props.post.id} likeCount={props.post.like}/>
            </div>
            <div >
                <p className={styles.title}><b>{props.post.user.name}</b>: {props.post.title}</p>
            </div>
            <div className={styles.description}>
                <p>{props.post.description}</p>
            </div>
            <div className={styles.commentList}>
                {comments.slice(0,commentQuantity).map(comment =>{
                    return (
                    <p
                        key={comment.id}
                        className={styles.comment}
                    >
                        {comment.text}
                    </p>
                    );
                })}
                {commentQuantity < comments.length && (
                    <>
                        <p className={styles.viewComment}>Ainda tem {comments.length - commentQuantity} comentários não vistos</p>
                        <button
                            onClick={() => setCommentQuantity(commentQuantity+2)}
                            className={styles.buttonComment}
                        >
                            Mostrar mais
                        </button>
                    </>
                )}
                
            </div>
            <footer className={styles.footer}>
                <Comment postId={props.post.id} addNewComment={addNewComment}/>
            </footer>
        </article>
    );
}

export default Post;