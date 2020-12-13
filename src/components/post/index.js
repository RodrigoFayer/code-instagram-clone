import { useState } from "react";
import Comment from "./../comment";
import LikeButton from "../likeButton";
import styles from './styles.module.css';
import Avatar from "./../avatar";

const Post = (props) => {
    const [comments,SetComments] = useState(props.post.comments);
    const [commentQuantity,setCommentQuantity] = useState(3);

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
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <p>{props.post.title}</p>
                <LikeButton postId={props.post.id} likeCount={props.post.like}/>
            </div>
            <small>{props.post.description}</small>
            <div style={{padding: '10px'}}>
                {comments.slice(0,commentQuantity).map(comment =>{
                    return (
                    <p
                        key={comment.id}
                        style={{
                            color: '#565656',
                            fontSize: '10px',
                            borderTopColor: "black",
                            borderTopWidth: "1px",
                            borderTopStyle: "solid"
                        }}
                    >
                        {comment.text}
                    </p>
                    );
                })}
                {commentQuantity < comments.length && (
                    <>
                        <button
                            onClick={() => setCommentQuantity(commentQuantity+3)}
                        >
                            Mostrar mais
                        </button>
                        <p>Ainda tem {comments.length - commentQuantity} comentários não vistos</p>
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