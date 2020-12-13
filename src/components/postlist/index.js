import Post from "../post";
import styles from './styles.module.css';

const PostList = (props) =>{
    return (
        <main className={styles.wrapper}>
            <div className={styles.list}>
                {
                    props.posts.map((post) =>
                        <Post
                            key={post.id}
                            post={post}
                        />
                        )
                }
            </div>
        </main>
    )
}

export default PostList;